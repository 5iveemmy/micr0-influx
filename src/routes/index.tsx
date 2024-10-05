import { Fragment } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { dashboardRoutes } from "./routes";

type RouteProps = {
  Component: React.ElementType;
  path: string;
  isAuthenticated?: boolean;
  layout?: React.ElementType;
};

const renderRoute = ({ Component, ...route }: RouteProps) => {
  const Layout = (route.layout ? route.layout : Fragment) as React.ElementType;

  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
    />
  );
};

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>{dashboardRoutes.map((route) => renderRoute(route))}</Routes>
    </Router>
  );
};
