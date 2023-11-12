import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader  } from "@react-google-maps/api";
import '../assets/css/index.css';
const center = { lat: 44.22637, lng: 17.66583 };
const containerStyle = {
    width: '100%',
    height: '300px'
};
const zoom = 18;
function EventMap(){
    const { isLoaded } = useJsApiLoader ({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        //const bounds = new window.google.maps.LatLngBounds(center);
        //map.fitBounds(bounds);
        map.setZoom(zoom);
        setMap(map);
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);
    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <div className={"my-3"}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <MarkerF position={{ lat: 44.22637, lng: 17.66583 }} />
                    </GoogleMap>
                </div>
            )}
        </>
    );
}

export default React.memo(EventMap);