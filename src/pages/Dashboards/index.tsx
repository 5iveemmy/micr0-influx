import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CustomImage from "@/components/CustomImage";

interface StatBoxProps {
  header: string;
  value: string;
}

const StatBox = ({ header, value }: StatBoxProps) => (
  <div className="flex flex-col">
    <p className="text-sm font-light" style={{ fontFamily: "SF Pro Display" }}>
      {header}
    </p>
    <p className="font-medium text-2xl">${value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-[#053559]">Dashboard</h2>

        <div className="flex gap-6 items-center justify-center font">
          <Button
            style={{
              backgroundColor: "#053559",
              color: "white",
              padding: "20px",
              height: "46px",
            }}
            icon={<PlusOutlined />}
          >
            Create a New Campaign
          </Button>
          <CustomImage src="/messageNotif.svg" />
          <CustomImage src="/bellNotif.svg" />
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="bg-[#053559] min-w-[693px] text-white py-4 px-6 rounded-2xl"
          style={{
            backgroundImage: 'url("/spirals.png")',
            backgroundBlendMode: "color-dodge",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between border-b-[0.5px] border-white pb-2">
            <h2
              className="text-xl font-medium font-[SF Pro Display]"
              style={{ fontFamily: "SF Pro Display" }}
            >
              Financial Overview
            </h2>
            <div>
              <p
                className="font-light"
                style={{ fontFamily: "SF Pro Display" }}
              >
                View all campaigns
              </p>
            </div>
          </div>
          <div className="flex gap-14 mt-10">
            <StatBox header="Total Income" value={"62,932"} />
            <StatBox header="Fund In Escrow" value={"62,231"} />
            <StatBox header="Ave. Income Monthly" value={"3,542"} />
          </div>
          <div className="mt-10">
            <div className="flex gap-4">
              <p className="font-bold">January Summary:</p>
              <div className="flex gap-2 items-center">
                <p className="">Total Fund In Escrow</p>
                <div className="h-1 w-1 bg-white rounded" />
                <p className="font-bold">$350</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="">Total Income</p>
                <div className="h-1 w-1 bg-white rounded" />
                <p className="font-bold">$850</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
