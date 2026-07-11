//Class => A class is a user-defined data type that serves as a blueprint or 
// template for creating objects.

//------ Syntax ------------
class AClass{
    constructor(){}

    //methods
    method1(){}
    method2(){}
    method3(){}
    method4(){}
}

//--- creating an instance of AClass --------
const a = new AClass();
console.log(a);

const b = new AClass();
console.log(b);

console.log(a===b); //false => false isliye kyunki === objects ke liye reference 
//equality check karta hai, value equality nahi.
//Har baar jab tum new AClass() call karte ho, JS engine ek bilkul naya object heap 
// mein banata hai — chahe uske andar ki properties/values same hi kyun na hon.
//==============================================================//

//---------- Initialization of Object -------------------
class Car{
    constructor(model){
        this.model = model;
    }
    printThis(){
        console.log(this);
    }
    printModel(){
        console.log(this.model);
    }
}

const carA = new Car("BMW");
const carB = new Car("Audi");
carA.printModel(); 
carB.printModel();

carA.printThis();
carB.printThis();//this ki value depend karti hai "function KAISE CALL hua",
                   // na ki "kahan DEFINE hua"

//********** 
    console.log(typeof Car); //function (*Not Class)

//============================================================//
//----- class as Expression ---------
const Std = class{
    welcome(){
        console.log("Hello Students!!");
    }
}

const s = new Std();
s.welcome();

//------ Named class ---------
const Dept = class Department{
    welcome(){
        console.log("Welcome at Department!!");
    }
}

//const d = new Department(); // Error
const d = new Dept();
d.welcome();    

