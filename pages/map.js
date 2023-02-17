import React, { useEffect, useRef, useState } from "react";
import { YMaps, Map, Circle, Placemark, ZoomControl,GeolocationControl } from "react-yandex-maps";

const POINTS = [
  {
    type: "Point",
    iconContent: 10,
    coordinates: [55.56, 37.75]
  },
  {
    type: "Point",
    iconContent:3,
    coordinates: [55.75, 37.75]
  },
  {
    type: "Point",
    iconContent: 2,
    coordinates: [55.1, 37.45]
  },
  {
    type: "Point",
    iconContent: 100,
    coordinates: [55.25, 37.35]
  }
];

export default function YMap() {
  const map = useRef(null);
  const circle = useRef(null);
  const [ymaps, setYmaps] = useState(null);
  const [objects, setObjects] = useState([]);


  return (
    <div style={{width:'100%', height:'100%', position:'relative'}}>
      <YMaps>
        <Map
           width='100%' height='300px'
          instanceRef={map}
          modules={["geoQuery"]}
          state={{
            center: [55.43, 37.75],
            zoom: 8
          }}
          onLoad={(ymapsInstance) => {
            setYmaps(ymapsInstance);
          }}
          options={{ searchControlProvider: "yandex#search" }}
        >
            {
                 POINTS.map(item => {
                    return (
                        <Placemark geometry={ item.coordinates }
                        options={
                          {
                            preset: 'islands#yellowStretchyIcon', // список темплейтов на сайте яндекса
                            iconColor: 'pink', // цвет иконки, можно также задавать в hex
                          } }
                        properties={
                          {
                          iconContent: item.iconContent, // пару символов помещается
                        }}></Placemark>	
                    );
                  })
            }
            <ZoomControl />
            <GeolocationControl options={{ visible: false }} />
        </Map>
      </YMaps>
    </div>
  );
} 