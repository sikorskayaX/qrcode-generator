document.addEventListener('DOMContentLoaded', function(){
    let errorMessage = document.querySelector(".error");
    let qrcodeContainer = document.getElementById("qrcode");
    let url = document.querySelector('input[type = "url"]');


    let qrcode = new QRCode(qrcodeContainer, {
        width : 256,
        height : 256
    });

    let showError = function(){
        errorMessage.classList.add("error-active");

        let image = qrcodeContainer.querySelector('img');
        image.style.display = 'none';
        image.src = '';

        let canvas = qrcodeContainer.querySelector('canvas');
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'block';
        url.focus();
    }

    let hideError = function(){
        errorMessage.classList.remove("error-active");
    }

    let makeCode = function () {		
        
        if (!url.value) {
            showError();
            return;
        }
        
        qrcode.makeCode(url.value);
    }

    url.addEventListener('input',  function(){
        hideError();
    });


    document.querySelector('button').addEventListener('click', function(){
        makeCode();
    });

});