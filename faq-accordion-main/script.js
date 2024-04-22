tailwind.config = {
  theme: {
    extend: {
      colors: {
        light_pink: 'hsl(275, 100%, 97%)',
        grayish_purple: 'hsl(292, 16%, 49%)',
        darkpurple: 'hsl(292, 42%, 14%)',
        white: 'hsl(0, 0%, 100%)'
      }
    }
  }
}


const $details = document.querySelectorAll("details")
/* const $icono= document.querySelector()
console.log($details) */

$details.forEach(detail => {
  /*   console.log(detail.hasAttribute("open"))
    if (detail.hasAttribute("open")) {
      // detail.removeAttribute('open')
        // console.log(detail.firstElementChild.childNodes[3]) 
      detail.firstElementChild.childNodes[3].setAttribute("src", "./assets/images/icon-minus.svg");
    } */

  detail.addEventListener("click", () => {
    console.log(detail.hasAttribute("open"))
    if (!detail.hasAttribute("open")) {
      // detail.removeAttribute('open')

      detail.firstElementChild.childNodes[3].setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      // detail.removeAttribute('open')
      /*      console.log(detail.firstElementChild.childNodes[3]) */
      detail.firstElementChild.childNodes[3].setAttribute("src", "./assets/images/icon-plus.svg");

    }

    detail.toggleAttribute("disabled");
  })
})