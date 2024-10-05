import { Layout } from "antd";
import Sidebar from "./Sidebar";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
  noHeader?: boolean;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <Layout className="lg:h-[calc(100vh+44px)]">
      <Sidebar />

      <Layout className="lg:ml-80 bg-#FAFAFA min-h-full">
        <Content className="px-4 md:pl-6 py-10 md:pr-10 ">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
