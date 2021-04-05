$(function() {

    renderProject();

});

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