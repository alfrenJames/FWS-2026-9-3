
function alertHi(){
    alert("Hi 🙋‍♂️ Team!!")
}


function showDataTypes(){
    let number = 3.14;
    let name = "Alfren";
    let isChecked = true;
    let arrOfColors = ["red", "blue", "green"];
    let objectPet = {
        Breed: "Aspin",
        Name: "Usman",
        Color: "Brown",
        AgeYear: 1.5
    }

    console.log(typeof number);
    console.log(typeof name);
    console.log(typeof isChecked);
    console.log(typeof arrOfColors);
    console.log(typeof objectPet);
    alert(
        `this are the datatypes ${typeof number}, 
        ${typeof arrOfColors}`
    );

}
