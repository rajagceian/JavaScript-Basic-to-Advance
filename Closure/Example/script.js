const txt = document.getElementById("my-txt");
const btn = document.getElementById("my-btn");

//---------- Use of Closure-----------
function makeSizer(size){
    return function(){
        txt.style.fontSize = `${size}px`;
    }
};

const size20 = makeSizer(20);
const size30 = makeSizer(30);
const size40 = makeSizer(40);
const size50 = makeSizer(50);
const size60 = makeSizer(60);

//---- change font Size to 40px --------
btn.addEventListener("click",size40);

//---- change font Size to 50px --------

//---- change font Size to 60px --------

//---- change font Size to 20px --------