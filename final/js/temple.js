const data = 'json/temple.json';
const cards = document.querySelector('.temple_cards');

fetch(data)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    // console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});

function displayTemples(temple) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinance_schedule = document.createElement('p');
    let temple_closure_schedule = document.createElement('p');

    name.textContent = `${temple.name}`;
    image.textContent = `${temple.image}`;
    address.textContent = `&#f3c5; ${temple.address}`;
    telephone.textContent = `&#f095; ${temple.telephone}`;
    email.textContent = `&#f0e0; ${temple.email}`;
    services.textContent = `&#f562; ${temple.services}`;
    history.textContent = `&#e4a2; ${temple.history}`;
    ordinance_schedule.textContent = `&#e577; ${temple.ordinance_schedule}`;
    temple_closure_schedule.textContent = `&#f023; ${temple.temple_closure_schedule}`;

    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `Image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');

    // Add or append the section(card) with the main element

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinance_schedule);
    card.appendChild(temple_closure_schedule);

    // Add or appendt he existing HTML div with the cards class with the section(card)

    document.querySelector('div.temple_cards').appendChild(card);
}