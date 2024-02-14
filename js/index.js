const faqs = document.querySelectorAll(".faq")
const img = document.querySelectorAll(".img-icon")



faqs.forEach((faq, index) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")

        if(img[index].getAttribute("src") === "assest/icon-minus.svg"){
            img[index].setAttribute("src", "assest/icon-plus.svg")
        }else{
            img[index].setAttribute("src", "assest/icon-minus.svg")
        }
        
    })
})