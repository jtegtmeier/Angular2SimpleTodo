/**
 * Created by TEG on 11/9/2015.
 */
//noinspection TypeScriptCheckImport
import {Component, View, Input, NgClass} from "angular2/angular2";
import {TodoModel} from "./todoService";

@Component({
    selector: 'todo-item-renderer'
})
@View({
    directives: [NgClass],
    styles: [`
        .completed{
            text-decoration: line-through;
            color: red;
        }
        .started{

        }
    `],
    template:`
        <div style="display: inline;">
            <span [content-editable]="todo.canEdit == 'yes'" [ng-class]="todo.status">{{todo.title}}</span>
            <button (click)="todo.btnEdit()">Edit</button>
            <button (click)="todo.btnStyle()">Check Off</button>
        </div>
    `
})

export class TodoItemRenderer{
    @Input() todo:TodoModel;
}