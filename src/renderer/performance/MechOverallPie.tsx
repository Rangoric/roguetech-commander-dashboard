import { ResponsivePie } from "@nivo/pie";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { PieContainer } from "./PieContainer";

export interface IMechOverallPieProps {
  mechName: string;
  data: any;
}

export const MechOverallPie = ({ data, mechName }: IMechOverallPieProps) => {
  return (
    <PieContainer>
      <ResponsiveRadialBar
        data={data}
        valueFormat=">-,.0f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        enableCircularGrid={false}
        enableLabels={true}
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
            itemTextColor: "#999",
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
        layers={[
          "grid",
          "tracks",
          "bars",
          "labels",
          "legends",
          PieCaption(mechName),
        ]}
      />
    </PieContainer>
  );
};
const PieCaption =
  (caption: string) =>
  ({ center: [x, y] }: any) => {
    return (
      <text
        x={x}
        y={y - 14}
        textAnchor={"end"}
        fontSize={14}
        fontWeight={`800`}
      >
        {caption}
      </text>
    );
  };
