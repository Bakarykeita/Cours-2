document.write('Bonjour tout le monde.' + '<br/>')

let nombre1 = 10
const PI = 3.14

console.log(nombre1)
console.log(PI)

document.write('<br/>' + nombre1)
document.write('<br/>' + PI + '<br/>')

//Tableau
const Capitale = ['Conakry', 'Dakar', 'Paris']
const Valeur = [1,2,3]

document.write('<br/>' + Capitale[0])
document.write('<br/>' + Capitale[1])
document.write('<br/>' + Capitale[2] + '<br/>')

//Les objets
const personne = {
    nom:'Keita',
    prenom:'Bakary',
    age:10
}

document.write('<br/>' + personne.nom)
document.write('<br/>' + personne.prenom)
document.write('<br/>' + personne.age+'ans' + '<br/>')

//Les conditions
if (personne.nom == 'Keita'){
    document.write('<br/>' + "Oui c'est Bakary" + '<br/>')
}
else if(personne.prenom == 'Bakary'){
     document.write('<br/>' + "Oui c'est moi évidemment" + '<br/>')
}
else{
    document.write('<br/>' + "Invalid, c'est pas Bakary" + '<br/>')
}

//Les boucles
for(let i =0; i<10; i++){
    document.write('<br/>' + i)
}