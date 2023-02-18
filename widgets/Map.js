import React, { useEffect, useRef, useState } from "react";
import {
  YMaps,
  Map,
  Circle,
  Placemark,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";

export default function YMap({ items }) {
  const map = useRef(null);
  const circle = useRef(null);
  const [ymaps, setYmaps] = useState(null);
  const [objects, setObjects] = useState([]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <YMaps>
        <Map
          width="100%"
          height="300px"
          instanceRef={map}
          modules={["geoQuery"]}
          state={{
            center: [55.43, 37.75],
            zoom: 8,
          }}
          onLoad={(ymapsInstance) => {
            setYmaps(ymapsInstance);
          }}
          options={{ searchControlProvider: "yandex#search" }}
        >
          {items.map((item, index) => {
            return (
              <Placemark
                key={index}
                geometry={item.coordinates}
                options={{
                  preset: "islands#yellowStretchyIcon", // список темплейтов на сайте яндекса
                  iconColor: "pink", // цвет иконки, можно также задавать в hex
                }}
                properties={{
                  iconContent: item.iconContent, // пару символов помещается
                }}
              ></Placemark>
            );
          })}
          <ZoomControl />
          <GeolocationControl options={{ visible: false }} />
        </Map>
      </YMaps>
    </div>
  );
}
