var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by TEG on 11/9/2015.
 */
//noinspection TypeScriptCheckImport
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var todoItemRenderer_1 = require("./todoItemRenderer");
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
    }
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, todoItemRenderer_1.TodoItemRenderer],
            template: "\n        <div>\n            <div *ng-for=\"#todo of todoService.todos\">\n                <todo-item-renderer [todo]=\"todo\"></todo-item-renderer>\n                <button (click)=\"todoService.btnX(todo)\">X</button>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
//# sourceMappingURL=todoList.js.map