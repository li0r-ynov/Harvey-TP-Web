document.getElementById("journey-button");

const contestButton = document.getElementById("contest-button");

journeyButton.textContent = "CONTINUE YOUR JOURNEY";

journeyButton.href = "pages/DAY 7 - THE ANNOUNCEMENT.html";

localStorage.setItem("day6Completed", "true");

localStorage.getItem("day6Completed");

if (localStorage.getItem("day6Completed") === "true") {
    journeyButton.textContent = "CONTINUE YOUR JOURNEY";
    journeyButton.href = "pages/DAY 7 - THE ANNOUNCEMENT.html";
} else {
    journeyButton.textContent = "START YOUR JOURNEY";
    journeyButton.href = "pages/DAY 1 - THE ARRIVAL.html";
}