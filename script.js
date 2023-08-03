
// will add keypress functionality in future

const display = document.querySelector('.display')
const numbers = document.querySelectorAll('.number')
const clearButton = document.querySelector('#clear')
const operands = document.querySelectorAll('.operands')
const equal = document.querySelector('#equals')
const del = document.querySelector('#delete')

let a = '';
let b = '';
let c='';

function append(a){
    display.value =display.value + b + a;
    b='';
}

for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(e){
        let temp = display.value.split(/[+\-*/]/)
        if(temp[0].includes('.') && e.target.textContent === '.'&& temp[1] === undefined){
            return;
        }
        if(temp[1] && temp[1].includes('.') && e.target.textContent === '.'){
            return;
        }
        if(display.value === '' && e.target.textContent === '.'){
            return;
        }
        a = e.target.textContent
        append(a)
    })
}

for(let i=0;i<operands.length;i++){
    operands[i].addEventListener('click', function(e){
        if(display.value === '' && e.target.textContent != '-'){
                return;
        }
        b = e.target.textContent
        if(display.value[display.value.length-1] === '+'||display.value[display.value.length-1]==='-'||display.value[display.value.length-1]==='*'||display.value[display.value.length-1]==='/'){
            display.value = display.value.slice(0,display.value.length-1)
        }
        if(b === '+'||b==='-'||b==='*'||b==='/'){
            calculate();
        }
        append('');
    })
}

function clear(){
    display.value = '';
}

function calculate(){
    if(display.value === ''){
        return;
    }
    display.value = eval(display.value)
}

clearButton.addEventListener('click', clear)
equal.addEventListener('click', calculate)
del.addEventListener('click', function(){
    display.value = display.value.slice(0,display.value.length-1)
})
