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
var TodoItemRenderer = (function () {
    function TodoItemRenderer() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', todoService_1.TodoModel)
    ], TodoItemRenderer.prototype, "todo");
    TodoItemRenderer = __decorate([
        angular2_1.Component({
            selector: 'todo-item-renderer'
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass],
            styles: ["\n        .completed{\n            text-decoration: line-through;\n            color: red;\n        }\n        .started{\n\n        }\n    "],
            template: "\n        <div style=\"display: inline;\">\n            <span [content-editable]=\"todo.canEdit == 'yes'\" [ng-class]=\"todo.status\">{{todo.title}}</span>\n            <button (click)=\"todo.btnEdit()\">Edit</button>\n            <button (click)=\"todo.btnStyle()\">Check Off</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRenderer);
    return TodoItemRenderer;
})();
exports.TodoItemRenderer = TodoItemRenderer;
//# sourceMappingURL=todoItemRenderer.js.map