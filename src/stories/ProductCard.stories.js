import React from 'react';
import { storiesOf } from '@storybook/react';
import  { ProductCard }  from '../components/ProductCard';

const stories = storiesOf('UIKIT/ProductCard', module);

stories.add('Product Card', ({...props}) => {

  return (
    <div className='wrapper-card' {...props}>
      <ProductCard
        title= 'John Mayer PRS Silver Sky SE Dragon fruit Made in Indonesia'
        img= 'https://picsum.photos/200/200'
      />

      <ProductCard
        size= 'small'
        title= 'John Mayer PRS Silver Sky SE Dragon fruit Made in Indonesia'
        img= 'https://picsum.photos/200/200'
      />
    </div>
  );
});


