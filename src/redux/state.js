let rerenderEntireTree = () => {
  console.log('state changed')
}




let state = {  // создаем состояние в виде объекта


    myorders:[],
    cart: [],  
    items: [
      {
        id: 1,
        title: 'apple ',
        img: 'apple2.jpeg',
        desc: 'Green apple',
        category: 'fruits',
        price: 0.99
      },
      {
        id: 2,
        title: 'orange',
        img: 'orange612.jpg',
        desc: 'Orange',
        category: 'fruits',
        price: 1.29
      },
      {
        id: 3,
        title: 'lemon ',
        img: 'lemon612.jpg',
        desc: 'Lemon',
        category: 'fruits',
        price: 1.99
      }
    ]
}

window.state = state

export let addProduct = (myid) => {
  let id = 0
  const idOfItems = myid-1
  let item = state.items[idOfItems]
  let product =       {
    id: state.cart.length,
    title: item.title,
    img: item.img,
    price: item.price
  }
  state.cart.push(product)
  rerenderEntireTree(state)
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