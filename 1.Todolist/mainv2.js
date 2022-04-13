// khai bao bien
let input = document.querySelector(".inputFiled div input");
let addButton = document.querySelector("button");
let listtodo = document.querySelector(".listtodo");
let count = document.querySelector("span.count")


showTask();
function showTask() {
    let getlocalStorage = localStorage.getItem("Todo") == null ? [] :
        JSON.parse(localStorage.getItem("Todo"));
    console.log(getlocalStorage)
    if (input.value == "") {
        console.log("you must write something in input")
        // document.querySelector(".error").classList.remove("hide")

    }
    else {
        getlocalStorage.push(input.value)
        // document.querySelector(".error").classList.add("hide")
    }
    let newLitag = "";
    let countArr = getlocalStorage.length
    count.innerText = countArr;
    getlocalStorage.forEach((element, index) => {
        newLitag += `<li class="listtodo-item">
        <span>${element}</span><span><i class="fa-solid fa-trash" onclick = "deleteTask(${index})"></i></i></span>
    </li>`

    });
    console.log(newLitag)
    listtodo.innerHTML = newLitag;
    input.value = "";
    // JSON.stringify(localStorage.setItem("Todo", getlocalStorage))
    // localStorage.setItem("Todo", JSON.stringify(getlocalStorage));
    localStorage.setItem("Todo", JSON.stringify(getlocalStorage));


}
//Get input value when input keyup
input.addEventListener("keyup", function () {
    console.log(input.value);
})
// when click buttton add todo
addButton.addEventListener("click", function () {
    if (input.value == "") {
        document.querySelector(".error").classList.remove("hide")
    }
    else {
        document.querySelector(".error").classList.add("hide")
    }
    showTask()
})

//deletetask

function deleteTask(index) {
    let listArr = JSON.parse(localStorage.getItem("Todo"))
    console.log(listArr)
    listArr.splice(index, 1);
    console.log(listArr)


    localStorage.setItem("Todo", JSON.stringify(listArr))
    showTask()
}