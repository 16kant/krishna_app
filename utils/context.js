import React from 'react';

export default React.createContext({
  todos: [
    {id: 0, text: 'Eat', complete: false},
    {id: 1, text: 'Sleep', complete: false},
    {id: 2, text: 'Code', complete: false},
    {id: 3, text: 'Repeat', complete: true},
    {id: 4, text: 'Eat', complete: false},
    {id: 5, text: 'Sleep', complete: false},
    {id: 6, text: 'Code', complete: false},
    {id: 7, text: 'Repeat', complete: true}
  ]
});
