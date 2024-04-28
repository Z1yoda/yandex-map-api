import "./App.css";
import {
  YMaps,
  Map,
  GeolocationControl,
  FullscreenControl,
  RouteButton,
  RouteEditor,
  RulerControl,
  TrafficControl,
  SearchControl,
  ZoomControl,
  TypeSelector,
} from "@pbe/react-yandex-maps";

function App() {

  return (
    <div className="map-container">
      <YMaps query={{ apikey: "949d2a1a-b458-48e9-b14a-8f0cf25ddc44" }}>
        <Map
          height={'100%'}
          width={'100%'}
          defaultState={{
            center: [55.75, 37.57],
            zoom: 10,
            controls: [],
          }}
        >
          <GeolocationControl options={{ float: "left" }} />
          <FullscreenControl options={{ float: "left" }} />
          <RouteButton options={{ float: "right" }} />
          <RouteEditor options={{ float: "right" }} />
          <RulerControl />
          <SearchControl options={{ float: "right" }} />
          <ZoomControl  />
          <TypeSelector  />
          <TrafficControl  />
        </Map>
      </YMaps>
      </div>
  );
}

export default App;
