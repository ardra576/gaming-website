const cards=document.querySelectorAll(".game-card");
cards.forEach(card=>{
    card.addEventListener("click",()=>{
        cards.forEach(item=>{
            item.classList.remove("active");
        });
        card.classList.add("active");
    });

});