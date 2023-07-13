
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
  
  
  
  adiForm = new RailwayForm( "Adi" , 123456)
  harshForm1= new RailwayForm( " Harsh" , 456123)
  harshForm2 = new RailwayForm("Harsh",222222)
    
  
  
  
  
  adiForm.submit( )
  harshForm1.submit() 
  harshForm2.submit()
  harshForm1.cancel()


  // math methods

  
let num = 122;
let sqrtNum = Math.floor( Math.sqrt(num));
console.log(" Square Root " + sqrtNum )




