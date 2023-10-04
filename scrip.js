const ul = document.querySelector(".crud")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
input.addEventListener("keydown" , (e) => {
    if(e.code === "Enter" || e.keyCode === "Enter"){
        fanc()
    }
})



btn.addEventListener("click", (e) => fanc())
function fanc () {
    if(input.value.trim() === "") {
        alert("толтур")
        input.value = ""
    }else {
        ul.innerHTML += `<li class="list-group-item d-flex align-items-center justify-content-between">
        ${input.value}
        <button class="del-btn btn btn-danger">Delete</button>
        </li>`
        input.value = ""
    }
}


ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
        e.target.parentNode.remove()
    }
})

