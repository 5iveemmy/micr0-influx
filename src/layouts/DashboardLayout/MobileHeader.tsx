import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Drawer, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navList = [
    {
      text: "Dashboard",
      path: "/dashboard/home",
    },
    {
      text: "Campaigns",
      path: "/dashboard/campaign",
    },
    {
      text: "Messages",
      path: "/dashboard/messages",
    },
    {
      text: "Earning History",
      path: "/dashboard/earnings",
    },
    {
      text: "Settings",
      path: "/dashboard/settings",
    },
  ];

  const menuItems = navList.map(({ text, path }) => ({
    key: text,
    label: text,
    onClick: () => {
      toggleDrawer();
      navigate(path);
    },
    style: {
      backgroundColor: location.pathname.startsWith(path) ? "#053559" : "",
      color: location.pathname.startsWith(path) ? "white" : "",
      padding: "16px",
    },
  }));

  return (
    <div className="flex md:hidden px-4 pt-8 items-center justify-between">
      <Avatar src="/favicon.svg" shape="square" size={60} />
      <h1 className="text-xl font-sf font-bold">Micro-Influx</h1>
      <div className="cursor-pointer" onClick={toggleDrawer}>
        {open ? (
          <CloseOutlined style={{ fontSize: "28px" }} />
        ) : (
          <MenuOutlined style={{ fontSize: "28px" }} />
        )}
      </div>

      <Drawer placement="right" onClose={toggleDrawer} open={open}>
        <Menu mode="inline" items={menuItems} style={{ border: "none" }} />
      </Drawer>
    </div>
  );
};

export default MobileHeader;
