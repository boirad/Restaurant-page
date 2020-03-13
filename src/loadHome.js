

function loadHome() {

    const content = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";
    content.appendChild(homeContainer)

    const p1 = document.createElement("p");
    p1.id = "p1";
    p1.innerHTML = "CODE, EAT";

    const p2 = document.createElement("p");
    p2.id = "p2";
    p2.innerHTML = "-REPEAT!";

    const p4 = document.createElement("p");
    p4.id = "p4";
    p4.innerHTML = "Check our menu and contact us to take a reservation!";

    homeContainer.appendChild(p1);
    homeContainer.appendChild(p2);
    homeContainer.appendChild(p4)

    home.classList.add("underline");

}

export { loadHome };