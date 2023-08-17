
import { TaskOptions } from "../../types";
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { HTMLAttributes, useContext } from "react"
import { TaskItem } from "../TaskItem";
import { SetBoardsContext } from "../../data/context";
import { Droppable, Draggable } from "react-beautiful-dnd";


const variants = cva(
    `w-full rounded-[10px] p-[20px_20px_30px_20px] flex flex-col gap-y-[20px]`
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    id: string;
    title: string;
    items: Array<TaskOptions>;
    baseColor: string;
    titleColor: string;
    actionBtnColor?: string;
    countColor: string;
    showActionBtn?: boolean;
}

function Board({ title, id, items, className, baseColor, titleColor, actionBtnColor, countColor, showActionBtn = true, ...props }: Props) {

    const { newTask, deleteTask } = useContext(SetBoardsContext)

    const handleOnNewTask = () => {
        const task: TaskOptions = newTask(id, {
            content: "",
            id: "",
            status: null
        });
        setTimeout(() => {
            const newTaskElement = document.getElementById("task-item-" + task.id) as HTMLTextAreaElement;
            newTaskElement?.addEventListener("paste", (e) => {
                e.preventDefault()
                const data = e.clipboardData?.getData("text").split("\n") || [];
                deleteTask(task.id, id)
                if (data?.length > 1) {
                    for (let index = 0; index < data.length; index++) {
                        if(data[index].trim() === "") continue
                        newTask(id, {
                            content: data[index].trim(),
                            id: "",
                            status: null
                        })
                    }
                }
            })
            newTaskElement?.click()
            setTimeout(() => {
                newTaskElement?.focus()
            }, 10);
        }, 40);
    }

    return (
        <Droppable droppableId={id} >
            {
                (provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <div style={{ backgroundColor: baseColor }} className={twMerge(variants({ className }))}
                            {...props}
                        >

                            <div className="flex items-center justify-between">
                                <p
                                    className="text-base font-medium"
                                    style={{
                                        color: titleColor
                                    }}
                                >
                                    {title}
                                </p>

                                <p
                                    style={{
                                        color: countColor
                                    }}
                                    className="text-sm"
                                >
                                    {items?.length} Tasks
                                </p>
                            </div>

                            <div className="space-y-2">
                                {
                                    items?.map((item, index) => (
                                        <Draggable index={index} draggableId={item.id} key={item.id} >
                                            {
                                                (provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                    >
                                                        <TaskItem status={item.status || 0} boardId={id} isComplete={item.status === 2} content={item.content} id={item.id} key={item.id} />
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                            </div>

                            {
                                showActionBtn
                                    ?
                                    <button
                                        onClick={handleOnNewTask}
                                        style={{
                                            color: actionBtnColor
                                        }}
                                        className="appearance-none text-sm w-max flex items-center gap-x-2 leading-none
                            py-2 px-3 hover:bg-transparent/[0.03] rounded-lg transition-all duration-300 active:scale-95"
                                    >
                                        <svg style={{ fill: actionBtnColor }} className="w-2.5 h-2.5 " viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5.14285" width="1.71429" height="12" rx="0.857143" />
                                            <rect y="6.85714" width="1.71429" height="12" rx="0.857143" transform="rotate(-90 0 6.85714)" />
                                        </svg>

                                        New
                                    </button>
                                    :
                                    null
                            }
                        </div>
                        {provided.placeholder}

                    </div>
                )
            }
        </Droppable>
    )
}

export default Board