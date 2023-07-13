  class Calculator {
  constructor(name) {
    this.calName = name;
  }

  addition(a, b) {
    const sum = a + b;
    return `${this.calName} calculated sum is ${sum}`;
  }

  subtraction() {
    const num1 = 1; //userInput
    const num2 = 2; //userInput

    return num1 - num2;
  }
  setModelYear(year){
    this.modelYear = year 
  }
}

// class CalculatorWithoutConstructor {
//     constructor(){}
// }

// class CalculatorWithoutConstructor {
// }

// const harshCalculator = new Calculator('harsh')

// const ankCalculator = new Calculator('Ank')

// const sum = harshCalculator.addition(2,4)

// sum

// const sum1 = ankCalculator.addition(3,4)

// sum1

const calculatorName = "har"; //userInput

const calculator = new Calculator(calculatorName);

calculator
const num1 = 1; //userInput
const num2 = 2; //userInput

const sum = calculator.addition(num1, num2);


calculator.setModelYear(2021)

calculator





class RailwayForm{
  constructor(givenName , trainNo){
 console.log("CONSTRUCTOR CALLED......" + givenName +   "  "+ trainNo )
 
  this.name = givenName
  this.trainNo = trainNo
  
  }
  submit(){
      console.log( this.name + "  : This Form Is Submitted  for This Train Number  " + this.trainNo)
  }
  cancel(){
      console.log( this.name + " : This Form Is Canceled for  Train Number " + this.trainNo)
  }
  
  }



adiForm.fill(" Adi ", 123654)


harshForm1.fill("Harsh ", 124563)
harshForm2.fill(" Harsh" , 222222)

adiForm.submit()
harshForm1.submit() 
harshForm2.submit()
harshForm1.cancel()