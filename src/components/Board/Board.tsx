
import { TaskOptions } from "../../types";
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { HTMLAttributes } from "react"
import { TaskItem } from "../TaskItem";


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
    return (
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

            <div className="space-y-1.5">
                {
                    items?.map(item => (
                        <TaskItem isComplete={item.isComplete} content={item.content} id={item.id} key={item.id} />
                    ))
                }
            </div>

            {
                showActionBtn
                    ?
                    <button
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
    )
}

export default Board