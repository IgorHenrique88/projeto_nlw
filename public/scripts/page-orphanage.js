const option  = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
/*Com a criação do objeto para que o mesmo seja utilç deve colocar como argumento
de alguma função*/
//Create map
const map = L.map('mapid', option).setView([-19.7786427,-44.1061843], 17);

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//Creat icon
const icon =  L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Creat and add markler
L.marker([-19.7786427,-44.1061843], { icon }).addTo(map)
    .bindPopup(popup)



function selectImage(event){
    /*console.log(event.currentTarget)
    Estou colocando o alvo atual que está disparando o evento*/
    const button = event.currentTarget
    console.log(button.children)

    //Remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const imgage = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = imgage.src

    //adicionar a clase .active para este botão
    button.classList.add('active')

}