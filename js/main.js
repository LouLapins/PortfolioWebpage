$(function() {

    toggleMenu();
    renderProject();

});

function toggleMenu() {

    let menuOpen = false;

    $('.menu-btn')
        .on("click", function() {

            $('.menu-btn').toggleClass('open');
            $('.nav-links').toggleClass('open');
            menuOpen = true;
        });

    $('.nav-links')
        .on("click", function() {

            $('.menu-btn').removeClass('open');
            $('.nav-links').removeClass('open');

        });
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
let project2 = new Project("../img/taskbase-desk.png", "../img/taskbase-mob.png", "taskbase", "Task app with Node & Express", "Lets user create, read, update and delete tasks stored in MongoDB. This project is not yet deployed, but is coming soon.", "https://github.com/LouLapins/Node.js-TodoList");
let project3 = new Project("../img/imitation-desk.png", "../img/imitation-mob.png", "imitation", "Follow a given design", "Responsive website made with SCSS after my teacher's design, with hamburger bar animation.", "https://loulapins.github.io/Imitate-design/");
let project4 = new Project("../img/todolist-desk.png", "../img/todolist-mob.png", "todolist", "Task app with Vanilla JS", "My first Javascript project. All html elements are built through JS. The web app lets user add tasks, mark them as completed or delete them.", "https://loulapins.github.io/To-do-List/");
let project5 = new Project("../img/bootstrap-desk.png", "../img/bootstrap-mob.png", "bootstrap", "Responsive Bootstrap website", "Mock travel blog featuring automatic image slider and modal. First school project.", "https://loulapins.github.io/Bootstrap-HappyTravels/");


myProjects = [project1, project2, project3, project4, project5];

function renderProject() {

    $.each(myProjects, (i, project) => {

        $("<img>")
            .addClass("project-img")
            .attr("src", project.mobImg)
            .attr("alt", "Screenshot of " + project.name + " site")
            .on("click", { project: project }, function() {

                $("<div>")
                    .addClass("myModal")
                    .appendTo($("#work"));

                $("body")
                    .addClass("lockScreen");

                let card = $("<div>")
                    .addClass("card")
                    .hide()
                    .fadeIn(300)
                    .appendTo($("#work"));

                $("<span>")
                    .addClass("close-btn")
                    .html("&#10005")
                    .on("click", function() {
                        $(".card")
                            .fadeOut(300, function() {
                                $(".myModal")
                                    .remove()

                                $("body")
                                    .removeClass("lockScreen")

                                $(".card")
                                    .remove()
                            });
                    })
                    .appendTo($(".card"));

                $("<div>")
                    .addClass("img-cont")
                    .appendTo($(".card"));

                $("<img>")
                    .addClass("desk-img")
                    .attr("src", project.deskImg)
                    .attr("alt", "Screenshot of " + project.name + " site")
                    .appendTo($(".img-cont"));

                $("<img>")
                    .addClass("mob-img")
                    .attr("src", project.mobImg)
                    .attr("alt", "Screenshot of " + project.name + " site")
                    .appendTo($(".img-cont"));


                $("<div>")
                    .addClass("description")
                    .appendTo($(".card"));

                $("<h3>")
                    .html(project.heading)
                    .appendTo($(".description"));

                $("<p>")
                    .html(project.description)
                    .appendTo($(".description"));

                $("<a>")
                    .addClass("visit-btn")
                    .html("Visit site")
                    .attr("href", project.url)
                    .attr("target", "_BLANK")
                    .appendTo($(".description"));



            })
            .appendTo($("#work-wrapper"));

    });
}