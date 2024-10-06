import { Avatar, Button, Flex, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import HouseIcon from "@/icons/HouseIcon";
import SettingsIcon from "@/icons/SettingsIcon";
import StackIcon from "@/icons/StackIcon";
import MessageIcon from "@/icons/MessageIcon";
import MegaPhoneIcon from "@/icons/MegaPhoneIcon";
import CustomImage from "@/components/CustomImage";

interface CampaignShortcutsProps {
  text: string;
  image: string;
}

const CampaignShortcuts = ({ image, text }: CampaignShortcutsProps) => (
  <Flex
    justify="space-between"
    align="center"
    className="p-2 rounded-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:cursor-pointer"
  >
    <CustomImage
      width="24px"
      height="24px"
      style={{
        borderRadius: "4px",
        boxShadow: "0px 0px 8px 0px #00000026",
      }}
      src={image}
    />
    <p className="truncate max-w-[180px]">{text}</p>
    <CustomImage src="/arrowRight.svg" />
  </Flex>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getIconColor = (path: string) =>
    location.pathname.startsWith(path) ? "white" : "#0D1821";

  const navList = [
    {
      text: "Dashboard",
      icon: <HouseIcon color={getIconColor("/dashboard/home")} />,
      path: "/dashboard/home",
    },
    {
      text: "Campaigns",
      icon: <MegaPhoneIcon color={getIconColor("/dashboard/campaign")} />,
      path: "/dashboard/campaign",
    },
    {
      text: "Messages",
      icon: <MessageIcon color={getIconColor("/dashboard/messages")} />,
      path: "/dashboard/messages",
    },
    {
      text: "Earning History",
      icon: <StackIcon color={getIconColor("/dashboard/earnings")} />,
      path: "/dashboard/earnings",
    },
    {
      text: "Settings",
      icon: <SettingsIcon color={getIconColor("/dashboard/settings")} />,
      path: "/dashboard/settings",
    },
  ];

  const menuItems = navList.map(({ text, icon, path }) => ({
    key: text,
    icon,
    label: text,
    onClick: () => navigate(path),
    style: {
      backgroundColor: location.pathname.startsWith(path) ? "#053559" : "",
      color: location.pathname.startsWith(path) ? "white" : "",
      gap: "16px",
      paddingRight: "16px",
      paddingLeft: "16px",
      marginLeft: "0px",
      marginRight: "0px",
      marginTop: "6px",
      width: "100%",
    },
  }));

  return (
    <div
      className="hidden lg:block bg-white fixed w-80 py-10 px-10"
      style={{
        height: `calc(100vh - 44px)`,
        zIndex: 1,
        boxShadow: "0px 0px 20px 0px #0000001A",
      }}
    >
      <Flex justify="space-between" className="flex-col h-full">
        <div>
          <div>
            <h1 className="text-lg font-bold">Micro-Influx</h1>
            <div className="gap-0.5 flex pt-4 pb-3">
              <Avatar src="/profile.png" shape="square" size={48} />
              <Flex justify="space-between" className=" w-full">
                <div className="flex flex-col">
                  <p className="font-bold text-lg">Olivia Jacobs</p>
                  <p>Lifestyle Influencer</p>
                </div>
                <CustomImage src="/expand.svg" />
              </Flex>
            </div>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="m-0"
            style={{ border: "none" }}
            items={menuItems}
          />
        </div>
        <div>
          <div className="flex justify-between pb-3">
            <p className="font-medium">Campaign Shortcuts</p>
            <Button
              style={{
                backgroundColor: "#E7F5FF",
                border: "none",
                fontSize: "10px",
                width: "49px",
                height: "22px",
                borderRadius: "4px",
              }}
            >
              View All
            </Button>
          </div>
          <div className="flex flex-col ">
            <CampaignShortcuts
              image="/campaign1.png"
              text="TechGuru Tech Review Series"
            />
            <CampaignShortcuts
              image="/campaign2.png"
              text="BeautyBlend Makeup Challenge"
            />
            <CampaignShortcuts
              image="/campaign3.png"
              text="Wanderlust Adventure Series"
            />
            <CampaignShortcuts
              image="/campaign4.png"
              text="Fitness Fusion Workout Challenge"
            />
            <CampaignShortcuts
              image="/campaign5.png"
              text="Home Harmony DIY Challenge"
            />
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Sidebar;
