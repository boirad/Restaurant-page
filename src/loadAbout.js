

function loadAbout() {

    const content = document.querySelector("#content");

    const aboutContainer = document.createElement("div");
    aboutContainer.id = "aboutContainer";
    content.appendChild(aboutContainer);

    const titleAbout = document.createElement("h1");
    titleAbout.id = "titleAbout";
    titleAbout.innerHTML = "Contacts";
    aboutContainer.appendChild(titleAbout)

    const contacts = document.createElement("div");
    contacts.id = "contacts";
    aboutContainer.appendChild(contacts);

    const contactsList = document.createElement("ul");
    contacts.appendChild(contactsList);

    const address = document.createElement("li");
    address.innerHTML = "Address: code street n.01"
    contacts.appendChild(address);

    const phone = document.createElement("li");
    phone.innerHTML = "Phone: 0546 909023"
    contacts.appendChild(phone);

    const email = document.createElement("li");
    email.innerHTML = "Email: iRest@code.com"
    contacts.appendChild(email);


}

export { loadAbout }