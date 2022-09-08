const urlParams = new URLSearchParams(location.search);
const myParam = urlParams.get('objectID');
const contentBox = document.getElementById('content-box');

async function getArtworkData(param) {
    console.log(param);
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${param}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

async function showArtwork(param) {
    const data = await getArtworkData(param);
    document.title = data.title;
    return `<h1>${data.title}</h1>
            <img src='${data.primaryImage}' width='80%'/>
                                `;
}

// contentBox.innerHTML = await showArtwork(myParam);
window.onload = async (event) => {
    contentBox.innerHTML = await showArtwork(myParam);
    console.log('page is fully loaded');
};
