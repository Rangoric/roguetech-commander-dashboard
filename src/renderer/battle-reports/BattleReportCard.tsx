import React from "react";
import { Link } from "react-router-dom";

export interface IBattleReportCardProps {
  battleReportId: string;
}

export const BattleReportCard: React.FC<IBattleReportCardProps> = ({
  battleReportId,
}) => {
  const parsed = parse(battleReportId);
  return (
    <Link
      to={`/battle-report/${battleReportId}`}
      className={`btn btn-secondary`}
    >
      Battle Started At: {parsed.dateTime}
    </Link>
  );
};

const parse = (value: string) => {
  const dateTime = value.replace("log_", "").replace(".xlsx", "").split("_");
  dateTime[1] = dateTime[1].replace(/-/gi, ":");
  const dateTimeObject = new Date(dateTime.join(" "));
  return {
    dateTime: dateTimeObject.toLocaleString(),
    value,
  };
};
