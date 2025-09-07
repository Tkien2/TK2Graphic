let allObject = []
const pageElement = document.getElementById("page")
let page = {
    x: 0,
    y: 0
}
let mousePosition = {
    x: 0,
    y: 0
}
let isMouseDown = false
let sensitivity = 1
pageElement.addEventListener("mousemove", (event)=>{
    if(isMouseDown){
        console.log(`===================`);
        console.log(`mX: ${mousePosition.x}\nmY: ${mousePosition.y}`);
        console.log(`cX: ${event.clientX}\ncY: ${event.clientY}`);
        let dx = event.clientX-mousePosition.x
        let dy = event.clientY-mousePosition.y
        page.x += dx
        page.y += dy
        console.log(`dX: ${dx}\ndY: ${dy}`);
        console.log(`pX: ${page.x}\npY: ${page.y}`);
        console.log(`translate(calc(-50% + ${page.x}px), calc(-50% - 5px + ${page.y}px))`);
        pageElement.style.transform = `translate(calc(-50% + ${page.x}px), calc(-50% - 5px + ${page.y}px))`
    }
    mousePosition.x = event.clientX
    mousePosition.y = event.clientY
})
document.addEventListener("mousedown", ()=>{
    isMouseDown = true
})
document.addEventListener("mouseup", ()=>{
    isMouseDown = false
})