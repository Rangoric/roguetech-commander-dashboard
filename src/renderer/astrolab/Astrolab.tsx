import { useLayoutEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useGetAstrolabQuery } from "../store/BaseApi";
import { Circle, MapContainer, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const circleList: LatLngExpression[] = [
  [21, 21],
  [-21, -21],
  [21, -21],
  [-21, 21],
];

export const Astrolab = () => {
  const { data } = useGetAstrolabQuery();
  return (
    <>
      <div id="map" className={"fixed top-36 bottom-0 left-0 right-0"}>
        <MapContainer
          className={"absolute top-0 bottom-0 left-0 right-0"}
          center={[0, 0]}
          zoom={5}
        >
          {circleList.map((t, i) => (
            <Circle center={t} radius={6} key={i}>
              <Popup>Border Circle</Popup>
            </Circle>
          ))}
          {data?.starSystems.map((t) => (
            <Circle
              key={t.Description.Id}
              center={[t.Position.y / 100, t.Position.x / 100]}
              radius={5000}
            >
              <Popup>
                <div>{t.Description.Name}</div>
              </Popup>
            </Circle>
          ))}
        </MapContainer>
      </div>
    </>
  );
};
