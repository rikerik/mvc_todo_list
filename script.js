//The model never touches the view. The view never touches the model.
//The controller connects them.


class Model {
    //Manages the data of an application
    constructor() {
        //The state of the model, an rray of todo object, prepopulated with some data
        //empty array of the model
        this.todos = [
            { id: 1, text: 'Finish todo app', complete: false },
            { id: 2, text: 'Sleep 8 hours', complete: false },
        ]
    }

    //function for adding todos
    addTodo(todoText) {
        const todo = {
            //If the length of this.todos is greater than 0, then the code retrieves the
            //last element from the array and increments its id value by 1.
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }
        //here we add the const todo to the array
        this.todos.push(todo);
    }
    //Map through all todos, and replace the text of the todo with specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map((todo) =>
            // Check if the current todo's id matches the parameter id
            // If the ids match, update the todo's text with the updatedText parameter
            // Otherwise, the todo wont change and the array will stay the same
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo,
        )
    }
}

class View {
    //A visual representation of the model
    constructor() {
    }
}

class Controller {
    //links the user and the system
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}

//The app will be an instance of the controller.
const app = new Controller(new Model(), new View());

