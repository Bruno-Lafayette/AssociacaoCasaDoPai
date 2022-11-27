window.onscroll = scroll;



function scroll(){
    var scrollTop = window.pageYOffset;
    if(scrollTop > 80){
        try{
            document.getElementById("menuPosicaoInicial").id = "menuPosicaoSecundaria"
        }catch{
            false
        } 
    } else {
        document.getElementById("menuPosicaoSecundaria").id = "menuPosicaoInicial"
    }
}

function returnScroll(){
    document.getElementById("menuPosicaoSecundaria").id = "menuPosicaoInicial"
}