import { FC, useMemo } from "react";
import { IAttackLog } from "src/shared/types/IAttackLog";
import { MechReportRadialBars } from "./MechReport.radial.bars";
import { useGenerateRadialBarData } from "./useGenerateRadialBarData";

interface IBattleReportRadialBarsProps {
  data: IAttackLog;
}

export const BattleReportRadialBars: FC<IBattleReportRadialBarsProps> = ({
  data,
}) => {
  const radialBarData = useGenerateRadialBarData(data);
  const renderThis = useMemo(() => {
    return (
      <div className={"flex flex-row flex-wrap"}>
        {radialBarData.mechs.map((mech) => (
          <MechReportRadialBars data={mech} key={mech.name} />
        ))}
      </div>
    );
  }, [radialBarData]);
  return renderThis;
};
