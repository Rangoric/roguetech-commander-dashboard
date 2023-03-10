import { useRenderSelector } from "../store/hooks";
import { RadialBarDisplay } from "./RadialBarDisplay";

export const PerformanceContainer = () => {
  const mechs = useRenderSelector((t) => t.messageSlice.attackLog.mechs);
  return <RadialBarDisplay mechs={mechs} />;
};
