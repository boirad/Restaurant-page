
import { loadAbout } from "./loadAbout"
import { loadMenu } from "./loadMenu";
import { loadHome } from "./loadHome";

function loadPage() {

    const body = document.querySelector("body");

    const navBox = document.createElement("div");
    navBox.id = "navBox"; 
    body.appendChild(navBox)
    const title = document.createElement("h1")
    title.innerHTML = "iRest";
    navBox.appendChild(title);

    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const home = document.createElement("li");
    home.id = "home";
    const menu = document.createElement("li");
    const about = document.createElement("li");

    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    about.innerHTML = "Contacts";
    
    navBox.appendChild(nav);
    nav.appendChild(list);
    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(about);

    const content = document.querySelector("#content");

    const contentParent = document.querySelector("#navBox").parentNode
    contentParent.insertBefore(navBox, content)

    loadHome();

    home.addEventListener("click", () => {
        content.innerHTML = "";
        menu.classList.remove("underline");
        about.classList.remove("underline");
        loadHome();
        console.log("home")

    })

    menu.addEventListener("click", () => { 
        content.innerHTML = "";
        menu.classList.add("underline");
        home.classList.remove("underline");
        about.classList.remove("underline");
        loadMenu();
        console.log("menu")

    })

    about.addEventListener("click", () => {
        content.textContent = "";
        about.classList.add("underline");
        home.classList.remove("underline");
        menu.classList.remove("underline");
        loadAbout();
        console.log("about")

    })


}

export { loadPage }


/* 
    
    homeContainer.innerHTML = "";
    menuContainer.innerHTML = "";
    aboutContainer.innerHTML = "";



*/