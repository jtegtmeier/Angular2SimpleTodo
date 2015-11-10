/**
 * Created by TEG on 11/9/2015.
 */
//noinspection TypeScriptCheckImport
import {Component, View, NgFor} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";

@Component({
    selector: 'todo-list'
})
@View({
    directives: [NgFor, TodoItemRenderer],
    template:`
        <div>
            <div *ng-for="#todo of todoService.todos">
                <todo-item-renderer [todo]="todo"></todo-item-renderer>
                <button (click)="todoService.btnX(todo)">X</button>
            </div>
        </div>
    `
})

export class TodoList{
    constructor(
        public todoService:TodoService
    ){

    }
}