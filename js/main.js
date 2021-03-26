window.onload = function() {
    toggleMenu();
    renderProject();
}

function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {

        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
        menuOpen = true;

    })

    navLinks.addEventListener('click', () => {

        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');

    })

}


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
let project1 = new Project("../img/webshop-desk.png", "../img/webshop-mob.png", "webshop", "Webshop with JQuery & SCSS", "Shopping cart items and customer details saved in local storage and summarized in an order confirmation.", "https://loulapins.github.io/AccentWebshop/");
let project2 = new Project("../img/taskbase-desk.png", "../img/taskbase-mob.png", "taskbase", "Task app with Node & Express", "Lets user create, read, update and delete tasks stored in MongoDB.", "https://github.com/LouLapins/Node.js-TodoList");
let project3 = new Project("../img/imitation-desk.png", "../img/imitation-mob.png", "imitation", "Follow a given design", "Responsive website made with SCSS after my teacher's design, with hamburger bar animation.", "https://loulapins.github.io/Imitate-design/");
let project4 = new Project("../img/todolist-desk.png", "../img/todolist-mob.png", "todolist", "Task app with Vanilla JS", "My first Javascript project, lets user add tasks, mark them as completed or delete them.", "https://loulapins.github.io/To-do-List/");
let project5 = new Project("../img/bootstrap-desk.png", "../img/bootstrap-mob.png", "bootstrap", "Responsive Bootstrap website", "Mock travel blog featuring automatic image slider and modal. First school project.", "https://loulapins.github.io/Bootstrap-HappyTravels/");


myProjects = [project1, project2, project3, project4, project5];

function renderProject() {

    for (let i = 0; i < myProjects.length; i++) {

        let workWrapper = document.getElementById("work-wrapper");
        let card = document.createElement("div");
        card.className = "card";
        workWrapper.appendChild(card);

        let imgCont = document.createElement("div");
        imgCont.className = "img-cont";
        card.appendChild(imgCont);

        let deskImg = document.createElement("img");
        deskImg.className = "desk-img";
        deskImg.setAttribute("src", myProjects[i].deskImg);
        deskImg.setAttribute("alt", "Screenshot of " + myProjects[i].name + " site");
        imgCont.appendChild(deskImg);

        let mobImg = document.createElement("img");
        mobImg.className = "mob-img";
        mobImg.setAttribute("src", myProjects[i].mobImg);
        mobImg.setAttribute("alt", "Screenshot of " + myProjects[i].name + " site");

        imgCont.appendChild(mobImg);

        let text = document.createElement("div");
        text.className = "text";
        card.appendChild(text);

        let heading = document.createElement("h3");
        heading.innerHTML = myProjects[i].heading;
        text.appendChild(heading);

        let description = document.createElement("p");
        description.innerHTML = myProjects[i].description;
        text.appendChild(description);

        let moreBtn = document.createElement("p");
        moreBtn.id = "more-btn"
        moreBtn.innerHTML = "See more";
        text.appendChild(moreBtn);


        card.addEventListener("click", () => { linkToSite(myProjects[i]) });

    }

}

function linkToSite(project) {
    window.open(project.url, "_blank");
}