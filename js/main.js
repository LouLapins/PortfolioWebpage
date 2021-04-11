class Project {
    constructor(deskImg, mobImg, name, heading, description, url) {
        this.deskImg = deskImg;
        this.mobImg = mobImg;
        this.name = name;
        this.heading = heading;
        this.description = description;
        this.url = url;

    }
}

//Project objects
let project0 = new Project("../img/dbshop-desk.jpg", "../img/dbshop-mob.jpg", "dbshop", "Webshop with Node & MongoDB", "Fully functional webshop where admin users can upload products to be sold. Products, user accounts, wishlists & shopping carts are stored in MongoDB.", "https://school-db-webshop.herokuapp.com/");
let project1 = new Project("../img/webshop-desk.jpg", "../img/webshop-mob.png", "webshop", "Webshop with JQuery & SCSS", "Mock webshop where shopping cart items and customer details are saved in local storage and summarized in an order confirmation at the final step.", "https://loulapins.github.io/AccentWebshop/");
let project2 = new Project("../img/taskbase-desk.jpg", "../img/taskbase-mob.png", "taskbase", "Task app with Node & Express", "Lets user create, read, update and delete tasks stored in MongoDB.", "https://taskbase.herokuapp.com/");
let project3 = new Project("../img/imitation-desk.jpg", "../img/imitation-mob.jpg", "imitation", "Follow a given design", "Responsive website made with SCSS after my teacher's design, with hamburger bar animation.", "https://loulapins.github.io/Imitate-design/");
let project4 = new Project("../img/todolist-desk.jpg", "../img/todolist-mob.png", "todolist", "Task app with Vanilla JS", "My first Javascript project. All html elements are built through JS. The web app lets user add tasks, mark them as completed or delete them.", "https://loulapins.github.io/To-do-List/");
let project5 = new Project("../img/bootstrap-desk.jpg", "../img/bootstrap-mob.jpg", "bootstrap", "Responsive Bootstrap website", "Mock travel blog featuring automatic image slider and modal. First school project.", "https://loulapins.github.io/Bootstrap-HappyTravels/");


myProjects = [project0, project1, project2, project3, project4, project5];