import { Avatar, Button, Flex, Space, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import CustomImage from "./CustomImage";
import { Channel } from "@/type";
import { getBrandAcronym } from "@/utils";

const channelIcons: Record<Channel, string> = {
  instagram: "/insta.svg",
  tiktok: "/tiktok.svg",
  youtube: "/youtube.svg",
  twitter: "/twitter.svg",
  facebook: "/facebook.svg",
};

interface Props {
  title: string;
  brand: string;
  category: string;
  description: string;
  minBudget: number;
  maxBudget: number;
  channels: Channel[];
  avatarColor: string;
}

const CampaignBox = ({
  title,
  brand,
  category,
  description,
  minBudget,
  maxBudget,
  channels,
  avatarColor,
}: Props) => {
  return (
    <div className="bg-white shadow-sm md:min-w-[340px] md:max-w-[360px] p-4 rounded-2xl flex justify-between flex-col">
      <div>
        {" "}
        <Flex justify="space-between" className="w-full items-start flex-wrap">
          <Space className="pb-4">
            <Avatar
              style={{ backgroundColor: avatarColor }}
              shape="square"
              size={40}
            >
              {getBrandAcronym(title)}
            </Avatar>
            <div className="flex flex-col">
              <p className="font-sf font-bold truncate max-w-[140px]">
                {title}
              </p>

              <Flex align="center" className="gap-2">
                <p className="text-xs text-[#595959] ">{brand} </p>
                <div className="h-1 w-1 bg-[#595959] rounded" />
                <p className="text-xs text-[#595959]">{category}</p>
              </Flex>
            </div>
          </Space>
          <Space align="start">
            <p className="text-xs">Posted 2 days ago</p>
            <CustomImage src="/bookmark.svg" />
          </Space>
        </Flex>
        <Typography>
          <Paragraph className="text-sm font-sf">{description}</Paragraph>
        </Typography>
      </div>
      <div>
        {" "}
        <div className="pt-2">
          <p className="font-medium">Channels</p>
          <Space>
            {channels.map((channel) =>
              channelIcons[channel] ? (
                <CustomImage key={channel} src={channelIcons[channel]} />
              ) : null
            )}
            {/* 
          <CustomImage src="/twoMore.svg" /> */}
          </Space>
        </div>
        <Flex align="center" justify="space-between" className="pt-2">
          <Flex vertical>
            <p className="text-[#595959]">Budget</p>
            <p className="text-lg font-bold">
              ${minBudget} - ${maxBudget}
            </p>
          </Flex>
          <Button
            style={{
              backgroundColor: "#053559",
              color: "white",
              padding: "20px",
              height: "46px",
              width: "114px",
            }}
          >
            Apply Now
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default CampaignBox;
