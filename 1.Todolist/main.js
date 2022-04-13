//chon truong input
let inputbox = document.querySelector(".inputFiled input");
// console.log(inputbox);
// chon nut button
let button = document.querySelector("button");
let numbertodo = document.querySelector(".desc");

// su kien keyup  input - khi nguoi dung go nut tren ban phim vao o input
inputbox.addEventListener("keyup", function () {
    console.log(inputbox.value)
})
showTask();
button.addEventListener("click", showTask)

function showTask() {
    let getlocalStorage = localStorage.getItem("Todo") == null ? [] :
        JSON.parse(localStorage.getItem("Todo"));
    if (inputbox.value == "") {
        console.log("You must write something");
    }
    else {
        getlocalStorage.push(inputbox.value);

    }
    // console.log(getlocalStorage)
    localStorage.setItem("Todo", JSON.stringify(getlocalStorage));
    inputbox.value = "";
    let newlitag = "";

    getlocalStorage.forEach((element, index) => {
        newlitag += `<li class="listtodo-item" ><span>${element}</span><span><i class="fa-solid fa-trash" onclick = "deleteTask(${index}) "></i></i></span></li>`
    });
    let numbertodo1 = getlocalStorage.length;
    numbertodo.innerText = `Total is ${numbertodo1} in your todolist`
    console.log(newlitag);
    document.querySelector(".listtodo").innerHTML = newlitag;
}

function deleteTask(index) {
    console.log(index)
    let listArr = JSON.parse(localStorage.getItem("Todo"))
    listArr.splice(index, 1)
    localStorage.setItem("Todo", JSON.stringify(listArr));
    showTask();

}
