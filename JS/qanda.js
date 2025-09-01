const questionList = document.querySelectorAll(".questionWraper")
let arrowRotatedStatus=[]
for(let i = 0; i<questionList.length; i++){
    arrowRotatedStatus.push({
        arrowId: `b${questionList[i].id}`,
        status: false
    })
}
for(let i = 0; i<questionList.length; i++){
    questionList[i].addEventListener("click",()=>{
        const arrowIcon = document.getElementById(`b${questionList[i].id}`)
        const isRotated = arrowRotatedStatus.find((arrow)=>{return arrow.arrowId === `b${questionList[i].id}`}).status
        if(isRotated){
            arrowIcon.style.transform = "rotate(0deg)"
        } else{
            arrowIcon.style.transform = "rotate(180deg)"
        }
        arrowRotatedStatus[i].status = !arrowRotatedStatus[i].status
    })
}