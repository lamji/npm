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
  label: 'Button',
  dataIn: {
    data:[
      {
        id: 1,
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
        quantity: 1,
        image: "https://www.nicepng.com/png/detail/151-1512944_red-headphone-png-image-background-beats-by-dr.png"
    }
    ]
  }
};
