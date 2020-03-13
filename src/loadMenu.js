import { loadHome } from "./loadHome";

function loadMenu() {

    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.id = "menuContainer";
    content.appendChild(menuContainer);

    const titleMenu = document.createElement("h1");
    titleMenu.id = "titleMenu";
    titleMenu.innerHTML = "Menu";
    menuContainer.appendChild(titleMenu);

    const menu = document.createElement("div");
    menu.id = "menu";
    menuContainer.appendChild(menu);

    /* BREAKFAST */

    const breakfast = document.createElement("div");
    breakfast.id = "breakfast";
    menu.appendChild(breakfast);

    const breakfastTitle = document.createElement("h2");
    breakfastTitle.id = "breakfastTitle";
    breakfastTitle.innerHTML = "Breakfast";
    breakfastTitle.classList.add("sectionTitle");
    breakfast.appendChild(breakfastTitle);

    const breakList = document.createElement("ul");
    breakfast.appendChild(breakList);

    const break1 = document.createElement("li");
    break1.innerHTML = "Array with bacon 5$";
    break1.classList.add("menuItem");
    breakList.appendChild(break1);

    const break2 = document.createElement("li");
    break2.innerHTML = "Variable eggs 3.50$";
    break2.classList.add("menuItem");
    breakList.appendChild(break2);

    const break4 = document.createElement("li");
    break4.innerHTML = "Objective toast 3$";
    break4.classList.add("menuItem");
    breakList.appendChild(break4);

    /* LUNCH */

    const lunch = document.createElement("div");
    lunch.id = "lunch";
    menu.appendChild(lunch);

    const lunchTitle = document.createElement("h2");
    lunchTitle.id = "lunchTitle";
    lunchTitle.innerHTML = "Lunch";
    lunchTitle.classList.add("sectionTitle");
    lunch.appendChild(lunchTitle);

    const lunchList = document.createElement("ul");
    lunch.appendChild(lunchList);

    const lunch1 = document.createElement("li");
    lunch1.innerHTML = "Strings with Salsa 6$";
    lunch1.classList.add("menuItem");
    lunchList.appendChild(lunch1);

    const lunch2 = document.createElement("li");
    lunch2.innerHTML = "Primitives salad 10$";
    lunch2.classList.add("menuItem");
    lunchList.appendChild(lunch2);

    const lunch3 = document.createElement("li");
    lunch3.innerHTML = "Boolean meatballs 8$";
    lunch3.classList.add("menuItem");
    lunchList.appendChild(lunch3);

    const lunch4 = document.createElement("li");
    lunch4.innerHTML = "Big-Int Steak 14$";
    lunch4.classList.add("menuItem");
    lunchList.appendChild(lunch4);
    

    /* DINNER */

    const dinner = document.createElement("div");
    dinner.id = "dinner";
    menu.appendChild(dinner);

    const dinnerTitle = document.createElement("h2");
    dinnerTitle.id = "dinnerTitle";
    dinnerTitle.innerHTML = "Dinner";
    dinnerTitle.classList.add("sectionTitle");
    dinner.appendChild(dinnerTitle);

    const dinnerList = document.createElement("ul");
    dinner.appendChild(dinnerList);

    const dinner1 = document.createElement("li");
    dinner1.innerHTML = "Undefined meat 10$";
    dinner1.classList.add("menuItem");
    dinnerList.appendChild(dinner1);

    const dinner2 = document.createElement("li");
    dinner2.innerHTML = "null vegetables 0$";
    dinner2.classList.add("menuItem");
    dinnerList.appendChild(dinner2);

    const dinner3 = document.createElement("li");
    dinner3.innerHTML = "Fish and symbols 5$";
    dinner3.classList.add("menuItem");
    dinnerList.appendChild(dinner3);



}

export { loadMenu }



