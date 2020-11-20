//Create map
const map = L.map('mapid').setView([-19.7786427,-44.1061843], 17);

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);
//Creat icon
const icon =  L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})


//Inicia uma variavel vazia mas pode se inicalizar 
let marker;

//Create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)


    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
    //console.log(marker)
})

//adicionar campos de fotos
function addPhotoField() {
    //Pegar o container  #images
    const container = document.querySelector('#images')
    //Pegar container para duplicar o .new-image
    const newsImage = document.querySelectorAll('.new-upload')
    //clonar a ultima imagem adicionada
    const clonado = newsImage[newsImage.length-1].cloneNode(true)
    /*No comando anterior caso coloque false ele vai copiar somente uma parte se colocar
    true ele vai copiar td*/
    //Verificar se está vazio, caso sim não adicionar
    const input = clonado.children[0]
    //Sempre que uma função ver um retorn ela para a aplicação
    if(input.value == "") {
        return 
    }
    //lipar o campo antes de adicionar ao conteiner
    input.value = ""

    //adicionar o clone ao conteiner
    container.appendChild(clonado)
}
function deleteField(event) {
    const span  = event.currentTarget

    const newsImage = document.querySelectorAll('.new-upload')

    if(newsImage.length <= 1) {
        //Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove() ;//Pega o pai do atributo
}

// Troca do Sim ou Não

function toggleSelect(event) {
    //retirar a classe active
    document.querySelectorAll('.button-select button')
    .forEach ( function(button) {
        button.classList.remove('active')
    })
    //Colocar a classe active
    const button = event.currentTarget
    button.classList.add('active')

    //Atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekend"]')

    //Verificar se sim ou não
    input.value = button.dataset.value
}