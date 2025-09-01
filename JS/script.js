async function getHeader(){
    return fetch(`HTMLElement/header.html`)
    .then((html) => {return html.text()})
    .then((htmlText) => {document.getElementById("header").innerHTML = htmlText})
}
async function runScript(){
    await getHeader()
    const menuIcon = document.getElementById("menuIcon")
    let isMenuOpened = false
    menuIcon.addEventListener("click", ()=>{
        const menuList  = document.getElementById("menuList")
        isMenuOpened = !isMenuOpened
        if(isMenuOpened){
            menuList.style.display = "block"
        } else{
            menuList.style.display = "none"
        }
    })
}
runScript()