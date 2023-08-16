import { TasksOptions } from "../types";

const Boards: Array<TasksOptions> = [
    {
        id: "Todo",
        title:"Todo",
        status: 0,
        items: [
            {
                id: "task-1",
                content: "hello world task-1",
                status: 0
            },
            {
                id: "task-2",
                content: "hello world task-2",
                status: 0
            },
            {
                id: "task-3",
                content: "hello world task-3",
                status: 0
            }
        ],
        showActionBtn:true,
        baseColor:"#FEF4F3",
        titleColor:"#6E1E29",
        actionBtnColor:"#D37A87",
        countColor:"#D4AFB4"
    },
    {
        id: "Doing",
        title:"Doing",
        status: 1,
        items: [
            {
                id: "task-4",
                content: "hello world task-4",
                status: 1
            }
        ],
        showActionBtn:true,
        baseColor:"#FFFBF2",
        titleColor:"#795B19",
        actionBtnColor:"#C2A25B",
        countColor:"#DECCA4"
    },
    {
        id: "Done",
        title:"Done",
        status: 2,
        items: [
            {
                id: "task-5",
                content: "hello world task-5",
                status: 2
            },
            {
                id: "task-6",
                content: "hello world task-6",
                status: 2
            }
        ],
        showActionBtn:false,
        baseColor:"#F4F9F3",
        titleColor:"#286C1A",
        countColor:"#BCD7B6"
    },
]

export default Boards