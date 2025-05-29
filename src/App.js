import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Items from "./components/Items"


class App extends React.Component {
  constructor (props){  //создаем конструктор который принимает один параметр это props (св-ва или переменные)
    super(props)   // передаем эти props в родительский класс
    this.state = {         // создаем состояние в виде объекта

        orders: [],      
        items: [
          {
            id: 1,
            title: 'apple',
            img: 'apple.jpeg',
            desc: 'Green apple',
            category: 'fruits',
            price: '0.99'
          },
          {
            id: 2,
            title: 'orange',
            img: 'orange.jpg',
            desc: 'Orange',
            category: 'fruits',
            price: '1.29'
          },
          {
            id: 3,
            title: 'lemon',
            img: 'lemon.jpg',
            desc: 'Lemon',
            category: 'fruits',
            price: '1.99'
          }
        ]
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
}


  render() {
  return (
    <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
    </div>
  );
}

deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item) {
   this.setState({orders: [...this.state.orders, item]}   // для тестирования добавления товара в массив при клике на кнопку, () => {console.log(this.state.orders)}
  )
}
}

export default App
