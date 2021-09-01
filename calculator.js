// class Calculator{
//     constructor(previousOperand, currentOperand){
//         this.previousOperand = previousOperand;
//         this.currentOperand = currentOperand;
//         this.clear()
//     }
   

//     clear(previousOperand, currentOperand){
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;
//     }    

//     delete(){

//     }

//     appendNumber(number){
//         this.currentOperand.innerHTML = this.currentOperand.toString() + number.toString(); 
//     } 

//     chooseOperation(){

//     }

//     compute(){

//     }

//     updateDisplay(){
//         this.currentOperand.innerHTML = this.currentOperand;
//     }


// }

// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('.data-operation');
// const deleteButton = document.querySelector('.data-delete');
// const allClearButton = document.querySelector('.data-all-clear');
// const equalButton = document.querySelector('.data-equals');
// const previousOperand = document.querySelector('#previous-operand');
// const currentOperand = document.querySelector('#current-operand');
// const button = document.querySelectorAll('button');





// const calculator = new Calculator(previousOperand, currentOperand)
// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerHTML) 
//         calculator.updateDisplay() 
//     })
// });




// const numberButtons = document.querySelectorAll(".data-number").value;
// const operationButtons = document.querySelectorAll('button.data-operation');
// const deleteButton = document.querySelector('button.data-delete');
// const allClearButton = document.querySelector("button.data-all-clear");
// const equalButton = document.querySelector('button.data-equals');
// const previousOperandTextElement = document.querySelector("div.previous-operand");
// const currentOperandTextElement = document.querySelector("div.current-operand");
// const output = document.querySelector('div.output')

// function clear(previousOperandTextElement, currentOperandTextElement){
//     allClearButton.addEventListener('click', () =>{
//         previousOperandTextElement == '';
//         currentOperandTextElement == '';
//     })
// }

// function deleteNumber(currentOperandTextElement){
//     deleteButton.addEventListener('click', () => {
//         currentOperandTextElement.splice(-1, 1);
//     })

// }
// function updateDisplay(){
//     currentOperandTextElement.innerText = currentOperandTextElement;

// }

// function appendNumber(){
//     (numberButtons).click(function (){
//         currentOperandTextElement.append(button.innerText);
//         currentOperandTextElement.updateDisplay();
//        })
// }
    

var output = document.getElementById('current-operand');
var previousOutput = document.getElementById('previous-operand');
var buttons = Array.from(document.querySelectorAll('button')); 


// function square(){
//     var sqr = document.getElementById('^');
//         if(previousOutput.innerText = ''+'^'+''){
//             output.innerText = previousOutput.innerText.pow(2,2);
//         }
//     }

buttons.map(buttons =>{
    buttons.addEventListener('click', (e) =>{
        
        switch(e.target.innerText){
            case 'DEL':
                if(previousOutput.innerText){
                    previousOutput.innerText =   previousOutput.innerText.slice(0, -1);
                }
               
                break;
            
            case 'AC':
                previousOutput.innerText = '';
                output.innerText = '';
                break;
            
            case '=':
                try{
                   
                    output.innerText = eval(previousOutput.innerText)
                    

                }catch{
                    output.innerText = 'Syntax Error!'
                }
                
                break; 


            default:
                previousOutput.innerText += e.target.innerText;
                
        }
        console.log()
    })
})
   
        
     
  








