import DashboardLayout from "@/layouts/DashboardLayout";
import { lazy } from "react";

export const dashboardRoutes = [
  {
    path: "/*",
    exact: true,
    Component: lazy(() => import("@/pages/Dashboards")),
    layout: DashboardLayout,
  },
];
