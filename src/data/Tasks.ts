import { TasksOptions } from "../types";

const Tasks: Array<TasksOptions> = [
    {
        id: "Board-Todo",
        title:"Todo",
        items: [
            {
                id: "task-1",
                content: "hello world task-1",
                isComplete: false
            },
            {
                id: "task-2",
                content: "hello world task-2",
                isComplete: false
            },
            {
                id: "task-3",
                content: "hello world task-3",
                isComplete: false
            }
        ],
        showActionBtn:true,
        baseColor:"#FEF4F3",
        titleColor:"#6E1E29",
        actionBtnColor:"#D37A87",
        countColor:"#D4AFB4"
    },
    {
        id: "Board-Doing",
        title:"Doing",
        items: [
            {
                id: "task-4",
                content: "hello world task-4",
                isComplete: false
            }
        ],
        showActionBtn:true,
        baseColor:"#FFFBF2",
        titleColor:"#795B19",
        actionBtnColor:"#C2A25B",
        countColor:"#DECCA4"
    },
    {
        id: "Board-Done",
        title:"Done",
        items: [
            {
                id: "task-5",
                content: "hello world task-5",
                isComplete: true
            },
            {
                id: "task-6",
                content: "hello world task-6",
                isComplete: true
            }
        ],
        showActionBtn:false,
        baseColor:"#F4F9F3",
        titleColor:"#286C1A",
        countColor:"#BCD7B6"
    },
]

export default Tasks