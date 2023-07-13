class RailwayForm{
    submit(){
        console.log( this.name + "  : This Form Is Submitted  for This Train Number  " + this.trainNo)
    }
    cancel(){
        console.log( this.name + " : This Form Is Canceled for  Train Number " + this.trainNo)
    }
    fill(givenName , trainNo){
       this.name = givenName
       this.trainNo = trainNo
    }
}

let adiForm = new RailwayForm()
adiForm.fill(" Adi ", 123654)
let harshForm1 = new RailwayForm()
let harshForm2 = new RailwayForm()
harshForm1.fill("Harsh ", 124563)
harshForm2.fill(" Harsh" , 222222)







class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`This is a newly written constructor`)
    }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  
    }
  }
  
  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)

adiForm.submit()
harshForm1.submit() 
harshForm2.submit()
harshForm1.cancel()