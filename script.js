document.querySelector(".check").addEventListener("click" , function(){
    const girKarekok = Number(document.querySelector(".deger").value);
    const karekokHesapla = Number(Math.sqrt(girKarekok));
    document.querySelector(".message").textContent = karekokHesapla
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".deger").value = "";
    document.querySelector(".message").textContent = "?"
})
