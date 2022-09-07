//https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers
//https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]

const input_field = document.getElementById('input-field');
const btn_search = document.getElementById('search');
const results = document.getElementById('results');

async function getArtwork(url) {
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
        return `<a href='#' onclick='toPage(${e})'>${e}</a>`;
    });
    for (const i of results) {
        result = result + i;
    }

    console.log(result);
    return result;
}

btn_search.addEventListener('click', async () => {
    let query = document.getElementById('input-field').value;
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`;
    let data = await getArtwork(url);
    console.log(data);
    results.innerHTML = presentResults(data);
});
