const journeyButton = document.getElementById("journey-button");
const continueButton = document.getElementById("continue-button");
const resetProgressButton = document.getElementById("reset-progress-button");

if (localStorage.getItem("journeySaveVersion") !== "2") {
    localStorage.removeItem("day6Completed");
    localStorage.setItem("journeySaveVersion", "2");
}

if (journeyButton && continueButton && resetProgressButton) {
    const hasCompletedDay6 = localStorage.getItem("day6Completed") === "true";
    continueButton.hidden = !hasCompletedDay6;
    resetProgressButton.hidden = !hasCompletedDay6;
    journeyButton.addEventListener("click", function (event) {
        localStorage.removeItem("day6Completed");
    });

    resetProgressButton.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.removeItem("day6Completed");
        continueButton.hidden = true;
        resetProgressButton.hidden = true;
    });
}


const finishDay6Button = document.getElementById("finish-day6");

if (finishDay6Button) {
    finishDay6Button.addEventListener("click", function () {
        localStorage.setItem("day6Completed", "true");
        console.log("Day 6 completed");

    });

}
