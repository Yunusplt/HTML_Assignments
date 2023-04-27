//! FOR BAG ############################################################################
const azalt = document.querySelector("#minBag")
const arttir= document.querySelector("#addBag")
const sil = document.querySelector("#bagRem")
let miktarBag = document.querySelector("#bag1")
let topFiyatBag = document.querySelector("#sumPriceBag")
const fiyatBag = document.querySelector("#priceBag")

arttir.onclick=()=>{
    miktarBag.textContent = +miktarBag.textContent + 1
    topFiyatBag.textContent =`${(miktarBag.textContent * fiyatBag.textContent).toFixed(2)}` 
    altKisim()
    
}

azalt.onclick=()=>{

    if (miktarBag.textContent>0) {
        miktarBag.textContent -= 1
        topFiyatBag.textContent = (miktarBag.textContent * fiyatBag.textContent).toFixed(2)
    altKisim()
    }else return
}

sil.onclick=()=>{

    document.querySelector("#divBag").remove()
    sifirlaBag()
    altKisim()

}

//!#########################################################################################
//! FOR LEVI
const azalt1 = document.querySelector("#minLevi")
const arttir1 = document.querySelector("#addLevi")
const sil1 = document.querySelector("#remLevi")
let miktarLevi = document.querySelector("#levi1")
let topFiyatLevi = document.querySelector("#sumPriceLevi")
const fiyatLevi = document.querySelector("#priceLevi")

console.log(azalt1);
console.log(miktarLevi.textContent);
console.log(fiyatLevi.textContent);

arttir1.onclick=()=>{
    miktarLevi.textContent = +miktarLevi.textContent + 1
    topFiyatLevi.textContent = (miktarLevi.textContent * fiyatLevi.textContent).toFixed(2)
    altKisim()
}

azalt1.onclick=()=>{

    if (miktarLevi.textContent>0) {
        miktarLevi.textContent -= 1
        topFiyatLevi.textContent = (miktarLevi.textContent * fiyatLevi.textContent).toFixed(2)
    altKisim()
    }else return
}

sil1.onclick=()=>{

    document.querySelector("#divLevi").remove()
    sifirlaLevi()
    altKisim()

}

//! #############################################################################
//! FOR CLOCK

const azalt2 = document.querySelector("#minClock")
const arttir2 = document.querySelector("#addClock")
const sil2 = document.querySelector("#remClock")
let miktarClock = document.querySelector("#clock1")
let topFiyatClock = document.querySelector("#sumPriceClock")
const fiyatClock = document.querySelector("#priceClock")

arttir2.onclick=()=>{
    miktarClock.textContent = +miktarClock.textContent + 1
    topFiyatClock.textContent = (miktarClock.textContent * fiyatClock.textContent).toFixed(2)
    altKisim()

}

azalt2.onclick=()=>{

    if (miktarClock.textContent>0) {
        miktarClock.textContent -= 1
        topFiyatClock.textContent = (miktarClock.textContent * fiyatClock.textContent).toFixed(2)
        altKisim()
    }else return 
}

sil2.onclick=()=>{

    document.querySelector("#divClock").remove()
    sifirlaClock()
    altKisim()

}

function sifirlaBag() {
    topFiyatBag.textContent = 0
}

function sifirlaLevi() {
    topFiyatLevi.textContent = 0
}

function sifirlaClock() {
    topFiyatClock.textContent = 0
}


let subTotal = document.querySelector("#subTotal")
let tax = document.querySelector("#tax")
let shipping = document.querySelector("#shipping")
let total = document.querySelector("#total")

function altKisim() {
    subTotal.textContent =  (+topFiyatBag.textContent + +topFiyatClock.textContent + +topFiyatLevi.textContent).toFixed(2)
    tax.textContent = (+subTotal.textContent * 0.18).toFixed(2)

    shipping.textContent = 15

    total.textContent = (+subTotal.textContent + +tax.textContent + +shipping.textContent).toFixed(2)

    console.log(shipping.textContent);
}

altKisim()




