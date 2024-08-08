const search = document.getElementById("search");
const enter = document.querySelector(".enter");
const btn = document.querySelector(".btn");
const list = document.querySelector("#list");

btn.addEventListener("click", ()=> {
    const value = enter.value

    list.append(Object.assign(document.createElement('li'), {textContent: value}))
})