import { useEffect } from "react";
import { IAttackLog } from "../renderer/store/commanderAttackLog/IAttackLog";
import { useRenderDispatch } from "../renderer/store/hooks";
import { updateAttackLogs } from "../renderer/store/messageSlice";
import { getElectronApi } from "./getElectronApi";

export const ReceiveMessages = () => {
  const dispatch = useRenderDispatch();

  const api = getElectronApi();

  useEffect(() => {
    api.receiveMessage(
      "New-Report-Commander",
      (_event: any, value: IAttackLog) => {
        dispatch(updateAttackLogs(value));
      }
    );
  }, []);

  return <></>;
};
