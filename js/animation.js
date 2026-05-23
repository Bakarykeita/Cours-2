function animation() {
    let id = null
    let element = document.getElementById('animation')
    let position = 0
    let fromTop = 0
    let fromLeft = 0
    let fromBottom = 300
    let fromRight = 300
    clearInterval(id)
    id = setInterval(bouger, 5)


    function bouger() {
        if (fromTop<300){
            fromTop++
            element.style.top = fromTop + 'px'
        } else if (fromLeft<300) {
            fromLeft++
            element.style.left = fromLeft + 'px'
        } else if (fromBottom>0){
            fromBottom--
            element.style.top = fromBottom + 'px'
        } else if (fromRight>0){
            fromRight--
            element.style.left = fromRight + 'px'
        } else{
            clearInterval(id)
        }
    }
}