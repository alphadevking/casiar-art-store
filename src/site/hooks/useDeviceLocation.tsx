import { useState, useEffect } from 'react';

export type Location = {
    city?: string;
    state?: string;
    country?: string;
};

export type Position = {
    coords: {
        latitude: number;
        longitude: number;
    };
};

export type PositionError = {
    message: string;
};

type DeviceLocation = [Location, string];

function useDeviceLocation(watch?: boolean): DeviceLocation {
    const [location, setLocation] = useState<Location>({
        city: '',
        state: '',
        country: '',
    });
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const successCallback = (currentPos: Position) => {
            fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${currentPos.coords.latitude}&lon=${currentPos.coords.longitude}`
            )
                .then((response) => response.json())
                .then((data) => {
                    setLocation({
                        city: data.address.city || data.address.town || data.address.village || '',
                        state: data.address.state || '',
                        country: data.address.country || '',
                    });
                })
                .catch(() => {
                    setError('Error fetching location data.');
                });
        };

        const errorCallback = (errorMsg: PositionError) => {
            setError(errorMsg.message);
        };

        if (navigator.geolocation) {
            if (watch) {
                const watcher = navigator.geolocation.watchPosition(successCallback, errorCallback);
                return () => navigator.geolocation.clearWatch(watcher);
            } else {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            }
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, [watch]);

    return [location, error];
}

export default useDeviceLocation;
