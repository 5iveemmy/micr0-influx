import { Layout } from "antd";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
  noHeader?: boolean;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="lg:h-[calc(100vh+44px)] ">
      <Sidebar />
      <MobileHeader />
      <Layout className="lg:ml-80 ">
        <Content className="bg-[#fafafa] px-4 md:pl-6 py-2 md:py-10 md:pr-10 ">
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
