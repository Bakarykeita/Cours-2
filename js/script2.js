//Les fonctions

function Dire_Bonjour(){
    document.write('Bonjour les gars' + '<br/>')
}

Dire_Bonjour()

function somme(a, b){
    document.write(a+b + '<br/>')
}
somme(10,20)

function puissance(a, n){
    return a**n
}
document.write(puissance(4, 2))