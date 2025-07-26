# Daily Learning Scheduler

A simple JavaScript-powered daily task scheduler to track and display your learning plan by date.

## Overview

* Displays your daily learning task based on today’s date.
* Shows day count relative to the start date.
* Highlights the current date and task.
* Built with plain JavaScript and a schedule data object.

## Features

* Automatically calculates day number since start.
* Loads daily task from a predefined schedule.
* Supports modular schedule import (ES Modules).
* Graceful fallback if no task found for the day.

## Setup & Usage

1. Make sure you have `schedule.js` exporting your schedule object:

   ```js
   export const schedule = {
     "2025-07-23": "Explore : HTML Basics",
     // more days...
   };
   ```

2. Import and use in your main JavaScript file:

   ```js
   import { schedule } from './schedule.js';

   // Your code to show tasks...
   ```

3. Use `<script type="module" src="main.js"></script>` in your HTML to enable ES modules.

4. Ensure your HTML contains elements with these IDs:

   ```html
   <div id="dayNo"></div>
   <div id="date"></div>
   <div id="task"></div>
   ```

## How it works

* The script calculates the current day relative to the start date.
* Formats today’s date in `YYYY-MM-DD` to match schedule keys.
* Displays the corresponding task or a fallback message.

## Troubleshooting

* If tasks don’t show, verify your date format matches keys.
* Ensure your environment supports ES modules.
* Check browser console for import or DOM errors.

## License

MIT — free to use and modify.
