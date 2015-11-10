/**
 * Created by TEG on 11/9/2015.
 */
//noinspection TypeScriptCheckImport
import {Component, View, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from './todoService';

@Component({
    selector: 'teg-todo-input'
})

@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <form (submit)="onSubmit()" #hf="form">
            Add Item: <input type="text" [(ng-model)]="todoModel.title" ng-control="title">
        </form>
    `
})

export class TegTodoInput{
    todoModel:TodoModel = new TodoModel();

    constructor(
        public todoService:TodoService
    ){
        console.log(todoService);
    }

    onSubmit(){
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}