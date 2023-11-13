import React from "react";
import {GoogleMap, MarkerF, StreetViewPanorama, useJsApiLoader} from "@react-google-maps/api";
const center = { lat: 44.22637, lng: 17.66583 };
const containerStyle = {
    width: '100%',
    height: '313px'
};
const zoom = 18;
function HomeMap(){
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
                <div>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <StreetViewPanorama defaultPosition={{ lat: 44.229651341178425, lng: 17.67067931680896 }}>
                            <MarkerF position={{ lat: 44.229651341178425, lng: 17.67067931680896 }} />
                        </StreetViewPanorama>
                    </GoogleMap>
                </div>
            )}
        </>
    );
}

export default React.memo(HomeMap);