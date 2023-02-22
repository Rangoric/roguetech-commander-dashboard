import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RenderDispatch, RenderState } from "./renderStore";

export const useAppDispatch: () => RenderDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RenderState> = useSelector;
