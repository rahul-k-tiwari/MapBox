import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import ThreeD from './ThreeD';
import './App.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFodWwwMzQ4IiwiYSI6ImNrcGR2eWw1cjAzaTkyd3FybjdxemE1OW0ifQ.6ltF-2cpIWAvj89L9a__Gw';

const App = () => {
  const mapContainerRef = useRef(null);

//Defining states 
  const [layer, setLayer]= useState('satellite-v9');
  const[threeD, setThreeD] = useState(false);

// initialize map when component mounts-----------------------------------------------------
  useEffect(() => {
    //console.log(mapContainerRef.current,"mappy")
    const map = new mapboxgl.Map({
      container: "map",
      style: `mapbox://styles/mapbox/${layer}`,
      center: [-104.9876, 39.7405],
      zoom: 0,
      });
      
    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
      
    // clean up on unmount
    return () => map.remove();
  }, [layer]);

 //------------------------------------------------------------------------------------------//
  function abc1() {
    setLayer('satellite-v9')
  }
  function abc2() {
   setLayer('light-v10')
  }
  function abc3() {
    setLayer('dark-v10')
  }
  function abc4() {
    setLayer('outdoors-v11')
  }
  function abc5() {
    console.log("It's workigg", threeD);
    setThreeD(!threeD);
    
  }
  console.log("layer=",layer);
//-----------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------//

  return(
    <div>

      {threeD===false?
      (<div id="map" ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />):
      (<ThreeD/>) }
      

      
      <div className="buttons">
        <button onClick= {abc1}> Satellite</button>
        <button onClick= {abc2}> Light</button>
        <button onClick= {abc3}> Dark</button>
        <button onClick= {abc4}> Outdoors</button>
      </div>
      
      <div className="threeD"><button onClick= {abc5}> 3D</button></div>


     
    </div>
  ) ;
};

export default App;