import { FC } from "react";
import { IRadialBarMechData } from "./useGenerateRadialBarData";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

interface IMechReportRadialBarsProps {
  data: IRadialBarMechData;
}

export const MechReportRadialBars: FC<IMechReportRadialBarsProps> = ({
  data,
}) => {
  return (
    <div className={"w-96 h-96"}>
      <ResponsiveRadialBar
        data={[data]}
        valueFormat=">-,.0f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        enableCircularGrid={false}
        enableLabels={true}
        colors={{ scheme: "red_blue" }}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 20,
            itemsSpacing: 6,
            itemDirection: "left-to-right",
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#fff",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        layers={["grid", "tracks", "bars", "labels", "legends"]}
      />
    </div>
  );
};
