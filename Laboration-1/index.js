// Add a title
const title = document.createElement('h1')
title.textContent = 'Hello World!'
document.body.appendChild(title)

// Create input container
const inputContainer = document.createElement('div')
 
// Create label text
const labelText = document.createTextNode('Enter your name: ')
inputContainer.appendChild(labelText)
 
// Create name input
const nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.id = 'nameInput'
inputContainer.appendChild(nameInput)
 
// Create submit button
const submitButton = document.createElement('button')
submitButton.textContent = 'Submit'
inputContainer.appendChild(submitButton)
 
// Add input container to body
document.body.appendChild(inputContainer)

// Add event listener to submit button
submitButton.addEventListener('click', handleSubmit)
 
// Handle form submission
function handleSubmit() {
  const name = nameInput.value.trim()
   
  if (name) {
    let greeting = document.getElementById('greeting')
    if (!greeting) {
      greeting = document.createElement('div')
      greeting.id = 'greeting'
      document.body.appendChild(greeting)
    }
    greeting.textContent = `Hi ${name}!`
  }
}