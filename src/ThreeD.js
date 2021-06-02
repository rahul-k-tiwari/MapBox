import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';


function ThreeD(tiger) {
const mapContainer = useRef();
  useEffect(() => {
   
    const map = new mapboxgl.Map({
      container: "map" ,
      style:"mapbox://styles/mapbox/satellite-v9",
      center: [-119.99959421984575, 38.619551620333496],
      zoom: 0,
      pitch: 60,
    })
    //to display the zoom +- and navigation buttons
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    //to display  3D map----------------------------------------------------------------------------//
    map.on("load", () => {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxZoom: 16,
      })
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 })
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 90.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      })
    })
  }, [])
  //-------------------------------------------------------------------------------------------------------//
    return (
        <div>
           {/* <p>hello </p> */}
           <div id="map" ref={mapContainer} style={{ width: "100%", height: "100vh" }}/> 
        </div>
    )
}

export default ThreeD
