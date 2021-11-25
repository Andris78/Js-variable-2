let products = [ 
    {
        category: "konyhai", 
        name: "turmix2000", 
        price: 5000, 
        stock: 4, 
        attachements: ["fej", "motor"]
    },
    {
        category: "Pancsi", 
        name: "Sampon", 
        price: 500, 
        stock: 20, 
        attachements: ["Head", "Shoulders"]
    },
    {   
        category: "Pancsi", 
        name: "Tusfürdő", 
        price: 300, 
        stock: 10, 
        attachements: ["kokusz", "szagtalanitó"]
    }

];

let customer = "Ádám";

function main() {
    console.log ("it works");
    let product = products[2];
    let answer = window.confirm("Do you want a " + product.name);
    if (answer === false) {
        let answer = window.confirm("But it has " + products.attachements.join(","));
        if (answer === true) {
            console.log(product);
        }
    }
    /*console.log (answer);*/

/*function displayDetails(product) {
        let stock = product.stock;
        let price = product.price;
        let value = stock * price;
        let name = product.name;
        let attachements = product.attachements;
        let div = document.createElement("div");
        div.innerText = name + " : " + value + " " + attachmeents.join(",");
        document.body.append(div);*/

}

function inventory() {
    /*displayDetails(products[0]);
    displayDetails(products[1]);
    displayDetails(products[2]);*/


    let stock = products[2].stock;
    let price = products[2].price;
    let value = stock * price;
    let div = document.createElement("div");
    div.innerText = products[2].name + " : " + value;
    document.body.append(div);

    stock = products[0].stock;
    price = products[0].price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[0].name + " : " + value;
    document.body.append(div);

    stock = products[1].stock;
    price = products[1].price;
    value = stock * price;
    div = document.createElement("div");
    div.innerText = products[1].name + " : " + value;
    document.body.append(div);

    stock = products[0].stock;
    let available = stock >= 5;
    div = document.createElement("div")
    if (available) {
        div.innerText = products[0].name + " elérhető";
    } else {
        div.innerText = products[0].name + " nem elérhető";
    }
    document.body.append(div);

    let special = customer === "Ádám";
    if (!available && special){
        div.innerText  = div.innerText + "(de neki mégis)";
    }


}

window.addEventListener("load", inventory);