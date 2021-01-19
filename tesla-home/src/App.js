import './App.css';
import Header from './components/Header'
import Item from './components/Item'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_itemcontainer'>
        <Item 
          title='Bringing Lowest Cost Solar Panels in India'
          desc=''
          desclink=''
          backgroundImg={SolarPanels}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />
        <Item 
          title='Model S'
          desc='Money-back guarantee'
          desclink=''
          backgroundImg={ModelS}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />
        <Item 
          title='Model 3'
          desc='Money-back guarantee'
          desclink=''
          backgroundImg={Model3}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />
        <Item 
          title='Model X'
          desc='Money-back guarantee'
          desclink=''
          backgroundImg={ModelX}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />
        <Item 
          title='Model Y'
          desc='Money-back guarantee'
          desclink=''
          backgroundImg={ModelY}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />
        <Item 
          title='Solar for New Roofs'
          desc='Money-back guarantee'
          desclink=''
          backgroundImg={SolarRoof}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />
         <Item 
          title='Accessories'
          desc='Money-back guarantee'
          desclink=''
          backgroundImg={Accessories}
          leftbtntxt='BOOK NOW'
          leftbtnlinks=''
          rightbtntxt='LEARN MORE'
          rightbtnlinks=''
          twobuttons='true'
          first
        />

          

      </div>
    </div>
  );
}

export default App;
