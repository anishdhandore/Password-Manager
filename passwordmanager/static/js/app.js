function addPass(){
    console.log("password added!");
    acc = document.getElementById("account").value;
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;
    if(localStorage.getItem('passwords')==null){
        arrayPass = []
        arrayPass.push([acc, user, pass])
        localStorage.setItem('passwords', JSON.stringify(arrayPass));
    }
    else{
        arrayPassStr = localStorage.getItem('passwords');
        arrayPass = JSON.parse(arrayPassStr);
        arrayPass.push([acc, user, pass]);
        localStorage.setItem('passwords', JSON.stringify(arrayPass));
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    arrayPass.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
        </tr>
         `
    })
    tableBody.innerHTML = str;
}

function alwaysRun(){
    console.log("password added!");
    if(localStorage.getItem('passwords')==null){
        arrayPass = []
        localStorage.setItem('passwords', JSON.stringify(arrayPass));
    }
    else{
        arrayPassStr = localStorage.getItem('passwords');
        arrayPass = JSON.parse(arrayPassStr);
        localStorage.setItem('passwords', JSON.stringify(arrayPass));
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    arrayPass.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td><button class="btn btn-primary btn-sm" onClick="deleted(${index})">Delete</button></td>
        </tr>
         `
    })
    tableBody.innerHTML = str;
}

function deleted(itemIndex){
    if (confirm("Do you really want to delete this password?")){
        console.log("Deleted 1 password");
        arrayPassStr = localStorage.getItem('passwords');
        arrayPass = JSON.parse(arrayPassStr);
        arrayPass.splice(itemIndex, 1);
        localStorage.setItem('passwords', JSON.stringify(arrayPass));
        alwaysRun();
    }
}

alwaysRun()