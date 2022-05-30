"use strict";
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const button = document.getElementById('button');
const displayDiv = document.getElementById('displayDiv');
const users = [];
//add element
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    if ((nom === null || nom === void 0 ? void 0 : nom.value) !== undefined && (prenom === null || prenom === void 0 ? void 0 : prenom.value) !== undefined) {
        const newUser = {
            nom: nom.value,
            prenom: prenom.value,
            id: users.length + 1,
        };
        users.push(newUser);
    }
    display();
});
// display element
function display() {
    displayDiv.innerHTML = '';
    users.forEach((user) => {
        var p = document.createElement("p");
        p.innerHTML = 'nom :' + user.nom + ' prenom :' + user.prenom;
        var button = document.createElement("button");
        button.innerHTML = 'delete';
        button.setAttribute('id', user.id.toString());
        button.setAttribute('class', 'deleteButton');
        p.appendChild(button);
        displayDiv === null || displayDiv === void 0 ? void 0 : displayDiv.appendChild(p);
    });
}
display();
//delete
//test
let deleteButton = document.querySelectorAll('.deleteButton');
if (deleteButton) {
    console.log(deleteButton);
}
