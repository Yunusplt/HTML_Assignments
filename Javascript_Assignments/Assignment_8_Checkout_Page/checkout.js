
//! FOR BAG ############################################################################
const azalt = document.querySelector("#bagMin")
const arttir= document.querySelector("#bagAdd")
const sil = document.querySelector("#bagRem")
const miktarBag = document.querySelector("#bag1")
let topFiyatBag = document.querySelector("#sumPriceBag")
const fiyatBag = document.querySelector("#priceBag")

arttir.onclick=()=>{
    miktarBag.textContent = +miktarBag.textContent + 1
    topFiyatBag.textContent = `${miktarBag.textContent * fiyatBag.textContent}`

}

azalt.onclick=()=>{

    if (miktarBag.textContent>1) {
        miktarBag.textContent -= 1
        topFiyatBag.textContent = `${miktarBag.textContent * fiyatBag.textContent}`
    }else return
}

sil.onclick=()=>{

    document.querySelector("#divBag").remove()

}

//!#########################################################################################
//! FOR LEVI
const azalt1 = document.querySelector("#minLevi")
const arttir1 = document.querySelector("#addLevi")
const sil1 = document.querySelector("#remLevi")
const miktarBag1 = document.querySelector("#levi1")
let topFiyatBag1 = document.querySelector("#sumPriceLevi")
const fiyatBag1 = document.querySelector("#priceLevi")

arttir1.onclick=()=>{
    miktarBag1.textContent = +miktarBag1.textContent + 1
    topFiyatBag1.textContent = `${miktarBag1.textContent * fiyatBag1.textContent}`

}

azalt1.onclick=()=>{

    if (miktarBag1.textContent>1) {
        miktarBag1.textContent -= 1
        topFiyatBag1.textContent = `${miktarBag1.textContent * fiyatBag1.textContent}`
    }else return
}

sil1.onclick=()=>{

    document.querySelector("#divLevi").remove()

}

//! #############################################################################
//! FOR CLOCK

const azalt2 = document.querySelector("#minClock")
const arttir2 = document.querySelector("#addClock")
const sil2 = document.querySelector("#remClock")
const miktarBag2 = document.querySelector("#clock1")
let topFiyatBag2 = document.querySelector("#sumPriceClock")
const fiyatBag2 = document.querySelector("#priceClock")

arttir2.onclick=()=>{
    miktarBag2.textContent = +miktarBag2.textContent + 1
    topFiyatBag2.textContent = `${miktarBag2.textContent * fiyatBag2.textContent}`

}

azalt2.onclick=()=>{

    if (miktarBag2.textContent>1) {
        miktarBag2.textContent -= 1
        topFiyatBag2.textContent = `${miktarBag2.textContent * fiyatBag2.textContent}`
    }else return
}

sil2.onclick=()=>{

    document.querySelector("#divClock").remove()

}







