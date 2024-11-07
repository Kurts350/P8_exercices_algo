const entreeUtilisateur = document.getElementById("decimalInput")
const zoneResultat = document.getElementById("binaryResult")


function convertToBinary() {
 let nombreUtilisateur = Number(entreeUtilisateur.value)
 let array = []
 while (nombreUtilisateur > 0) {
   let reste = nombreUtilisateur % 2
   array.push(reste)
   nombreUtilisateur = Math.floor(nombreUtilisateur / 2)
 }
 array.reverse()
 zoneResultat.innerText = array.join("")
}