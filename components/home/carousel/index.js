import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    img: '/images/RedBoard.jpg',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
    img: '/images/RedCore.jpg',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
    img: '/images/RedLink.jpg',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
    img: '/images/RedSecurity.png',
  },
];

const Carousels = () => {
  return (
    <div>
      <Carousel
        swipe="true"
        sx={{
          margin: '50px 0',
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
