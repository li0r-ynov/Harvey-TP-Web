const journeyButton = document.getElementById("journey-button");

if (journeyButton) {

    if (localStorage.getItem("day6Completed") === "true") {

        journeyButton.textContent = "CONTINUE YOUR JOURNEY";
        journeyButton.href = "pages/DAY 7 - THE ANNOUNCEMENT.html";

    } else {

        journeyButton.textContent = "START YOUR JOURNEY";
        journeyButton.href = "pages/DAY 1 - THE ARRIVAL.html";

        journeyButton.addEventListener("click", function () {
            localStorage.removeItem("day6Completed");
        });

    }

}

const finishDay6Button = document.getElementById("finish-day6");

if (finishDay6Button) {

    finishDay6Button.addEventListener("click", function () {

        localStorage.setItem("day6Completed", "true");
        console.log("Day 6 completed");

    });

}