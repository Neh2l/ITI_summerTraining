// ----------------------------- Task 1 -----------------------------------

function Welcome() {
    var Yname = prompt("pls enter your name : ");
    var age = parseInt(prompt("pls enter your age :"));

    if (isNaN(age)) {
        alert("Enter valid age!");
        return;
    }
    if (Yname.trim() === "" || Yname === null) {
        alert("Enter valid name!");
        return;
    }

    if (age > 50) {
        alert("You are very old!");
        return;
    } else if (age < 18) {
        document.body.innerHTML = `
            <div class="welcome_page">
                <h1 style="color: orangered;">Hello ${Yname}</h1>
                <h2 style="color: orangered;">Your age : ${age}</h2>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div class="welcome_page">
                <h1 style="color: green;">Hello ${Yname}</h1>
                <h2 style="color: green;">Your age : ${age}</h2>
            </div>
        `;
    }
}


Welcome();



// ----------------------------- Task 2 -----------------------------------

let student = {
    Yname: "Nehal",
    age: 20,
    // contact: 'nehal123@gmail.com',
    contact: {
        email: "nehal123@gmail.com",
        phone: "0139847675"
    },

    showData: function () {
        console.log("The name is :" + student.Yname);
        console.log("The age is :" + student.age);
        // console.log("The Email is :" + student.contact);
        console.log("The Email is :" + student.contact.email);
        console.log("The phone is :" + student.contact.phone);

    }

}
student.showData();



// ----------------------------- Task 3 -----------------------------------

function calculatePrice(quantity, pricePerUnit) {
    var total = 0;
    if (isNaN(quantity) || isNaN(pricePerUnit)) {
        console.log("pls enter valid values !");

    }
    quantity > 10 ? total = (quantity * pricePerUnit) - (quantity * pricePerUnit * 0.1) : total = (quantity * pricePerUnit);
    return total;
}

console.log(calculatePrice(11, 3));



