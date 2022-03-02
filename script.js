const buttons = document.querySelectorAll('.button')
const displayValue = document.querySelector('.value')
const resetButton = document.querySelector('.reset')
const themes = document.querySelectorAll('.choose')
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', 'x', '/', '%']
let currentTheme
let num1 = ''
let num2 = ''
let sign = ''
let reuslt = ''
resetButton.addEventListener('click', resetFunction)
buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        let key = e.target.textContent
        if(digits.includes(key)){
            if(num2 === '' && sign === ''){
                result = num1 += key
                displayValue.innerHTML = result

            }else if(num1 !== '' && sign !== ''){
                result = num2 += key
                displayValue.innerHTML = result
            }
        }
        if(action.includes(key)){
            if(num1 !== '' && num2 === ''){
               result =  sign += key
               displayValue.innerHTML = result

            }
        }
        if(key === '='){
            switch (sign){
                case "+":
                    result = (+num1) + (+num2)
                    displayValue.innerHTML = result
                    break
                case "-":
                    result = num1 - num2
                    displayValue.innerHTML = result
                    break
                case "x":
                    result = num1 * num2
                    displayValue.innerHTML = result
                    break
                case "/":
                    if(num2 !== '0'){
                        result = num1 / num2
                        displayValue.innerHTML = result
                    }else {
                        displayValue.innerHTML = "CAN'T DIVIDE BY 0"
                    }
                    break
                case "%":
                        if(num2 !== '0'){
                            result = num1 % num2
                            displayValue.innerHTML = result
                        }else {
                            displayValue.innerHTML = "CAN'T DIVIDE BY 0"
                        }
            }
        }
    })
})


function resetFunction(){
    displayValue.innerHTML = '0'
    num1 = ''
    num2 = ''
    sign = ''
    result = ''
}


themes.forEach(theme => {
    theme.addEventListener('click', ()=>{
        currentTheme = theme.getAttribute('data-theme')
        const body = document.body
        if(currentTheme == 1){
            theme.classList.add('active1')
            body.classList.add('theme1')
            body.classList.remove('theme2')
            body.classList.remove('theme3')
            theme.classList.remove('active2')
            theme.classList.remove('active3')
        }else if(currentTheme == 2){
            theme.classList.add('active2')
            body.classList.add('theme2')
            body.classList.remove('theme1')
            body.classList.remove('theme3')
            theme.classList.remove('active1')
            theme.classList.remove('active3')
        }else if(currentTheme == 3){
            theme.classList.add('active2')
            body.classList.add('theme3')
            body.classList.remove('theme1')
            body.classList.remove('theme2')
            theme.classList.remove('active1')
            theme.classList.remove('active3')
        }
    })
})


