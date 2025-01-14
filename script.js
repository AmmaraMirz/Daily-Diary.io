// Initialize the current date
let currentDate = new Date();

// Function to update the calendar display
function updateCalendar() {
    const monthYearDisplay = document.getElementById('monthYearDisplay');
    const calendar = document.getElementById('calendar');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Display the current month and year
    monthYearDisplay.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
    
    // Clear the calendar
    calendar.innerHTML = '';

    // Add day names (Sun, Mon, etc.)
    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });

    // Get the first day of the month and the number of days in the month
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyElement = document.createElement('div');
        calendar.appendChild(emptyElement);
    }

    // Add the days of the month
    for (let i = 1; i <= lastDateOfMonth; i++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = i;

        // Add event listener to highlight the clicked date
        dateElement.addEventListener('click', () => {
            dateElement.classList.toggle('active');
        });

        calendar.appendChild(dateElement);
    }
}

// Event listeners for navigation buttons
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Initial call to display the calendar
updateCalendar();
