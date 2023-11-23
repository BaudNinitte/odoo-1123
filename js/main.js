
//Get buttons in accordion
const buttonAccordion = document.querySelectorAll(".accordion button");

for (let i = 0; i < buttonAccordion.length; i++) {
    buttonAccordion[i].addEventListener("click",function(){

        // Reset all buttons with +
        const buttonCollection = document.querySelectorAll(".accordion button");
        for (let i = 0; i < buttonCollection.length; i++) {
            const iconAccordion = buttonAccordion[i].querySelector(".iconAccordion");
            iconAccordion.innerHTML = iconAccordion.innerHTML = "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>";

        }
        // get attribute on svg
        const isOpen = buttonAccordion[i].getAttribute("aria-expanded");
        // get svg icon
        const iconAccordion = buttonAccordion[i].querySelector(".iconAccordion");
        
        // Display - if accordion is open
        if (isOpen === "false"){         
            iconAccordion.innerHTML = "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>";
        
           // Display + if accordion is close
        }else{
            iconAccordion.innerHTML = "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>";
        }
    })

}

