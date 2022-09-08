//https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers
//https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]

const input_field = document.getElementById('input-field');
const btn_search = document.getElementById('search');
const results = document.getElementById('results');

async function getResults(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function toPage(ID) {
    pass;
}

function presentResults(data) {
    let result = '';
    let results = data['objectIDs'].map((e) => {
        let href = `/artwork.html?objectID=${e}`;
        return `<a href='${href}' target='_blank'>${e}</a>`;
    });
    for (const i of results) {
        result = result + i;
    }

    console.log(result);
    return result;
}

btn_search.addEventListener('click', async () => {
    let query = document.getElementById('input-field').value;
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query}`;
    let data = await getResults(url);
    console.log(data);
    results.innerHTML = '';
    results.innerHTML = presentResults(data);
});
