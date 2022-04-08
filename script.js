
var spor_sayfasi = document.querySelector("#SporHayati");
var genel_bilgiler = document.querySelector("#GenelBilgi");
spor_sayfasi.classList.add("hidden");
function locationHashChanged() {
    console.log(location.hash);
    
    if (location.hash === "#SporHayati") {
        
        spor_sayfasi.classList.remove("hidden");
        genel_bilgiler.classList.add("hidden");
    }
    if (location.hash === "#GenelBilgi"){
        
        genel_bilgiler.classList.remove("hidden");
        spor_sayfasi.classList.add("hidden");
    }
}

window.onhashchange = locationHashChanged;