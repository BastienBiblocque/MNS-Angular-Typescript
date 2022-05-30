const nom        = <HTMLInputElement | null> document.getElementById('nom');
const prenom     = <HTMLInputElement | null> document.getElementById('prenom');
const button     = <HTMLInputElement | null> document.getElementById('button');
const displayDiv = <HTMLDivElement   | null> document.getElementById('displayDiv');

interface User {
    nom:string,
    prenom:string,
    id:number,
}

const users: User[] = []
//add element
button?.addEventListener('click', ()=>{
    if (nom?.value!== undefined && prenom?.value!== undefined) {
        const newUser:User = {
            nom:nom.value,
            prenom:prenom.value,
            id:users.length+1,
        }
        users.push(newUser);
    }
    display();
});



// display element
function display(){
    displayDiv!.innerHTML = '';
    users.forEach((user)=>{
        var p = document.createElement("p");
        p.innerHTML = 'nom :' + user.nom + ' prenom :' + user.prenom;
        var button = document.createElement("button");
        button.innerHTML = 'delete';
        button.setAttribute('id',user.id.toString())
        button.setAttribute('class', 'deleteButton')
        p.appendChild(button);
        displayDiv?.appendChild(p);
    })

}
display();

//delete

//test

let deleteButton = document.querySelectorAll('.deleteButton');

if (deleteButton) {
    console.log(deleteButton)
}