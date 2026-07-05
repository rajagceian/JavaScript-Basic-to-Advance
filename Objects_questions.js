//1.Create an object for a book (title, author, price)
    const book = {
        title : "Ramayana",
        author : "Valmiki Ji",
        price : 499
    };
    console.log(book.title);
    let auth = "author";
    console.log(book[auth]);
    console.log(`Book's old price : ${book.price}`);
    book.price = 599;
    console.log(`Book's new price : ${book.price}`);

//2.Write a nested object (user with address and location)
    const user =  {
        name : "Raja kumar",
        gender : "Male",
        Mo : "6202851812",
        address : {
            city : "Banka",
            State : "Bihar",
            location : {
                lng : "1.26",
                alt : "4.68"
            }
        }
    }
    console.log(user.name);
    console.log(user.address.city);
    console.log(user.address.location.lng);
    const {lng,alt} = user.address.location;
    console.log(lng,alt);

//3.Destructure name and age from a student object
    const std = {
        name : "Raja kumar",
        age : 21,
        cgpa : 8.6
    }
    const {name,age} = std;
    console.log(name,age);
    //Renaming of destructured entity
    const {name : username,age:userAge} = std;
    console.log(username,userAge);

//4.Loop through keys and values of an object
    for(let data in user){ // data goes on every key
        console.log(data,user[data]);
    }

//5. Convert object to array using Object.entries()
    const arr =  Object.entries(std);// becomes 2D Array
    console.log(arr);//[ [ 'name', 'Raja kumar' ], [ 'age', 21 ], [ 'cgpa', 8.6 ] ]

//6.Copy an object using spread operator
    const newStd = {...std};
    console.log(newStd); //deep copy => but method fails to make deep copy of a nested object , because inner object's entities does not follow deep copy.

//7.Create a deep copy of an object with nested structure
    const newUser = JSON.parse(JSON.stringify(user));
    console.log(newUser);

//8.Use optional chaining to safely access deep values
    console.log(user?.email); // Output : undefined ,does not throw an error.

//9.Use a variable as a key using computed properties

//Computed Property Names ka use tab hota hai jab object ki key dynamically generate karni ho.
    const key = "name";
    const key1 = "age";
    const person = {
        [key] : "Raja",
        [key1] : 21
    }

    console.log(person);