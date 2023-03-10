import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RenderDispatch, RenderState } from "./store";

export const useRenderDispatch: () => RenderDispatch = useDispatch;

export const useRenderSelector: TypedUseSelectorHook<RenderState> = useSelector;
