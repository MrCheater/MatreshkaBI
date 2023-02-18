import React, { useEffect, useRef, useState } from "react";
import {
  YMaps,
  Map,
  Circle,
  Placemark,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function YMap({ items }) {
  const map = useRef(null);
  const circle = useRef(null);
  const [ymaps, setYmaps] = useState(null);
  const [objects, setObjects] = useState([]);
  const [radioValue, setRadioValue] = useState("organizers")

  function getContent(item){
    //console.log(item.coordinates)
    switch(radioValue) {
      case 'organizers':
        return item.organizers
      case 'volunteers':
        return item.volunteers
      case 'events':
        return item.events
      case 'vacancies':
        return item.vacancies 
      case 'projects':
        return item.projects       
      case 'university':
        return item.university  
    }
    return 10;
  }

  function getColor(){
    switch(radioValue) {
      case 'organizers':
        return 'pink'
      case 'volunteers':
        return 'yellow'
      case 'events':
        return 'blue'
      case 'vacancies':
        return 'red'
      case 'projects':
        return 'brown'      
      case 'university':
        return 'orange'
  }
}

  function getCenter(){
    if (items.length == 1){
      return items[0].coordinates
    }else{
      return [66.4167, 94.2500]
    }
  }

  function getZoom(){
    if (items.length == 1){
      return 8
    }else{
      return 2
    }
  }

  function radioChange(value){
    setRadioValue(value.target.value)
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={radioValue}
        onChange={radioChange}
      >
        <FormControlLabel value="organizers" control={<Radio />} label="Организаторы" />
        <FormControlLabel value="volunteers" control={<Radio />} label="Волонтёры" />
        <FormControlLabel value="events" control={<Radio />} label="Мероприятия" />
        <FormControlLabel value="vacancies" control={<Radio />} label="Вакансии" />
        <FormControlLabel value="projects" control={<Radio />} label="Проекты" />
        <FormControlLabel value="university" control={<Radio />} label="Количество обученных в Добро.Университете" />
      </RadioGroup>
    </FormControl>
      <YMaps>
        <Map
          width="100%"
          height="300px"
          instanceRef={map}
          modules={["geoQuery"]}
          state={{
            center: getCenter(),
            zoom: getZoom(),
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
                  iconColor: getColor(), // цвет иконки, можно также задавать в hex
                }}
                properties={{
                  iconContent: getContent(item), // пару символов помещается
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
