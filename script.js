const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener("click", () => {
        closeActivePanels()
        panel.classList.add("active")
    })
})

const closeActivePanels  = () =>{
    panels.forEach(panel=>{
        panel.classList.remove("active")
    })
}