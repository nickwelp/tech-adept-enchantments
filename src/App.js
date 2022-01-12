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
  const [item, setItem] = useState('Equipment Module');
  const buildSlotLabels = () => {
    return Object.keys(enchantments).map((sl) => {
      return <label key={sl}>{sl}<input type="radio" name='slot' checked={slot===sl} value={sl} onChange={(e)=> { setSlot(e.target.value); setItem('');}} /> | </label>
    })
  };
  const buildItemLabels = () => {
    // if(item) {
      return Object.keys(enchantments[slot]).map((itemElement) => {
        return <label key={itemElement}>{itemElement}<input name='item' checked={item===itemElement}  type="radio" value={itemElement} onChange={(e)=> setItem(e.target.value)}/> | </label>
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
       <p>Tech Adept and Construct Enchantments</p>
      </header>
      <p>This list was derived from data c Novemeber of 2021, and may be out of date. </p>
      <p>This hopefully compliments the wonderful tool https://mome-borogove.github.io/40K-enchant-viewer/ with data for Tech Adepts</p>
      <p>It seems that, for Constructs, Weapon Modules no longer mean anything. I have a couple old ones but one can no longer install them on the Constructs</p>
      <p>The most useful set of information here is found in "constructs" aligned with "Equipment Module"</p>
      <p>Eventually I'll clean up things like, why does the eye_implant slot have "innoculator" for an Item? I don't know why. Just look at the list of Enchantments for Constructs Equipment Modules.</p>
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
