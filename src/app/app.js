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
//noinspection TypeScriptCheckImport
var angular2_1 = require('angular2/angular2');
var tegtodoinput_1 = require("./tegtodoinput");
var todoService_1 = require("./todoService");
var todoList_1 = require("./todoList");
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'teg-app'
        }),
        angular2_1.View({
            directives: [tegtodoinput_1.TegTodoInput, todoList_1.TodoList],
            template: "\n        <h1>My Nth Angular2 App - Todo List</h1>\n        <div>\n            <teg-todo-input></teg-todo-input>\n            <br>\n            <todo-list></todo-list>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
//noinspection TypeScriptValidateTypes
angular2_1.bootstrap(App, [todoService_1.TodoService]);
//# sourceMappingURL=app.js.map