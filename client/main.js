const complimentBtn = document.getElementById("compliment-button")
const fortuneBtn = document.getElementById("fortune-button")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios
    .get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)



const itemContainer = document.querySelector('#item-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/items`

const itemsCallback = ({ data: item }) => displayItems(item)
const errCallback = err => console.log(err.response.data)

const getAllItems = () => {
    axios
    .get(baseURL)
    .then(itemsCallback)
    .catch(errCallback);
};

const deleteItem = (id) => {
    axios
    .delete(`${baseURL}/${id}`)
    .then(itemsCallback)
    .catch(errCallback)
}

const updateItem = (id, type) => {
    axios
    .put(`${baseURL}/${id}`, {type})
    .then(itemsCallback)
    .catch(errCallback)
};

const createItem = (body) => {
    axios
    .post(baseURL, body)
    .then(itemsCallback)
    .catch(errCallback);
};


function submitHandler(evt) {
    evt.preventDefault()

    let name = document.querySelector('#name')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createItem(bodyObj)

    name.value = ''
    rating.checked = false
    imageURL.value = ''
};

function createItemCard(item) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')

    itemCard.innerHTML = `<img alt='item pic' src=${item.imageURL} class="item-pic"/>
    <p class="item-name">${item.name}</p>
    <div class="btns-container">
        <button onclick="updateItem(${item.id}, 'minus')">-</button>
        <p class="item-rating">${item.rating} stars</p>
        <button onclick="updateItem(${item.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteItem(${item.id})">delete</button>
    `


    itemContainer.appendChild(itemCard)
};

function displayItems(arr) {
    itemContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCard(arr[i])
    }
};

form.addEventListener('submit', submitHandler)

getAllItems()