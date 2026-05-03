//Les fonctions

function Dire_Bonjour() {
    document.write('Bonjour les gars' + '<br/>')
}

Dire_Bonjour()

function somme(a, b) {
    document.write(a + b + '<br/>')
}
somme(10, 20)

function puissance(a, n) {
    return a ** n
}
document.write(puissance(4, 2))

document.write('<br/>' + 'Script2')

Personne2 = {
    nom: "Kaba",
    prenom: "Ali",
    age: 44
}
document.write('<br/>' + Personne2.age + 'ans' + '<br/>')
document.write('<br/>')

class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom,
            this.prenom = prenom,
            this.age = age
    }
    AfficherNom() {
        return this.nom;
    }
    AfficherPrenom() {
        return this.prenom;
    }
    AfficherAge() {
        return this.age;
    }
}

const p1 = new Personne('Kaba', 'Ali', 44)
const p2 = new Personne('Bah', 'Aicha', 88)
const p3 = new Personne('Soumah', 'Baba', 77)
document.write("nom: "+p1.AfficherNom()+" Prenom: "+p1.AfficherPrenom()+" Age: "+p1.AfficherAge()+"ans"+"<br/>")
document.write("nom: "+p2.AfficherNom()+" Prenom: "+p2.AfficherPrenom()+" Age: "+p2.AfficherAge()+"ans"+"<br/>")
document.write("nom: "+p3.AfficherNom()+" Prenom: "+p3.AfficherPrenom()+" Age: "+p3.AfficherAge()+"ans"+"<br/>")
document.write('<br/>')
class Universite{
    constructor(nom,quartier,statut) {
        this.nom = nom,
        this.quartier = quartier,
        this.statut = statut
    }
    AfficherNom() {
        return this.nom;
    }
    AfficherQuartier() {
        return this.quartier;
    }
    AfficherStatut() {
        return this.statut;
    }
}

const u1 = new Universite('Kofi Annan', 'Nongo', 'Privé')
const u2 = new Universite('Gamal', 'Dixinn', 'Public')
const u3 = new Universite('UNC', 'Nongo', 'Privé')
document.write("Nom: "+u1.AfficherNom()+" - Quartier: "+u1.AfficherQuartier()+" - Statut: "+u1.AfficherStatut()+"<br/>")
document.write("Nom: "+u2.AfficherNom()+" - Quartier: "+u2.AfficherQuartier()+" - Statut: "+u2.AfficherStatut()+"<br/>")
document.write("Nom: "+u3.AfficherNom()+" - Quartier: "+u3.AfficherQuartier()+" - Statut: "+u3.AfficherStatut()+"<br/>")

