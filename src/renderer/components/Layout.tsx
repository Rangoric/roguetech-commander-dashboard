import React, { ReactNode } from "react";
import { Shortcuts } from "./Shortcuts";
import { Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <div>
      <Shortcuts />
      <Outlet />
    </div>
  );
};
