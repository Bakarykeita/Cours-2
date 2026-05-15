document.getElementById('b').style.color='red'

let InitTaille=100;
function AgrandirImage() {
    InitTaille=InitTaille+50;
    document.getElementById('image').style.width=InitTaille+'px';
}

function Reduire() {
    InitTaille=InitTaille-50;
    document.getElementById('image').style.width=InitTaille+'px';
}

function Change() {
    let val=document.getElementById('image').src;
    const im1="http://127.0.0.1:5500/image/BK.png"
    const im2="http://127.0.0.1:5500/image/image2.jpg"
    console.log('Je suis')

    console.log(val)
    console.log(im1)
    if(val==im1){
        document.getElementById('image').src=im2
    }else{
        document.getElementById('image').src=im1
    }
    
}