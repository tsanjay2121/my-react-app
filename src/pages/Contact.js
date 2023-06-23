import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contact(){
  const defaultProps = {
    center: {
      lat: 24.5362,
      lng: 81.3037
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30vh', width: '30%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={24.5362}
          lng={81.3037}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}