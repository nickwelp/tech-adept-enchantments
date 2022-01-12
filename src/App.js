import React, { useState } from 'react';
import './App.css';

import enchantments from './enchantments';
// {
//   'weapon': {
//      'Plasma Caliver': ['enchantments by description']
//    }
// }
console.log(enchantments)
function App() {
  const [slot, setSlot] = useState('construct');
  const [item, setItem] = useState();
  const buildSlotLabels = () => {
    return Object.keys(enchantments).map((slot) => {
      return <label key={slot}>{slot}<input type="radio" name='slot' value={slot} onChange={(e)=> { setSlot(e.target.value); setItem('');}} /> | </label>
    })
  };
  const buildItemLabels = () => {
    // if(item) {
      return Object.keys(enchantments[slot]).map((item) => {
        return <label key={item}>{item}<input name='item' type="radio" value={item} onChange={(e)=> setItem(e.target.value)}/> | </label>
      });
    // }
    // return null;
  };
  const showEnchantments = () => {
    console.log(`show enchantments ${slot} ${item}`)
    if(item) {
      return enchantments[slot][item].map((desc) => {
        return <li key={desc} dangerouslySetInnerHTML={{__html: desc}}></li>;
      });
    }
    return null;
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          This data was derived circa November 2021 and may be dated. This hopefully compliments the wonderful tool https://mome-borogove.github.io/40K-enchant-viewer/ with data for Tech Adepts  
        </p>
      </header>
      <p><strong>Pick a Slot</strong></p>
      {buildSlotLabels()}
      <p><strong>Pick an Item</strong></p>
      {buildItemLabels()}
      <ul>
        {showEnchantments()}
      </ul>

    </div>
  );
}

export default App;
