
let expression = '';

function press(value){
    expression = expression+value;
    document.getElementById('display').value = expression;
    document.getElementById('display').focus();
}

function calculate(){
    const sanitizedExpression = expression.replace(/\^/g, '**').replace(/%/g, '/100');
    const result = eval(sanitizedExpression);
    history.push(expression + ' = ' + result);
    document.getElementById('display').value = result;
    expression ='';
    document.getElementById('display').focus();
         
    
}
function clearScreen(){
    expression = '';
    document.getElementById('display').value = '';
    document.getElementById('display').focus();
}

function deletor() {
  const input = document.getElementById('display');
  const pos = input.selectionStart; // Get the current cursor position

  if (pos > 0) {
    const before = input.value.slice(0, pos - 1); // Text before the cursor
    const after = input.value.slice(pos);         // Text after the cursor

    input.value = before + after; // Remove character before cursor
    expression = input.value;     // Update the stored expression

    input.setSelectionRange(pos - 1, pos - 1); // Move cursor back one step
    input.focus(); // Keep the input focused
  }
}


function moveToLeft(){
    const input = document.getElementById('display');
    const pos = input.selectionStart;
    input.setSelectionRange(pos - 1, pos - 1);
    input.focus();
}

function moveToRight(){
    const input = document.getElementById('display');
    const pos = input.selectionStart;
    input.setSelectionRange(pos + 1, pos + 1);
    input.focus();
}

let history = [];

function showHistory() {
  const input = document.getElementById('display');
  input.value = history.join('\n'); // Join all items with a new line
  expression = input.value;
  input.focus();
}

