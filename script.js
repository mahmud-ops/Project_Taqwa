import { schedule } from './schedule.js';

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

dayNoElement.textContent = `${(32-3) - dayNo} days left until the exam.`;
dateElement.innerText = `📅 ${formattedLocal.split('-').reverse().join(' / ')}`;

if (schedule[formattedLocal]) {
  taskElement.innerText = `${schedule[formattedLocal]}`;
} else {
  taskElement.innerText = "🚫 No tasks scheduled today. Add one in JS!";
}
