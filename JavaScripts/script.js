function Button(text) {
    const button1 = document.createElement('button');
    const text_of_button = document.createTextNode(text);
    button1.classList.add("number_buttons");
    button1.appendChild(text_of_button);
    document.querySelector(".numbers").appendChild(button1); 
}

[1,2,3,4,5,6,7,8,9,0].forEach(index => Button(index));


/* Operand Buttons */

const input = document.querySelector("input");

const buttons = document.querySelectorAll(".number_buttons");
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(!(e.target.textContent == "0" && input.value.length <= 0))
            input.value += e.target.textContent;
    });
});

/*  */
var value_1, value_2, operand;

const button = document.querySelectorAll(".operand_button");

button.forEach(operand_btn => {
    operand_btn.addEventListener("click", (e)=>{
        if (e.target.textContent == '=') {
            value_2 = parseFloat(input.value);
            if(operand == '+')
                input.value = value_1 + value_2;
            else if(operand == '-')
                input.value = value_1 - value_2;
            else if(operand == '*')
                input.value = value_1 * value_2;
            else if(operand == '/')
                if(value_1 != 0)
                    input.value = value_1 / value_2;
        }else{
            value_1 = parseFloat(input.value);
            operand = e.target.textContent;
            input.value = "";
        }       
    });

});

const cl = document.querySelector(".clear");
cl.addEventListener("click", () => {
    operand = '';
    value_1 = 0;
    value_2 = 0;
    input.value = "";
});