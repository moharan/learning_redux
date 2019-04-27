const form = document.getElementById('form');
form.addEventListener('submit', handSubmit);

function handSubmit(event) {
    // don´t recharge the page
    event.preventDefault();
    const data = new FormData(form);
    const title = data.get('title');
    console.log(title);
}
