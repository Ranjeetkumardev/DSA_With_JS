class Student {
    constructor(firstName , lastName , year){
        this.firstName = firstName;
        this.lastName = lastName
        this.year = year
        this.tried = 0

    }
    fullName(){
      return  `Your Name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
      this.tried +=1;
      if(this.tried >=3) return "You are Expailled";
      return  ` ${this.firstName} ${this.lastName} has been late ${this.tried} times`
    }
    // Similarlary all built-in js function written like this 


    // if you use static then that is only for class itself 
  static belogsTo(firstName , lastName , year){
     // what you want it only for class itself
  }

}
// This method to  create new objects must be called constructor

// The class keyword create a const , so you can't redefine it .Watchout for the syntax as well

// creating Objects from classess => we use new keyword

// you do like this ass
let obj ={
    name : "hellow ",
    age : 52,
    address :{
        houseNo : 52,
        building  : "Shakshi-building"
    }
}

// creating Objects/instance 
//let firstStudent = new Student(obj ,"settle")
//let firstStudent = new Student("colt" ,"settle") 
let firstStudent = new Student("colt" ,"settle" , 2024) 

//Creating instance Methods 

//console.log(firstStudent.fullName()) // OP =>Your Name is colt settle
console.log(firstStudent.markLate()) // OP =>colt settle has been late 1,2,3 times




/// we will use the constructor and instance method quite a bit 
/// but we will never use static methods 

/// one Gotcha with `this`  
 // 
 // inside all of our instance methods and constructor , the keyword `this` refers to the object created form class (also known as an instance )