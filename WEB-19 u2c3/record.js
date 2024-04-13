let myForm = document.querySelector("form");
let arr = [];
let tbody = document.querySelector("tbody");
let filterData = document.querySelector("#filter > select");

function handleForm(event){
    event.preventDefault()
    
    let targetElements = event.target;

    let name = targetElements[0].value;
    let employeeId = targetElements[1].value;
    let department = targetElements[2].value;
    let experience = targetElements[3].value;
    let emailId = targetElements[4].value;
    let mob = targetElements[5].value;

    let obj = {};

    obj.name = name;
    obj.employeeId = employeeId;
    obj.department = department;
    obj.experience =  experience;
    obj.emailId = emailId;
    obj.mob = mob;

    arr.push(obj)

    console.log(arr);

event.target.reset()

showData(arr)

}


myForm.addEventListener("submit", (event)=>{
    handleForm(event)
})

function findRole(exp){
    if(exp > 5){
        return "Senior"
    }
    else if(exp <= 5 && exp >= 2){
        return "Junior"
    }
    else if(exp <= 1){
        return "Fresher" 
    }
}


export function showData(data){
    tbody.innerHTML = ""

    data.forEach((ele, i)=>{
        let tRow = document.createElement("tr");


        let tName = document.createElement("td");
        let tEmployeeId = document.createElement("td");
        let tDepartment = document.createElement("td");
        let tExperience = document.createElement("td");
        let tEmailId = document.createElement("td");
        let tMob = document.createElement("td");
        let tRole = document.createElement("td");
        let tDelete = document.createElement("td");


        tName.textContent = ele.name;
        tEmployeeId.textContent = ele.employeeId;
        tDepartment.textContent = ele.department;
        tExperience.textContent = ele.experience;
        tEmailId.textContent = ele.emailId;
        tMob.textContent = ele.mob;
        tRole.textContent = `${findRole(ele.experience)}`

        tDelete.textContent = "Delete"
        tDelete.style.backgroundColor = "red"

        tDelete.addEventListener("click", ()=>{
            handleDelete(i)
        })

        tRow.append(tName, tEmployeeId, tDepartment, tExperience, tEmailId, tMob, tRole, tDelete);
        tbody.append(tRow)
    })
}

function handleDelete(index){
    arr.splice(index, 1);

    showData(arr)
}

filterData.addEventListener("change", ()=>{
    let selectedValue = filterData.value;

    if(selectedValue === "All"){
        showData(arr)
    }
    else{
        let filteredArray = arr.filter((ele)=> ele.department === selectedValue)
        showData(filteredArray)
    }
})
