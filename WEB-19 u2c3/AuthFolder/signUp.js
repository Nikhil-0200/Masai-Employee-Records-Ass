let myForm = document.querySelector("form");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

function saveData(){
    localStorage.setItem("arr", JSON.stringify(arr))
}


function handleSubmit(event){
    event.preventDefault();

    let targetElements = event.target;

    let name = targetElements[0].value;
    let role = targetElements[1].value;
    let password = targetElements[2].value;

    let obj = {};

    obj.name = name;
    obj.role = role;
    obj.password = password;

    arr.push(obj)

    saveData()

    alert("SignUp Done")
}


myForm.addEventListener("submit", (event)=>{
    handleSubmit(event)
})