document.addEventListener("DOMContentLoaded", () => {
    // Get the "Save Today's Self-Care" button by its ID
    const saveButton = document.getElementById("saveButton");

    // Add an event listener to the save button that listens for a click event
    saveButton.addEventListener("click", () => {
        // Get the values entered by the user in the input fields and dropdown
        const sleepHours = document.getElementById("sleepHours").value; // Hours of sleep
        const waterIntake = document.getElementById("waterIntake").value; // Water intake in ml
        const mood = document.getElementById("moodSelect").value; // Mood from the dropdown
        const workout = document.getElementById("workout").value; // Workout details

        // Check if all fields have values entered
        if (sleepHours && waterIntake && mood && workout) {
            // If all fields are filled, display an alert with the recorded data
            alert(`
                Self-Care Recorded:
                Hours of Sleep: ${sleepHours} hours
                Water Intake: ${waterIntake} ml
                Mood: ${mood}
                Workout: ${workout}
            `);
        } else {
            // If any field is empty, alert the user to fill all fields
            alert("Please fill in all the fields.");
        }
    });
});
