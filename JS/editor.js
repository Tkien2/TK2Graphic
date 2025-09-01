const widthProjectInput = document.getElementById("widthValue")
const heightProjectInput = document.getElementById("heightValue")
function resizeExampleModel(){
    const width = parseFloat(widthProjectInput.value) / parseFloat(heightProjectInput.value)
    const exampleModel = document.getElementById("projectRatioModel")
    const maxPixel = 60
    if(width>1){
        exampleModel.style.widtht = "60px"
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
    } else {
        warningWrapper.style.display = "none"
    }
    resizeExampleModel() //lỡ ngta nhập 0.5 mà chặn thì kì quá, cho chạy luôn
}
widthProjectInput.addEventListener("input", checkValueBeforeResizingModel)
heightProjectInput.addEventListener("input", checkValueBeforeResizingModel)
