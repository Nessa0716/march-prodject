// JavaScript code to handle adding names to the array and displaying them
const namesArray = [] // Array to store names

// Function to add a name to the array and update the displayed list
function addName () {
  const nameInput = document.getElementById('nameInput') // Get the input element
  const name = nameInput.value.trim() // Get the trimmed value of the input

  if (name !== '') {
    // Check if the name is not empty
    namesArray.push(name) // Add the name to the array
    displayNames() // Call the displayNames function to update the list
    nameInput.value = '' // Clear the input field after adding the name
  } else {
    alert('Please enter a valid name.') // Show an alert if the name is empty
  }
}

// Function to display names in the list
function displayNames () {
  const nameList = document.getElementById('nameList') // Get the list element
  nameList.innerHTML = '' // Clear the previous list

  for (let i = 0; i < namesArray.length; i++) {
    // Loop through the names array
    const name = namesArray[i] // Get the current name

    const li = document.createElement('li') // Create a new list item element
    li.className = 'list-group-item' // Set the class for the list item

    const span = document.createElement('span') // Create a new span element
    span.textContent = name // Set the text content of the span to the name

    li.appendChild(span) // Append the span to the list item
    nameList.appendChild(li) // Append the list item to the list
  }
}

// Event listener for the button click
document.getElementById('addNameBtn').addEventListener('click', addName) // Attach the addName function to the button click event