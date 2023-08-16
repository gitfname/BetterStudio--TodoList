import { TasksOptions } from "../types";

const Tasks: Array<TasksOptions> = [
    {
        id: "Board-Todo",
        title:"Todo",
        items: [],
        showActionBtn:true,
        baseColor:"#FEF4F3",
        titleColor:"#6E1E29",
        actionBtnColor:"#D37A87",
        countColor:"#D4AFB4"
    },
    {
        id: "Board-Doing",
        title:"Doing",
        items: [],
        showActionBtn:true,
        baseColor:"#FFFBF2",
        titleColor:"#795B19",
        actionBtnColor:"#C2A25B",
        countColor:"#DECCA4"
    },
    {
        id: "Board-Done",
        title:"Done",
        items: [],
        showActionBtn:false,
        baseColor:"#F4F9F3",
        titleColor:"#286C1A",
        countColor:"#BCD7B6"
    },
]

export default Tasks