import { useAppSelector } from "../store/hooks";
import { MechsDisplay } from "./MechsDisplay";

export const MechsDisplayContainer = () => {
  const mechs = useAppSelector((t) => t.messageSlice.attackLog.mechs);
  return <MechsDisplay mechs={mechs} />;
};
