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

// Confetti function
function createConfetti() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500']
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    
    // Random position across the top of the screen
    confetti.style.left = Math.random() * 100 + '%'
    confetti.style.top = '-100px'
    confetti.style.backgroundColor = colors[Math.random() * colors.length | 0]
    
    // Random size
    const size = Math.random() * 8 + 4
    confetti.style.width = size + 'px'
    confetti.style.height = size + 'px'
    
    // Apply the animation directly
    const duration = Math.random() * 2 + 2 + 's'
    const delay = Math.random() * 2 + 's'
    confetti.style.animation = `confetti-fall ${duration} linear ${delay} forwards`
    
    document.body.appendChild(confetti)
    
    // Remove confetti after animation completes
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.remove()
      }
    }, 5000)
  }
}

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
    greeting.textContent = `Hi ${name}! Welcome to 1DV610!!! Here is a cookie for you: 🍪`
    
    // Trigger confetti!
    createConfetti()
  }
}

// Add Enter key support
nameInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    handleSubmit()
  }
})

