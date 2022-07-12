const API_URL = "http://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');


fetch('${API_URL}' / users) //api uso de fetch
    .then((response) => response.json()) //promesa callback para que le devuelva el objeto si se cumple
    .then((users) => {
        users.forEach((user) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode('${user.name}')
            );
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);

    });

//const xhr = new XMLHttpRequest(); - api js

//function onRequestHandler() {
//  if (this.readyState == 4 && this.status == 200) {
//0 = UNSET, no se ha llamado al metodo open.
//1 = OPENED, se ha llamado al metodo open.
//2 = HEADERS_RECEIVED, no se ha llamado al metodo open.
//3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta.
//4 = DONE, se ha completado la operación.
//    const data = JSON.parse(this.response);
//  const HTMLResponse = document.querySelector("#app");

//const tpl = data.map((user) => '<li>${user.name}</li>');
//HTMLResponse.innerHTML = '<ul>${tpl}</ul>'
// }
//}

//xhr.addEventListener("load", onRequestHandler);
//xhr.open("GET", '${API_URL}/users');
//xhr.send();