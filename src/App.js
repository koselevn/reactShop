import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'stul.webp',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'chairs',
          prise: '109.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'stol.jpg',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'tables',
          prise: '149.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'divan.jpg',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'sofa',
          prise: '2209.89'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lampa.webp',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'light',
          prise: '69.99'
        },
        {
          id: 5,
          title: 'Лампа',
          img: 'lampa2.webp',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'light',
          prise: '105.99'
        },
        {
          id: 6,
          title: 'Диван',
          img: 'divan2.webp',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'sofa',
          prise: '2299.89'
        },
        {
          id: 7,
          title: 'Стол',
          img: 'stol2.webp',
          desc: 'Описание товара, тут будет описание товара который вы выбрали, так же разные характеристики данного товара',
          category: 'tables',
          prise: '459.99'
        }
      ],
      show: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.show && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({show: !this.state.show})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: [...this.state.orders.filter(el => el.id !== id)] })
  }

  addToOrder(item) {
    let isInArr = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
         isInArr = true
    })
    if (!isInArr) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;
