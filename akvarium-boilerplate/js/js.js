/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Ok, JavaScriptet kører ...')

/* fiskeobjekt */
const guldfisk = {
    navn: "Guldfisk",
    info: "Fisk, der stammer fra den mystiske sø ...",
    image: "fish_PNG25137_small.png",
    xPos: 400,
    yPos: 150,
    speed: 12
}

/* Placer fisken på scenen */
scene.innerHTML += `
    <figure 
     id="${guldfisk.navn}" 
     onclick="fiskInfo('${guldfisk.info}')"
     >
        <img 
         src="images/${guldfisk.image}" 
         alt="${guldfisk.info}" >
    </figure>
`

/* Indsætter egenskaben "info" fra et objekt */
function fiskInfo(tekst){
    console.log("fiskInfo() svarer ...") // test
    info.innerHTML = "<p>" + tekst + "</p>"
}

