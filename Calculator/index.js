//The Math Solver function
function SolveMath(expression){
    try{
        const result = eval(expression)
        if (typeof result === 'number' && isFinite(result)){
            return result;
        } else {
            return "Invalid number";
        } 
        } catch (error){
            return "Syntax error";
    }
}


// Defining similar functions for all buttons except AC and =
function ButtonHandler(buttonID, innerrectID){
    this.button = document.getElementById(buttonID);
    this.innerRectangle = document.getElementById(innerrectID);

    //Event listener when clicked
    this.button.addEventListener("click", function(){
    //Update the context of the rectangle
    if(this.innerRectangle.textContent == "0" || this.innerRectangle.textContent == "Invalid number" || this.innerRectangle == "Syntax error"){
        this.innerRectangle.textContent = "";
    };
    this.innerRectangle.textContent = this.innerRectangle.textContent + this.button.textContent + "";
    this.innerRectangle.scrollLeft = this.innerRectangle.scrollWidth;

    }.bind(this));
};

//Power of unique buttons
var button5 = document.getElementById("button-5");
var button20 = document.getElementById("button-20");
var button4 = document.getElementById("button-4");

button5.addEventListener("click", function(){
    this.innerRectangle = document.getElementById("inner-rect");
    this.innerRectangle.textContent = "0";
})

button20.addEventListener("click",function(){
    this.innerRectangle = document.getElementById("inner-rect");
    var expression =  this.innerRectangle.textContent;
    var expression = expression.replace("^", "**")
    this.innerRectangle.textContent = SolveMath(expression);
})

button4.addEventListener("click", function(){
    this.innerRectangle = document.getElementById("inner-rect");
    let current_text = this.innerRectangle.textContent;
    let new_text = current_text.slice(0,-1);
    this.innerRectangle.textContent = new_text;

})


//Accessing the buttons
var button1 =  this.ButtonHandler("button-1","inner-rect");
var button2 = new ButtonHandler("button-2","inner-rect");
var button3 = new ButtonHandler("button-3","inner-rect");
var button6 = new ButtonHandler("button-6","inner-rect");
var button7 = new ButtonHandler("button-7","inner-rect");
var button8 = new ButtonHandler("button-8","inner-rect");
var button9 = new ButtonHandler("button-9","inner-rect");
var button10 = new ButtonHandler("button-10","inner-rect");
var button11 = new ButtonHandler("button-11","inner-rect");
var button12 = new ButtonHandler("button-12","inner-rect");
var button13 = new ButtonHandler("button-13","inner-rect");
var button14 = new ButtonHandler("button-14","inner-rect");
var button15 = new ButtonHandler("button-15","inner-rect");
var button16 = new ButtonHandler("button-16","inner-rect");
var button17 = new ButtonHandler("button-17","inner-rect");
var button18 = new ButtonHandler("button-18","inner-rect");
var button19 = new ButtonHandler("button-19","inner-rect");
