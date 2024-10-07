import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Input,
  MenuProps,
  Progress,
  Space,
  Typography,
} from "antd";
import { DownOutlined, UnorderedListOutlined } from "@ant-design/icons";
import CustomImage from "@/components/CustomImage";
import LinkIcon from "@/icons/LinkIcon";
import Paragraph from "antd/es/typography/Paragraph";
import CampaignBox from "@/components/CampaignBox";
import SearchIcon from "@/icons/SearchIcon";
import CreateCampaign from "@/components/CreateCampaign";
import { useState } from "react";
import { Campaign } from "@/type";
import { campaignData } from "@/data";

interface StatBoxProps {
  header: string;
  value: string;
}

const StatBox = ({ header, value }: StatBoxProps) => (
  <article className="flex flex-col">
    <p className="text-sm font-light font-sf">{header}</p>
    <p className="font-medium text-2xl">${value}</p>
  </article>
);

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(campaignData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCampaigns, setFilteredCampaigns] =
    useState<Campaign[]>(campaignData);

  const addCampaign = (newCampaign: Campaign) => {
    setCampaigns([newCampaign, ...campaigns]);
    setFilteredCampaigns([newCampaign, ...filteredCampaigns]);
  };

  const filterCampaigns = (term: string) => {
    const lowercasedTerm = term.toLowerCase();
    const filtered = campaigns.filter((campaign) =>
      campaign.title.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredCampaigns(filtered);
  };

  const items: MenuProps["items"] = [
    {
      label: "Entertainment",
      key: "1",
    },
    {
      label: "Movie",
      key: "2",
    },
    {
      label: "Games",
      key: "3",
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <main>
      <header className="py-4 md:py-0 flex justify-between items-center">
        <h2 className="text-[#053559]">Dashboard</h2>
        <div className="flex gap-6 items-center justify-center">
          <CreateCampaign addCampaign={addCampaign} />
          <CustomImage src="/messageNotif.svg" className="cursor-pointer" />
          <CustomImage src="/bellNotif.svg" className="cursor-pointer" />
        </div>
      </header>

      <section className="md:mt-6 flex-col md:flex-row flex justify-between gap-4">
        <div
          className="hidden md:block md:w-[calc(100%-380px)] bg-[#053559]  text-white py-4 px-6 rounded-2xl"
          style={{
            backgroundImage: 'url("/spirals.png")',
            backgroundBlendMode: "color-dodge",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <header className="flex justify-between border-b-[0.5px] border-white pb-2">
            <h2 className="text-xl font-medium font-sf">Financial Overview</h2>
            <div className="flex items-center gap-2">
              <p className="font-light font-sf">View all campaigns</p>
              <div className="cursor-pointer">
                <LinkIcon />
              </div>
            </div>
          </header>

          <div className="flex flex-wrap gap-14 mt-10">
            <StatBox header="Total Income" value={"62,932"} />
            <StatBox header="Fund In Escrow" value={"62,231"} />
            <StatBox header="Ave. Income Monthly" value={"3,542"} />
          </div>

          <div className="flex gap-2 lg:gap-4 mt-10 flex-wrap">
            <p className="text-sm lg:text-base font-bold">January Summary:</p>
            <div className="flex gap-1 lg:gap-2 items-center">
              <p className="text-sm lg:text-base">Total Fund In Escrow</p>
              <span className="h-1 w-1 bg-white rounded" />
              <p className="font-bold">$350</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm lg:text-base">Total Income</p>
              <span className="h-1 w-1 bg-white rounded" />
              <p className="font-bold">$850</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block bg-white border border-[#053559] shadow-sm md:w-[380px] p-4 rounded-2xl">
          <Flex
            justify="space-between"
            align="center"
            className="border-b-[0.5px] border-[#BFBFBF] pb-2"
          >
            <h2 className="text-xl font-medium font-sf">Profile Information</h2>
            <div className="cursor-pointer">
              <LinkIcon color="#0D98FE" />
            </div>
          </Flex>

          <div className="gap-2 flex pt-4 pb-3 items-center">
            <Avatar
              src="/profile.png"
              style={{ objectFit: "none" }}
              shape="square"
              size={70}
            />

            <div className="flex flex-col w-full">
              <p className="font-sf font-bold text-sm text-[#053559] pb-1">
                Olivia Jacobs
              </p>
              <Progress
                strokeColor="#0D98FE"
                percent={15}
                size="small"
                trailColor="#B4DFFF"
              />
            </div>
          </div>
          <Typography>
            <Paragraph className="text-sm font-sf">
              Complete your profile with details showcasing your skills and
              personality. Stand out and attract more opportunities.
            </Paragraph>
          </Typography>
        </div>
      </section>

      <section className="md:mt-6">
        <Flex className="hidden md:flex" justify="space-between" align="center">
          <h2 className="text-[#053559]">Explore Campaigns</h2>

          <Space.Compact style={{ width: "450px", height: "50px" }}>
            <Input
              style={{ backgroundColor: "#E7F5FF", border: "none" }}
              placeholder="Search Campaigns"
              value={searchTerm}
              onChange={(e) => {
                const term = e.target.value;
                setSearchTerm(term);
                filterCampaigns(term);
              }}
            />
            <Button
              style={{
                backgroundColor: "#053559",
                color: "white",
                padding: "16px",
                height: "100%",
                width: "50px",
              }}
              icon={<SearchIcon />}
              onClick={() => filterCampaigns(searchTerm)}
            />
          </Space.Compact>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          className="hidden md:flex pt-4"
        >
          <p>Search results: {filteredCampaigns.length} Blog post campaigns</p>
          <Flex gap="22px">
            <Space>
              <p>Sort by:</p>
              <Dropdown menu={menuProps}>
                <Button style={{ border: "none", backgroundColor: "#E7F5FF" }}>
                  <Space>
                    Category
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
            <Space>
              <Button
                style={{ border: "none", backgroundColor: "#E7F5FF" }}
                icon={<CustomImage src="/grid.svg" />}
              />
              <UnorderedListOutlined style={{ fontSize: "24px" }} />
            </Space>
          </Flex>
        </Flex>

        <div className="block md:hidden">
          <Input
            prefix={<SearchIcon color="#053559" />}
            style={{
              height: "50px",
              backgroundColor: "#E7F5FF",
              border: "none",
            }}
            placeholder="Search Campaigns"
            value={searchTerm}
            onChange={(e) => {
              const term = e.target.value;
              setSearchTerm(term);
              filterCampaigns(term);
            }}
          />
        </div>

        <Flex
          justify="space-between"
          className="flex-wrap gap-4 flex-col md:flex-row pt-4"
        >
          {filteredCampaigns.map((campaign) => (
            <CampaignBox key={campaign.title} {...campaign} />
          ))}
        </Flex>
      </section>
    </main>
  );
};

export default Dashboard;
