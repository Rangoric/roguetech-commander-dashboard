import { Box, Tab, Tabs } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { ArmouryContainer } from "./armoury/ArmouryContainer";
import { MechalogContainer } from "./mechalog/MechalogContainer";
import { PerformanceContainer } from "./performance/PerformanceContainer";

export const Layout = ({ children }: PropsWithChildren) => {
  const [tab, setTab] = useState<number>(0);
  return (
    <>
      <Box>
        <Tabs value={tab} onChange={(e, n) => setTab(n)}>
          <Tab label={`Performance`} />
          <Tab label={`Mechalog`} />
          <Tab label={`Armoury`} />
        </Tabs>
      </Box>
      {tab === 0 && (
        <Box>
          <PerformanceContainer />
        </Box>
      )}
      {tab === 1 && (
        <Box>
          <MechalogContainer />
        </Box>
      )}
      {tab === 2 && (
        <Box>
          <ArmouryContainer />
        </Box>
      )}
    </>
  );
};
