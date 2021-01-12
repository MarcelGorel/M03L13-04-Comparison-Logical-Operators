const age = 18;
const firstName = "Abraham";
// firstName ipv name gebruikt omdat ik op name de melding kreeg deze beter niet te gebruiken.
const totalAmount = 101;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Helaas geen korting voor jou")
}

if (firstName === "Sarah" || firstName === "Abraham") {
    console.log("Gefeliciteerd je krijgt een gratis biertje")
} else {
    console.log("Helaas geen gratis biertje voor jou")
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Gefeliciteerd je krijgt gratis (vega)bitterballen")
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Gefeliciteerd je krijgt een gratis portie nachos")
} else if (totalAmount >= 100) {
    console.log("Gefeliciteerd je krijgt een gratis flesje champagne")
} else {
    console.log("Helaas niet genoeg uitgegeven voor een gratis hapje of drankje")
}



