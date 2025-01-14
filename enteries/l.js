// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Get references to the form, textarea, and entries list elements
  const diaryForm = document.getElementById("diaryForm");
  const diaryEntry = document.getElementById("diaryEntry");
  const entriesList = document.getElementById("entriesList");

  // Add an event listener for form submission
  diaryForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)

    const entryText = diaryEntry.value.trim(); // Get and trim the text from the textarea

    // If the entry is not empty, add it to the entries list
    if (entryText) {
      // Create a new list item for the entry
      const listItem = document.createElement("li");

      // Set the text content of the list item to the entry text
      listItem.textContent = entryText;

      // Append the new list item to the entries list
      entriesList.appendChild(listItem);

      // Clear the textarea for the next entry
      diaryEntry.value = "";
    }
  });
});
