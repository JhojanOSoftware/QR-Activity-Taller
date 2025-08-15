

document.getElementById("QR").addEventListener("submit", function(event) {
    event.preventDefault();
    let text_qr= document.getElementById("texto").value;
    let size= 300
    let endpoint = `https://api.apgy.in/qr/?data=${text_qr}&size=${size}`
    let url_endpoint = endpoint + "data" + text_qr + "&size=" + size;
    document.getElementById("img1").src =url_endpoint
});