const $success = document.querySelector('#success')
const $signup = document.querySelector('#signup')
const $form = document.querySelector('form')
const $dismiss = document.querySelector('#dismiss')
const $span = document.createElement("span");


$form.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());

  if (!dataObject.email) {
    e.target.firstElementChild.appendChild($span)
    $span.innerHTML = `<span class="text-red-600">Valid email required</span>`
    return
  } else {
    data.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      console.log($success)
      let element = document.createElement("p");
      element.classList.add("text-xs");
      element.innerHTML = ` A confirmation email has been sent to <span class="font-bold">${value}</span>
      Please open it and click the button inside to confirm your subscription.`
      $dismiss.parentElement.firstElementChild.append(element)
    });
  }

  $signup.classList.add('hidden')
  $success.classList.remove('absolute')
  $success.classList.remove('invisible')



  /*   if(e.value){
        console.log("no es coreccto")
    } */
})

$dismiss.addEventListener('click', () => {
  /*   window.location.href = "/" */
  console.log('click')
  window.location.reload()
})