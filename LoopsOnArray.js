// ForEach = Jab naye array ki jarurat na ho Aur har element par operation
//karna ho
    let arr = [15,32,1,2,8,14,63];

    arr.forEach(function(ele){
        console.log(2*ele);
    })

// Map = Jab naye array ki Jarurat ho and Har element ko transform karna ho
    const result = nums.forEach(function(ele){
        return ele-2;
    });
    console.log(result);

// filter = Jab naye array ki Jarurat ho and Condition match karne wale elements lena ho
    const even = nums.filter(function(ele){
            return ele%2==0; // condition => true ,then include that element in even array(Result Array)
    });
    console.log(even)

//reduce() = Array ko ek single value me convert karta hai.

    let ans = nums.reduce(function(acc,curr){ // curr har element par jayega
        return acc+curr;
    },0); // Here 0 is initial value of acc
    console.log(`Sum of nums Element = ${ans}`);

//find() = Pehla matching element return karta hai.
    let db = [
                {id:1,key:2},
                {id:2,key:4},
                {id:3,key:6},
                {id:4,key:4}
             ];
    const ans = db.find(function(ele){
                return ele.key === 4; //{id:2,key:4} = Pehla matching element return karta hai.
    });

//--------------------------------------------------------------
//some() = Agar ek bhi element condition satisfy kare to true.

    console.log(ans.some(function(ele){
            return ele > 60;
    }));

// every() = Agar sab elements condition satisfy kare tabhi true.

    console.log(ans.every(function(ele){
            return ele > 50;
    }));