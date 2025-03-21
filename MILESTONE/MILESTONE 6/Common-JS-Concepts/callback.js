

function ghotok(patri,name) {
    patri(name)
}

const patri = function (name) {
    console.log("okay patri 1 paici ",name)
}

const patr2 = function (name) {
    console.log("okay patri 2 paici ",name)
}

const patr3 = function (name) {
    console.log("okay patri 3 paici ",name)
}

ghotok(patri, "hero alom")

ghotok(patr2,"Masud")