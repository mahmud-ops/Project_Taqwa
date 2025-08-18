// List of all 30 sessions
const sessions = [
  "Session 1: Implementation + Math (800–850)",
  "Session 2: Div2 virtual contest + upsolve",
  "Session 3: Learning STL basics",
  "Session 4: Greedy + Brute Force (800–900)",
  "Session 5: Div2 virtual contest + upsolve",
  "Session 6: Binary Search & Sorting tutorials",
  "Session 7: Strings + Constructive (850–900)",
  "Session 8: Virtual contest + upsolve",
  "Session 9: STL advanced: priority_queue, unordered_map, pairs",
  "Session 10: Number Theory (GCD, primes, mod)",
  "Session 11: Virtual contest + upsolve",
  "Session 12: DP templates & patterns (1D DP, knapsack)",
  "Session 13: DP basics + Greedy (850–900)",
  "Session 14: Virtual contest + upsolve",
  "Session 15: Graphs basics (BFS, DFS) + 1–2 practice problems",
  "Session 16: Graphs – Shortest paths / Dijkstra – 2 problems",
  "Session 17: Virtual contest + upsolve",
  "Session 18: Advanced DP & Graph templates",
  "Session 19: Mix DP, Graphs, Constructive (900–1000)",
  "Session 20: Virtual contest + upsolve",
  "Session 21: Bitmask & advanced constructive tricks",
  "Session 22: Strings + Math + Greedy (900–1000)",
  "Session 23: Virtual contest + upsolve",
  "Session 24: Mixed tag patterns & review mistakes",
  "Session 25: DP + Graphs + Constructive (900–1050)",
  "Session 26: Virtual contest + upsolve",
  "Session 27: Identify recurring mistakes & optimize templates",
  "Session 28: Focus on highest rating reachable problems (950–1100)",
  "Session 29: Virtual contest + upsolve",
  "Session 30: Final review, tag gaps, speed/accuracy tuning"
];

// Container where sessions will be rendered
const container = document.getElementById("sessions-container");

// Load saved status from localStorage
let status = JSON.parse(localStorage.getItem("sessionStatus")) || {};

// Render sessions
sessions.forEach((session, index) => {
  const div = document.createElement("div");
  div.className = "session";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "session-" + index;
  checkbox.checked = status[index] || false;

  const label = document.createElement("label");
  label.htmlFor = "session-" + index;
  label.textContent = session;

  // Apply "checked" class immediately if session is completed
  if (checkbox.checked) {
    label.classList.add("checked");
  }

  // Update class and localStorage on checkbox change
  checkbox.addEventListener("change", () => {
    status[index] = checkbox.checked;
    localStorage.setItem("sessionStatus", JSON.stringify(status));

    if (checkbox.checked) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  });

  div.appendChild(checkbox);
  div.appendChild(label);
  container.appendChild(div);
});
