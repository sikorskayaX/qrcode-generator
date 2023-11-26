document.addEventListener('DOMContentLoaded', function(){
    let errorMessage = document.querySelector(".error");
    let url = document.querySelector('input[type = "url"]');


    let qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 256,
        height : 256
    });

    let showError = function(){
        errorMessage.classList.add("error-active")
    }

    let hideError = function(){
        errorMessage.classList.remove("error-active")
    }

    let makeCode = function () {		
        
        if (!url.value) {
            showError();
            url.focus();
            return;
        }
        
        qrcode.makeCode(url.value);
    }

    url.addEventListener('keypress',  function(){
        hideError();
    });

    url.addEventListener('paste',  function(){
        hideError();
    });

    document.querySelector('button').addEventListener('click', function(){
        makeCode();
    });

});