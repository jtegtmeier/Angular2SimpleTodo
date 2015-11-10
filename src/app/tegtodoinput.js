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
var todoService_1 = require('./todoService');
var TegTodoInput = (function () {
    function TegTodoInput(todoService) {
        this.todoService = todoService;
        this.todoModel = new todoService_1.TodoModel();
        console.log(todoService);
    }
    TegTodoInput.prototype.onSubmit = function () {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new todoService_1.TodoModel();
    };
    TegTodoInput = __decorate([
        angular2_1.Component({
            selector: 'teg-todo-input'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n        <form (submit)=\"onSubmit()\" #hf=\"form\">\n            Add Item: <input type=\"text\" [(ng-model)]=\"todoModel.title\" ng-control=\"title\">\n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TegTodoInput);
    return TegTodoInput;
})();
exports.TegTodoInput = TegTodoInput;
//# sourceMappingURL=tegtodoinput.js.map