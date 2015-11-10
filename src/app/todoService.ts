/**
 * Created by TEG on 11/9/2015.
 */

export class  TodoModel{
    status:string = "started";
    canEdit:string = "no";

    constructor(
        public title:string = ""
    ){}

    btnEdit():void{
        if(this.canEdit == "no") this.canEdit = "yes";
        else this.canEdit = "no";
    }

    btnStyle():void{
        if(this.status == "started") this.status = "completed";
        else this.status = "started";
    }
}

export class  TodoService{
    todos:TodoModel[] = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("rave"),
        new TodoModel("repeat")
    ];

    addTodo(value:any):void {
        this.todos.push(value);
    }

    btnX(value:any):void{
        console.log(value);
        let index:number = this.todos.indexOf(value);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}