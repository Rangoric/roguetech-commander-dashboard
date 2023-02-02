import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAttackLog } from "./commanderAttackLog/IAttackLog";

interface IAttackLogSliceState {
  attackLog: IAttackLog;
}

const initialState: IAttackLogSliceState = {
  attackLog: { mechs: {} },
};

export const attackLogsSlice = createSlice({
  name: "attackLogSlice",
  initialState,
  reducers: {
    updateAttackLogs: (state, action: PayloadAction<IAttackLog>) => {
      state.attackLog = action.payload;
    },
  },
});

export const { updateAttackLogs } = attackLogsSlice.actions;
