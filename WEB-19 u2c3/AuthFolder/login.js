let myForm = document.querySelector("form");

function handleSubmit(event){
    event.preventDefault();

    let targetElements = event.target;

    let name = targetElements[0].value;
    let role = targetElements[1].value;
    let password = targetElements[2]. value;

    let signUpData = JSON.parse(localStorage.getItem("arr"));

    let flag = false;

    signUpData.forEach(element => {
        if(name === element.name && password === element.password){
            flag = true
        }

        if(role === "HR"){
            window.location.href = "../index.html"
        }
        else if(role === "Employee"){
            window.location.href = "../EmployeeData.html"
        }
    });

    if(flag){
        alert("Login Sucessfully")
    }
    else{
        alert("Enter Correct Details")
    }
}

myForm.addEventListener("submit", (event)=>{
    handleSubmit(event)
})