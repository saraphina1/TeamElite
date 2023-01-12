const name = document.getElementById('uname')
const password = document.getElementById('psw')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (uname.value === '' || uname.value == null){
        messages.push('name is required')
    }
    if (password.value.length <= 6) {
        messages.push('password must be longer than 6 characters')
    }
    else{
        alert('Login successful!')
    }
    
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }



})
