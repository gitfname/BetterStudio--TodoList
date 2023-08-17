import { TasksOptions } from "../types";

const Boards: Array<TasksOptions> = [
    {
        id: "Todo",
        title:"Todo",
        status: 0,
        items: [
            {
                id: "task-1",
                content: "Start with meditation, exercise & breakfast for a productive day",
                status: 0
            },
            {
                id: "task-2",
                content: "Read to learn something new every day",
                status: 0
            },
            {
                id: "task-3",
                content: "Learn something fresh and relevant",
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
                content: "Engage & question in meetings",
                status: 1
            },
            {
                id: "task-11",
                content: "Use time-blocking for effective days",
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
                content: "Finish online cource - check!",
                status: 2
            },
            {
                id: "task-6",
                content: "congratulate yoursel foor incorporating healthier habits into your lifestyle, like regualr exercise or mindful eating",
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