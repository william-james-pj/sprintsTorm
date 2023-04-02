import {
  getCurrentPositionAsync,
  LocationAccuracy,
  LocationObject,
  LocationSubscription,
  requestForegroundPermissionsAsync,
  watchPositionAsync
} from 'expo-location'
import { useEffect, useRef, useState } from 'react'
import MapView, { LatLng, Marker, Polyline } from 'react-native-maps'
import { useTheme } from 'styled-components'

import { haversine } from 'src/utils/haversine'

import * as S from './styles'

type TrackingMapProps = {
  setNewDistance: (newDistance: number) => void
  setWatcher: (newWatcher: LocationSubscription) => void
}

export function TrackingMap({ setNewDistance, setWatcher }: TrackingMapProps) {
  const [oldLocation, setOldLocation] = useState<LocationObject | null>(null)
  const [location, setLocation] = useState<LocationObject | null>(null)
  const [routeCoordinates, setRouteCoordinates] = useState<LatLng[]>([])
  const mapRef = useRef<MapView>(null)
  const theme = useTheme()

  function calcDistance() {
    const pointA: Coordinates = {
      latitude: oldLocation?.coords.latitude ?? 0,
      longitude: oldLocation?.coords.longitude ?? 0
    }
    const pointB: Coordinates = {
      latitude: location?.coords.latitude ?? 0,
      longitude: location?.coords.longitude ?? 0
    }
    const dist = haversine(pointA, pointB)
    setNewDistance(dist)
  }

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentLocation = await getCurrentPositionAsync()
      setLocation(currentLocation)
    }
  }

  useEffect(() => {
    ;(async () => {
      await requestLocationPermissions()
    })()
  }, [])

  useEffect(() => {
    console.log('Caiu')
    calcDistance()
    setOldLocation(location)
  }, [location])

  useEffect(() => {
    ;(() => {
      watchPositionAsync(
        {
          accuracy: LocationAccuracy.Highest,
          timeInterval: 1000,
          distanceInterval: 1
        },
        (response) => {
          setLocation(response)
          setRouteCoordinates((oldArray) => [
            ...oldArray,
            { latitude: response.coords.latitude, longitude: response.coords.longitude }
          ])
          mapRef.current?.animateCamera({
            center: response.coords
          })
        }
      ).then((locationWatcher) => {
        setWatcher(locationWatcher)
      })
    })()
  }, [])

  return (
    <S.ViewWrapper>
      {location && (
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002
          }}
          pitchEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          rotateEnabled={false}
        >
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={5}
            fillColor={theme.colors.primary}
          />
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}
          />
        </MapView>
      )}
    </S.ViewWrapper>
  )
}
