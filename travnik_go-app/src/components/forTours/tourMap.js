import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import '../../assets/css/index.css';
const center = { lat: 44.22670871016009, lng: 17.668074153715402 };
const containerStyle = {
    width: '100%',
    height: '400px'
};
const zoom = 18;

function TourMap(){
    const { isLoaded } = useJsApiLoader ({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        //const bounds = new window.google.maps.LatLngBounds(center);
        //map.fitBounds(bounds);
        map.setZoom(zoom);
        setMap(map);
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    const destinations = [
        { lat: 44.22670871016009, lng: 17.668074153715402 },
        { lat: 44.22649181326523, lng: 17.66994549381065 },
        { lat: 44.2268160794797, lng: 17.670860357629206},
        { lat: 44.22982941882988, lng: 17.670753596578134 },
    ]

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
                        {
                            destinations.map((d, index) => (
                                <MarkerF position={d} title={index+1} />
                            ))
                        }

                    </GoogleMap>
                </div>
            )}
        </>
    );
}

export default React.memo(TourMap);