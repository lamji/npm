# ADD TO CART Mini-app

![My Image](mini-app-shoppingcart.png)

## Changelogs

```sh
- v1.0.1 - Patch Release (Read me image)
- v1.0.0 - initial release
```

## Installation

```sh
npm i serino-shopping-cart
```

## react 18 higher
```sh
npm i serino-shopping-cart --legacy-peer-deps
```

## Usage
```sh

import {Cart } from "serino-shopping-cart"
const dataLoad = {
  data:[
    {
      id: 1,
      title: "Product 1",
      description: "Best headphone",
      price: 120.00,
      quantity: 3,
      dateAdded: "Fri Oct 28 2022 12:33:52 GMT+0800 (Philippine Standard Time)",
      image: "https://i.pinimg.com/originals/0d/86/b1/0d86b14bb6503907498ebff62062ae12.png"
  },
  {
      id: 2,
      dateAdded: "Fri Oct 28 2022 12:33:01 GMT+0800 (Philippine Standard Time)",
      title: "Product 2",
      description: "Best headphone 2",
      price: 100.00,
      quantity: 1,
      image: "https://www.nicepng.com/png/detail/151-1512944_red-headphone-png-image-background-beats-by-dr.png"
  }
  ]
}
const dataIn = {
    action:{
      shoplink: () => alert("go to shop"),
      decreaseQty: (i:any) => alert(`decrease quantity of item with the id of ${i}` ),
      increaseQty: (i:any) => alert(`increase quantity of item with the id of ${i}` ),
      removeItems: (i:any) => alert(`remove this item with the id of ${i}`)
    }
}
function App() {
  return (
    <div className="">
      <Cart dataLoad={dataLoad} dataIn={dataIn} data={(i) => console.log(i)}/>
    </div>
  );
}

export default App;

```
## Props

| Props  | Types| Default Value  | Required  | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- | 
| dataOut  | Function  |  None | True  | Dataout will handle the next action after clicking checkout |
| dataIn  | Object | None  | True  | Object with action object that will handle shoplink, decreaseQty, increaseQty, removeItems |
| shoplink | Function | None | True | This will handle to go back to shop |
| decreaseQty | Function | None | True | This will handle the minus button in a cart, use this to update the quantity of the item in state |
| increaseQty | Function | None | True | This will handle the plus button in a cart, use this to update the quantity of the item in state |
| removeItems | Function | None | True | This will handle the remove item in a cart, use this to to remove item from a cart using redux |
| dataLoad | Array of object | None | True | Initial data of a cart |


## Node Version

```sh
v16.15.0
```

## Peer Dependecies

```sh
"react": "^17.0.2",
"react-dom": "^17.0.2"
```
