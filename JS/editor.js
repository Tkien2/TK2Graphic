const widthProjectInput = document.getElementById("widthValue")
const heightProjectInput = document.getElementById("heightValue")
const startProjectButton = document.getElementById("startProjectButton")
const newProjectWindow = document.getElementById("newProjectInfoBox")
const projectNameInput = document.getElementById("projectNameValue")
let canProjectBeStarted = true

function resizeExampleModel(){
    const width = parseFloat(widthProjectInput.value) / parseFloat(heightProjectInput.value)
    const exampleModel = document.getElementById("projectRatioModel")
    const maxPixel = 60
    if(width>1){
        console.log("width>1");
        exampleModel.style.width = "60px"
        exampleModel.style.height = `${1/width * maxPixel}px`
    } else{
        exampleModel.style.height = "60px"
        exampleModel.style.width = `${width * maxPixel}px`
    }
}
function checkValueBeforeResizingModel(){
    const warningWrapper = document.getElementById("ratioMessageWrap")
    const warning = document.getElementById("ratioMessage")
    if(parseFloat(widthProjectInput.value) <= 0 || parseFloat(heightProjectInput.value) <= 0){
        warningWrapper.style.display = "flex"
        warning.innerHTML = "Tỉ lệ cạnh phải lớn hơn 0!"
        canProjectBeStarted = false
    } else {
        warningWrapper.style.display = "none"
        canProjectBeStarted = true
    }
    resizeExampleModel() //lỡ ngta nhập 0.5 mà chặn thì kì quá, cho chạy luôn
}
widthProjectInput.addEventListener("input", checkValueBeforeResizingModel)
heightProjectInput.addEventListener("input", checkValueBeforeResizingModel)

function createProject(width, height){
    const page = document.getElementById("page")
    if(width>height){
        const pageWidth = window.innerWidth*0.8
        page.style.width = `${pageWidth}px`
        page.style.height = `${pageWidth*height/width}px`
        
    } else if(width<height){
        const pageHeight = window.innerHeight - 80 - 130
        page.style.height = `${pageHeight}px`
        page.style.width = `${pageHeight*width/height}px`
    } else{
        if(window.innerWidth>= window.innerHeight){
            const pageHeight = window.innerHeight*0.9 - 90 - 80
            page.style.height = `${pageHeight}px`
            page.style.width = `${pageHeight}px`
        } else{
            const pageWidth = window.innerWidth*0.8
            page.style.height = `${pageWidth}px`
            page.style.width = `${pageWidth}px`
        }
    }
}
startProjectButton.addEventListener("click", ()=>{
    if(projectNameInput.value.length <= 0){
        const warningWrapper = document.getElementById("inputMessageWrap--projectName")
        const warningMessage = document.getElementById("nameMessage")
        warningWrapper.style.display = "flex"
        warningMessage.innerHTML = "Dự án phải có tên chứ!"
    } else if(canProjectBeStarted){
        createProject(parseFloat(widthProjectInput.value), parseFloat(heightProjectInput.value))
        newProjectWindow.style.display = "none"
    }
})