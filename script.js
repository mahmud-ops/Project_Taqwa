import { schedule } from "./schedule.js";

const taskElement = document.getElementById("task");
const dateElement = document.getElementById("date");
const dayNoElement = document.getElementById("dayNo");

const startDate = new Date("2025-07-23");
const today = new Date();

// Format local date string YYYY-MM-DD
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const formattedLocal = `${year}-${month}-${day}`;

// Calculate day number relative to start date
const diffTime = today - startDate;
const dayNo = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
if (dayNo < 32) {
  dayNoElement.textContent = `${32 - 3 - dayNo} days left until the exam.`;
} else {
  dayNoElement.textContent = `The exam is currently in progress.`;
}
dateElement.innerText = `📅 ${formattedLocal.split("-").reverse().join(" / ")}`;

if (schedule[formattedLocal]) {
  taskElement.innerText = `${schedule[formattedLocal]}`;
} else {
  taskElement.innerText = "🚫 No tasks scheduled today. Add one in JS!";
}

fetch("https://codeforces.com/api/contest.list")
  .then((res) => res.json())
  .then((data) => {
    if (data.status === "OK") {
      const upcoming = data.result.filter(
        (contest) => contest.phase === "BEFORE"
      );
      if (upcoming.length === 0) {
        console.log("No upcoming contests.");
        return;
      }

      const contest = upcoming[0];
      const dateObj = new Date(contest.startTimeSeconds * 1000);

      const date = dateObj.toDateString(); // e.g. 8/9/2025
      const time = dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }); // e.g. 14:30
      conBtn.addEventListener("click", () => {
        console.log(`You have ${contest.name} on ${date} at ${time}`);
        alert(`You have a ${contest.name} contest on ${date} at ${time}`);
      });
    } else {
      console.error("API error");
    }
  })
  .catch((err) => console.error(err));

const conBtn = document.getElementById("contestNotice");
