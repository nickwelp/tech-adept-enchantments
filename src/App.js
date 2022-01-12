import React, { useState } from 'react';
import './App.css';

import enchantments from './enchantments';
// {
// 'relic': {
//   'weapon': {
//      'Plasma Caliver': ['enchantments by description']
//    }
//  }
// }
console.log(enchantments)
function App() {
  const [slot, setSlot] = useState('construct');
  const [item, setItem] = useState('Equipment Module');
  // const buildSlotLabels = () => {
  //   return Object.keys(enchantments).map((sl) => {
  //     return <label key={sl}>{sl}<input type="radio" name='slot' checked={slot===sl} value={sl} onChange={(e)=> { setSlot(e.target.value); setItem('');}} /> | </label>
  //   })
  // };
  // const buildItemLabels = () => {
  //   // if(item) {
  //     return Object.keys(enchantments[slot]).map((itemElement) => {
  //       return <label key={itemElement}>{itemElement}<input name='item' checked={item===itemElement}  type="radio" value={itemElement} onChange={(e)=> setItem(e.target.value)}/> | </label>
  //     });
  //   // }
  //   // return null;
  // };
  const showEnchantments = (quality) => {
    console.log(`show enchantments ${slot} ${item}`)
    if(item) {
      return enchantments[slot][quality][item].map((desc) => {
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
      <p>These are the possible enchantments an Equipment Module can have. AFAIK only relic gear can have a Relic Enchantment, and only one is possible. Very rarely I've seen two relic enchantments on a weapon but not Equipment Module. The max number of enchantments is 4.</p>
      <p><strong>Relics:</strong></p>
      <ul>
        {showEnchantments('relic')}
      </ul>
      <p><strong>Primary:</strong></p>
      <ul>
        {showEnchantments('primary')}
      </ul>


    </div>
  );
}

export default App;
