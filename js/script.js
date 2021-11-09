let icon = document.querySelector(".icon")
let input = document.querySelector(".input")

icon.addEventListener("click",function(){
    icon.classList.toggle('active')
    input.classList.toggle('active')
})
input.addEventListener("keyup",function(){
    if(input.value == ""){
        alert("please write something")
    }
})