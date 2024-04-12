const nameArray = [] //Create a list to store names

function addName () {
  //get a trimmed version of the name from the input box
  const nameInput = document.getElementById('nameInput')
  const name = nameInput.value.trim()
  nameArray.push(name)
  displayNames()
  nameInput.value = ''
}
function displayNames(){
    const nameList = document.getElementById('nameList')//get UL element 
    nameList.innerHTML = '' //clears the list 

    for (let i = 0; i < nameArray.length; i++){
        const name = nameArray[i] //get the current name from the array

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)

    }

}



function pickRandomName () {
   
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''

  const randomNumber = Math.floor(Math.random() * nameArray.length)
  const randomName = nameArray[randomNumber]

  randomNameDiv.textContent = randomName

  nameArray.splice(randomNumber, 1)

  displayNames()

}







// add onclick to add name btn
document.getElementById('addNameBtn').addEventListener('click', addName)

// add onclick to add name btn
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)