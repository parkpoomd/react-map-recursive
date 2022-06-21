import React from 'react';
import { Link } from 'react-router-dom';
import { mapRecursive } from '../utils/mapRecursive';

const treeMenu = [
  { id: 1, text: 'Text 1', open: false },
  {
    id: 2,
    text: 'Text 2',
    open: false,
    children: [
      { id: 5, text: 'Text 5', open: false },
      {
        id: 6,
        text: 'Text 6',
        open: false,
        children: [
          { id: 8, text: 'Text 8', open: false },
          { id: 9, text: 'Text 9', open: false },
        ],
      },
      { id: 7, text: 'Text 7', open: false },
    ],
  },
  {
    id: 3,
    text: 'Text 3',
    open: false,
    children: [{ id: 11, text: 'Text 11', open: false }],
  },
  { id: 4, text: 'Text 4', open: false },
];

function Example2() {
  /**
   * Case 1:
   *
   * Using map recursive for doubling the numbers of an array.
   */
  const numbers = [2, 4, 6, 8, 10];

  //Using mapRecursive
  const doubledNumbers = mapRecursive(numbers, (number) => number * 2);
  console.log('original', numbers); //[2, 4, 6, 8, 10]
  console.log('mapped', doubledNumbers); //[4, 8, 12, 16, 20]

  /**
   * Case 2:
   *
   * Set all the open properties to true
   */
  console.log('original', treeMenu);
  console.log(
    'mapped',
    mapRecursive(treeMenu, (menu) => {
      return { ...menu, open: true };
    })
  );

  /**
   * Case 3:
   *
   * Set open to true only for the item with id 9
   */
  console.log('original', treeMenu);
  console.log(
    'mapped',
    mapRecursive(treeMenu, (menu) => {
      if (menu.id === 9) {
        return { ...menu, text: 'Text 9 affected', open: true };
      }

      return menu;
    })
  );

  return (
    <div>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Example2;
