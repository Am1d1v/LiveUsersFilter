

const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const listItems = [];

// Users Filter
filter.addEventListener('input', (event) => {
    filterData(event.target.value)
});

// Get Users Data
async function getData(){

    // Fetch data
    const res = await fetch('https://randomuser.me/api?results=150');
    const data = await res.json();
    //console.log(data.results);

    // Clear Loading
    result.innerHTML = '';

    data.results.forEach((user) => {
        const li = document.createElement('li');

        // Generates User list
        listItems.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        result.append(li)
    })
}
getData();

// Users Filter Function
function filterData(searchItem){
   listItems.forEach((item) => {
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide');
        }
   }) 
}




