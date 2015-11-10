/**
 * Created by TEG on 11/9/2015.
 */
var TodoModel = (function () {
    function TodoModel(title) {
        if (title === void 0) { title = ""; }
        this.title = title;
        this.status = "started";
        this.canEdit = "no";
    }
    TodoModel.prototype.btnEdit = function () {
        if (this.canEdit == "no")
            this.canEdit = "yes";
        else
            this.canEdit = "no";
    };
    TodoModel.prototype.btnStyle = function () {
        if (this.status == "started")
            this.status = "completed";
        else
            this.status = "started";
    };
    return TodoModel;
})();
exports.TodoModel = TodoModel;
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new TodoModel("eat"),
            new TodoModel("sleep"),
            new TodoModel("rave"),
            new TodoModel("repeat")
        ];
    }
    TodoService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    TodoService.prototype.btnX = function (value) {
        console.log(value);
        var index = this.todos.indexOf(value);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    return TodoService;
})();
exports.TodoService = TodoService;
//# sourceMappingURL=todoService.js.map