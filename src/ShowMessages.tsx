import { useEffect } from "react";
import { IAttackLog } from "./store/commanderAttackLog/IAttackLog";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateAttackLogs } from "./store/messageSlice";

export const ShowMessages = () => {
  const dispatch = useAppDispatch();
  const attackLog = useAppSelector((t) => t.messageSlice.attackLog);
  useEffect(() => {
    (window as any).electronAPI.receivingUpdatedAttackLogs(
      (_event: any, value: IAttackLog) => {
        dispatch(updateAttackLogs(value));
      }
    );
  }, []);
  return <>{JSON.stringify(attackLog)}</>;
};