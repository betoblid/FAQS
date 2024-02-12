const containerFAQ = document.querySelectorAll(".none")
const icon = document.querySelectorAll(".img-icon")


function HeandlerFaqDescription(index) {
    
    if(document.getElementById("faq0").classList.contains("none")){
        document.getElementById(`faq${index}`).classList.remove("none")
         icon[index].setAttribute("src", "assest/icon-minus.svg")
         icon[index].setAttribute("src", "assest/icon-minus.svg")
    }else{
        
        document.getElementById(`faq${index}`).classList.add("none")
         icon[index].setAttribute("src", "assest/icon-plus.svg")
    }
   
   
}

