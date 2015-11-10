//noinspection TypeScriptCheckImport
import {Component, bootstrap, View} from 'angular2/angular2';
import {TegTodoInput} from "./tegtodoinput";
import {TodoService} from "./todoService";
import {TodoList} from "./todoList";

@Component({
    selector: 'teg-app'
})
@View({
    directives: [TegTodoInput, TodoList],
    template: `
        <h1>My Nth Angular2 App - Todo List</h1>
        <div>
            <teg-todo-input></teg-todo-input>
            <br>
            <todo-list></todo-list>
        </div>
        `
})

class App { }

//noinspection TypeScriptValidateTypes
bootstrap(App, [TodoService]);