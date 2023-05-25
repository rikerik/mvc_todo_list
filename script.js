//The model never touches the view. The view never touches the model.
//The controller connects them.


class Model {
    //Manages the data of an application
    constructor() {
    }
}

class View {
    //A visual representation of the model
    constructor() {
    }
}

class Controller {
    //links the user and the system
    //The app will be an instance of the controller.
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}