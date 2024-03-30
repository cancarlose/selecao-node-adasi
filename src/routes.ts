import { CourseController } from "./controllers/CourseController"
import { StudentController } from "./controllers/StudentController"
import { TaskController } from "./controllers/TaskController"
import { ActivityController } from "./controllers/ActivityController"

export const Routes = [{
    method: "get",
    route: "/curso",
    controller: CourseController,
    action: "all"
}, {
    method: "get",
    route: "/curso/:id",
    controller: CourseController,
    action: "one"
}, {
    method: "post",
    route: "/curso",
    controller: CourseController,
    action: "save"
}, {
    method: "put",
    route: "/curso/:id",
    controller: CourseController,
    action: "update"
}, {
    method: "delete",
    route: "/curso/:id",
    controller: CourseController,
    action: "remove"
},{
    method: "get",
    route: "/estudante",
    controller: StudentController,
    action: "all"
},{
    method: "get",
    route: "/estudante/:id",
    controller: StudentController,
    action: "one"
},{
    method: "post",
    route: "/estudante",
    controller: StudentController,
    action: "save"
},{
    method: "put",
    route: "/estudante/:id",
    controller: StudentController,
    action: "update"
},{
    method: "delete",
    route: "/estudante/:id",
    controller: StudentController,
    action: "remove"
},{
    method: "get",
    route: "/tarefa",
    controller: TaskController,
    action: "all"
},{
    method: "get",
    route: "/tarefa/:id",
    controller: TaskController,
    action: "one"
},{
    method: "post",
    route: "/tarefa",
    controller: TaskController,
    action: "save"
},{
    method: "put",
    route: "/tarefa/:id",
    controller: TaskController,
    action: "update"
},{
    method: "delete",
    route: "/tarefa/:id",
    controller: TaskController,
    action: "remove"
},{
    method: "get",
    route: "/atividade",
    controller: ActivityController,
    action: "all"
},{
    method: "get",
    route: "/atividade/:id",
    controller: ActivityController,
    action: "one"
},{
    method: "post",
    route: "/atividade",
    controller: ActivityController,
    action: "save"
},{
    method: "put",
    route: "/atividade/:id",
    controller: ActivityController,
    action: "update"
},{
    method: "delete",
    route: "/atividade/:id",
    controller: ActivityController,
    action: "remove"
},
]
   
