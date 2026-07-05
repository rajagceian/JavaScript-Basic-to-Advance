//1.Create an array of student names and print each.
    let std = ["Raja","Sumit","Anas","Vivek","Vyom"];
    std.forEach((s)=>console.log(s));

//2.Filter even numbers from an array
    let num = [1,6,8,9,25,3,6,7,26,85,34];
    let newNum = num.filter((ele)=>ele%2==0);
    console.log(newNum);

//3.Map prices to include GST (18%)
    let netPrice = num.map((p)=>p*1.18);
    console.log(netPrice);

//4.Reduce salaries to calculate total payroll
    let netSalary = num.reduce((acc,curr)=>acc+curr,0);
    console.log(`Net Salary = ${netSalary}`);

//5.Find the first student with grade A
    const res = [{name:"Jay kumar",Grade:"C"},
                 {name:"Ritesh kumar",Grade:"B"},
                 {name:"Anas",Grade:"A"},
                 {name:"Neha",Grade:"F"},
                 {name:"Devanshu",Grade:"A"}
                ];
    const stdd = res.find((info)=>info.Grade==="A");
    console.log(`First Student with grade A : ${stdd.name}`);

//6.Write a function to reverse an array
    function revArray(arr){
        let i = 0;
        let j = arr.length-1;
        while(i<j){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++,j--;
        }
    }

    console.log("Original Array : ",num);
    revArray(num);
    console.log("Reversed Array : ",num);

//7.Sort array of ages in ascending order
    let age = [21,17,3,19,14,11,25,30,27];
    let newAge = age.sort((a,b)=>a-b);
    console.log(age); // age == newAge ==> 3, 11, 14, 17, 19,21, 25, 27, 30
    console.log(newAge);// 3, 11, 14, 17, 19,21, 25, 27, 30

//8.Destructure first two elements of an array
    let [a,b] = age;
    console.log(a,b);// 3,11

//9.Use some() to check if any student failed
    if(res.some((obj)=>obj.Grade==="F")){
        console.log("Someone failed in Exam");
    } else{
        console.log("Everyone passed");
    }

//10. Use spread to copy and add new item
    let data = [...num,5000,"Shiv",45.36];
    console.log(data);