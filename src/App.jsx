import React, { useMemo } from 'react';
import Map from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';

export default function App() {
  const initialView = useMemo(() => ({
    longitude: -98.5795,
    latitude: 39.8283,
    zoom: 3.5,
    pitch: 0,
    bearing: 0,
  }), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map
        reuseMaps
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        initialViewState={initialView}
      />
    </div>
  );
}
