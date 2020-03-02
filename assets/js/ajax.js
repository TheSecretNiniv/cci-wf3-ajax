function ajax(){
    let xhr = null;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            xhr = newActiveXObejct("Msxml2.XMLHTTP");
        }catch(e){
            xhr =new ActiveXObject("Microsoft.XMLHTTP");
        }
    }else{
            alert("mettez à jour votre navigateur");
        xhr = false;
    }
    return xhr;
}