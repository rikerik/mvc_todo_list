//The model never touches the view. The view never touches the model.
//The controller connects them.

class Model {
  //Manages the data of an application
  constructor() {
    //The state of the model, an rray of todo object, prepopulated with some data
    //empty array of the model
    this.todos = [
      { id: 1, text: "Finish todo app", complete: false },
      { id: 2, text: "Sleep 8 hours", complete: false },
    ];
  }

  //function for adding todos
  addTodo(todoText) {
    const todo = {
      //If the length of this.todos is greater than 0, then the code retrieves the
      //last element from the array and increments its id value by 1.
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };
    //here we add the const todo to the array
    this.todos.push(todo);
  }
  //Map through all todos, and replace the text of the todo with specified id
  editTodo(id, updatedText) {
    this.todos = this.todos.map((todo) =>
      // Check if the current todo's id matches the parameter id
      // If the ids match, update the todo's text with the updatedText parameter
      // Otherwise, the todo wont change and the array will stay the same
      todo.id === id
        ? { id: todo.id, text: updatedText, complete: todo.complete }
        : todo
    );
  }

  //Delete a todo from the array by id
  deleteTodo(id) {
    //The filter function iterates over each todo element in the array
    //and only keep the elements that have a different id
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  //Flip the complete boolean on the specified todo
  //we iterate through the elements and if we find the matching id,
  //the complete property will be changed
  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: todo.text, complete: !todo.complete }
        : todo
    );
  }
}

class View {
  //A visual representation of the model
  constructor() {
    //the root element
    this.app = this.getElement("#root");

    //the title of the app
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";

    //the form with a [type="text"] input, and a submit button
    this.form = this.createElement("form");

    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";

    this.submitButton = this.createElement("button");
    this.submitButton.textContent = "Submit";

    //the visual representation of the todo list
    this.todoList = this.createElement("ul", "todo-list");

    //Append the input and submit button to the form
    this.form.append(this.input, this.submitButton);

    //append the title, form and todo list to the app
    this.app.append(this.title, this.form, this.todoList);
  }

  //Create an element with an optional css class

  //This function creates an HTML element with the specified
  //tag and adds an optional class name to it.
  //It starts by using the document.createElement(tag) method to create a
  //new element of the specified tag type (e.g., 'div', 'span', 'p', etc.).
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    //If a class name is provided as the second argument, the function adds that
    //class to the element using the classList.add(className) method.
    //This allows to easily apply CSS styles or select the element later using the class name.

    return element;
  }

  //Retrive an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
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
