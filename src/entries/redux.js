import {createStore} from 'redux';

const form = document.getElementById('form');
form.addEventListener('submit', handSubmit);

function handSubmit(event) {
    // don´t recharge the page
    event.preventDefault();
    const data = new FormData(form);
    const title = data.get('title');
    console.log(title);
}
// Initial data same use to mock
const initialState = [
    {
        "title": "luna song",
    },
    {
        "title": "sol song",
    },
    {
        "title": "estrellas song",
    }
]
// Preparing to use the store
const store = createStore(
    (state)=> state,
    initialState,
    // enhancer
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
