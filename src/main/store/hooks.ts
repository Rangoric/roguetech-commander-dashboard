import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { MainDispatch, MainState } from "./store";

export const useMainDispatch: () => MainDispatch = useDispatch;

export const useMainSelector: TypedUseSelectorHook<MainState> = useSelector;
