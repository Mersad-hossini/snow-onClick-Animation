document.addEventListener("click", e => {
    let spanElem = document.createElement("span")

    let leftPropraty = e.offsetX + "px"
    let topPropraty = e.offsetY + "px"

    let randomSize =  Math.floor(Math.random() * 100) + "px";
    
    spanElem.style.cssText = `left:${leftPropraty};top:${topPropraty};width:${randomSize};height:${randomSize}`
    spanElem.classList.add("snowflake")
    document.body.append(spanElem)

    setTimeout(() => {
        spanElem.remove()
    }, 1000)
})