console.log("Js kører, fedt nok!")

function bang(){
    //alert("Hva så do?")
    document.querySelector("#info").innerHTML = `
        <div onclick="badaboom()">
            <h2> Goddag med dig </h2>
            <p>  Jeg er en glad fisk, ja jeg er så. </p>
        </div>
    `
    // her vil vi toggle
    document.querySelector("#firkant").style.backgroundColor = "red"
    document.querySelector("#firkant").classList.toggle("gemMig")
}

/** Her er en funktion der kaldes fra noget html-injektion */
function badaboom(){
    alert("Hej med dig.")
}

/**  */