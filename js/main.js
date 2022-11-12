window.addEventListener('DOMContentLoaded',()=>{
  let products = document.querySelectorAll('.product')
  const buttons = document.querySelectorAll('button')
  const shopCard = document.querySelector('.open')        

  function createCard(){
    let card = document.createElement('div')
    let field = document.createElement('div')
    let heading = document.createElement('h2')
    let closeBtn = document.createElement('button')

    card.classList.add('cart')
    field.classList.add('cart-field')
    closeBtn.classList.add('close')
    heading.textContent = "In our card"
    closeBtn.textContent = 'Close'
    document.body.appendChild(card)
    card.appendChild(heading)
    card.appendChild(field)
    card.appendChild(closeBtn)
  }
  createCard()

  let card =  document.querySelector('.cart')
  let closeBtn = document.querySelector('.close')
  let field = document.querySelector('.cart-field')
  shopCard.addEventListener('click',()=>{
    card.style.display = 'block'
  })
  closeBtn.addEventListener('click',()=>{
    card.style.display = 'none'
  })
  buttons.forEach((item,i)=>{
    item.addEventListener('click',()=>{
      let cloneElement = products[i].cloneNode(true)
      let btn = cloneElement.querySelector('button')

      btn.remove()
      field.appendChild(cloneElement)
      products[i].remove()
    })
  })


})