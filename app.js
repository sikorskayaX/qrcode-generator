document.addEventListener('DOMContentLoaded', function(){
    alert('yes');
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 256,
        height : 256
    });




    let makeCode = function () {		
        let url = document.querySelector('input[type = "url"]');
        
        if (!url.value) {
            alert("Input a url");
            url.focus();
            return;
        }
        
        qrcode.makeCode(url.value);
    }

    document.querySelector('button').addEventListener('click', function(){
        makeCode();
    });

});