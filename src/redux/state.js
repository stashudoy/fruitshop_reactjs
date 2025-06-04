let rerenderEntireTree = () => {
  console.log('state changed')
}




let state = {  // создаем состояние в виде объекта


    myorders:[],
    cart: [],  
    items: [
      {
        id: 1,
        title: 'apple',
        img: 'apple.jpeg',
        desc: 'Green apple',
        category: 'fruits',
        price: 0.99
      },
      {
        id: 2,
        title: 'orange',
        img: 'orange.jpg',
        desc: 'Orange',
        category: 'fruits',
        price: 1.29
      },
      {
        id: 3,
        title: 'lemon',
        img: 'lemon.jpg',
        desc: 'Lemon',
        category: 'fruits',
        price: 1.99
      }
    ]
}

window.state = state

export let addProduct = () => {
  let id = 0
  let product =       {
    id: state.cart.length,
    title: 'lemon',
    img: 'lemon.jpg',
    price: 1.99
  }
  state.cart.push(product)

}

export let dellProduct = (id) => {
  console.log("dellProduct")
  console.log(id)
  // state.cart = state.cart.filter(id => state.cart.id === id)
  const idToDelete = id
  const index = state.cart.findIndex(i => i.id === idToDelete)
  if(index !== -1 ) {
    state.cart.splice(index, 1)
  }
  rerenderEntireTree(state)
}

 export const subscribe =(observer) =>  {
    rerenderEntireTree = observer
  }

export default state