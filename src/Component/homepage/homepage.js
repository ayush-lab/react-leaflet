import React, {Component,useState} from 'react';
import { MapContainer, TileLayer, Tooltip,Marker, Popup , useMapEvents} from 'react-leaflet';
import  './homepage.css';
import AddMarker from './position';


class Home extends Component {
    
  
    render() {
        const place = [{
            title:"gijore",
            name:"rik",
            position:[41.505,-0.09]
        },{
            title:"sec 53",
            name:"Ayush",
            position:[41.501249547569905,-0.10213851928710939]
        }]
       
      return (
        <MapContainer
        center={{ lat: 41.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
        >

        {place.map((x,index)=>{
            console.log(x);
            return(
            <Marker position={x.position}
            key={x.name}>
                <Tooltip>{x.title}</Tooltip>   
            </Marker>   
            )
        }) }
        <AddMarker/>
         
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
      </MapContainer>
      
      );
    }
  }

export default Home;