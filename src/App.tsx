import { ConfigProvider } from "antd";
import { AppRoutes } from "./routes";

const customTheme = {
  token: {
    colorText: "#0D1821",
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
