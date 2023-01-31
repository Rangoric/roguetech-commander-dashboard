import { useEffect } from "react";
import { IAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateAttackLogs } from "../store/messageSlice";

export const WatchForNewAttackLogs = () => {
  const dispatch = useAppDispatch();
  const attackLog = useAppSelector((t) => t.messageSlice.attackLog);
  useEffect(() => {
    (window as any).electronAPI.receivingUpdatedAttackLogs(
      (_event: any, value: IAttackLog) => {
        console.log(value);
        dispatch(updateAttackLogs(value));
      }
    );
  }, []);
  return <></>;
};
