const name = document.getElementById('email')
const password = document.getElementById('pwd')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null){
        messages.push('name is required')
    }
    if (password.value.length <= 6) {
        messages.push("Password must be longer 6 characters!")
    }
    else{
        alert('Login successful!')
    }
    
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }



})

const form2 = document.querySelector("form2")
    emailField = form2.querySelector(".emailfield")
    emailInput = emailField.querySelector(".email")
    passField = form2.querySelector(".passfield")
    passInput = passField.querySelector(".pwd")
    cPassField = form2.querySelector(".passfield2")
    cPassInput = cPassField.querySelector(".pwd2");