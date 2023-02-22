import { useEffect } from "react";
import { IAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { useAppDispatch, useAppSelector } from "../store/renderHooks";
import { updateAttackLogs } from "../store/messageSlice";

export const WatchForNewAttackLogs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (window as any).electronAPI.receivingUpdatedAttackLogs(
      (_event: any, value: IAttackLog) => {
        dispatch(updateAttackLogs(value));
      }
    );
  }, []);
  return <></>;
};
