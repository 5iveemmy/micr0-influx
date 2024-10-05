import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
  noHeader?: boolean;
}

const DashboardLayout = ({ children, noHeader }: Props) => {
  return (
    <Layout style={{ height: `calc(100vh + 44px)` }}>
      <Sidebar />

      <Layout className="lg:ml-80 bg-#FAFAFA min-h-full">
        <div
          className={`${
            noHeader ? "hidden" : "flex"
          } justify-end items-center px-10 py-4`}
        >
          <h2>ayoo</h2>
        </div>

        <Content className="p-5 lg:p-20">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
