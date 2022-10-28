import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Cart  from '../components/Cart/Cart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Addtocart/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Cartsample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cartsample.args = {
  dataOut: (i: any) => console.log("dataOut", i),
  dataLoad: {
    data:[
      {
        id: 1,
        dataAdded: "Fri Oct 28 2022 12:33:52 GMT+0800 (Philippine Standard Time)",
        title: "Product 1",
        description: "Best headphone",
        price: 120.00,
        quantity: 3,
        image: "https://i.pinimg.com/originals/0d/86/b1/0d86b14bb6503907498ebff62062ae12.png"
    },
    {
        id: 2,
        title: "Product 2",
        description: "Best headphone 2",
        price: 100.00,
        dateAdded: "Fri Oct 28 2022 12:33:01 GMT+0800 (Philippine Standard Time)",
        quantity: 1,
        image: "https://www.nicepng.com/png/detail/151-1512944_red-headphone-png-image-background-beats-by-dr.png"
    }
    ],
  },
  dataIn: {
    action:{
      shoplink: () => alert("go to shop"),
      decreaseQty: (i:any) => alert(`decrease quantity of item with the id of ${i}` ),
      increaseQty: (i:any) => alert(`increase quantity of item with the id of ${i}` ),
      removeItems: (i:any) => alert(`remove this item with the id of ${i}`)
    }
  }
};
