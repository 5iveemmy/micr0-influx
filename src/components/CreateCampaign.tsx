import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Modal } from "antd";
import TextInput from "./TextInput";
import { Formik } from "formik";
import CustomSelectInput from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";
import * as Yup from "yup";
import { Campaign } from "@/type";
import CustomImage from "./CustomImage";
import { getRandomColor } from "@/utils";
import "./modal.css";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Campaign title is required"),
  brand: Yup.string().required("Brand name is required"),
  category: Yup.string().required("Campaign category is required"),
  description: Yup.string().required("Campaign description is required"),
  minBudget: Yup.number().required("Minimum budget is required"),
  maxBudget: Yup.number()
    .required("Maximum budget is required")
    .moreThan(
      Yup.ref("minBudget"),
      "Max budget should be greater than min budget"
    ),
});

const socialMediaChannels = [
  { id: "instagram", icon: "/insta.svg", fadedIcon: "/fadedInsta.svg" },
  { id: "tiktok", icon: "/tiktok.svg", fadedIcon: "/fadedTiktok.svg" },
  { id: "youtube", icon: "/youtube.svg", fadedIcon: "/fadedYoutube.svg" },
  { id: "twitter", icon: "/twitter.svg", fadedIcon: "/fadedTwitter.svg" },
  { id: "facebook", icon: "/facebook.svg", fadedIcon: "/fadedFacebook.svg" },
];

interface Props {
  addCampaign: (campaign: Campaign) => void;
}

const CreateCampaign = ({ addCampaign }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const showModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChannelClick = (channel: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channel)
        ? prev.filter((item) => item !== channel)
        : [...prev, channel]
    );
  };

  const handleCreateCampaign = (values: any) => {
    const campaignPayload = {
      ...values,
      channels: selectedChannels,
      avatarColor: getRandomColor(),
    };

    setLoading(true);
    setTimeout(() => {
      addCampaign(campaignPayload);
      setLoading(false);
      onClose();
    }, 1000);
  };

  const items = [
    {
      label: "Entertainment",
      value: "Entertainment",
    },
    {
      label: "Movie",
      value: "Movie",
    },
    {
      label: "Games",
      value: "Games",
    },
  ];

  return (
    <>
      <Button
        style={{
          backgroundColor: "#053559",
          color: "white",
          padding: "20px",
          height: "46px",
        }}
        onClick={showModal}
        icon={<PlusOutlined />}
      >
        Create a New Campaign
      </Button>
      <Modal
        className="responsive-modal"
        title={
          <h1 className="text-[#053559] text-xl font-medium">
            Create a New Campaign
          </h1>
        }
        open={open}
        onCancel={onClose}
        width={655}
        footer={null}
      >
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            title: "",
            brand: "",
            category: "",
            description: "",
            minBudget: "",
            maxBudget: "",
          }}
          onSubmit={handleCreateCampaign}
        >
          {({ handleSubmit, errors, touched, isValid, dirty }) => {
            return (
              <Form onFinish={handleSubmit} layout="vertical">
                <TextInput
                  name="title"
                  label="Campaign Title"
                  error={errors.title}
                  touched={touched.title}
                />

                <TextInput
                  name="brand"
                  label="Brand Name"
                  error={errors.brand}
                  touched={touched.brand}
                />
                <CustomSelectInput
                  name="category"
                  label="Campaign Category"
                  options={items}
                  error={errors.category}
                  touched={touched.category}
                />

                <CustomTextArea
                  name="description"
                  label="Campaign Description"
                  rows={4}
                  error={errors.description}
                  touched={touched.description}
                />
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 text-[#053559] ">
                    Select Preferred Channel
                  </label>
                  <div className="flex gap-2 items-center">
                    {socialMediaChannels.map((channel) => (
                      <div
                        key={channel.id}
                        onClick={() => handleChannelClick(channel.id)}
                        className="cursor-pointer"
                      >
                        <CustomImage
                          width={48}
                          src={
                            selectedChannels.includes(channel.id)
                              ? channel.icon
                              : channel.fadedIcon
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <TextInput
                  type="number"
                  name="minBudget"
                  label="Campaign Min Budget"
                  error={errors.minBudget}
                  touched={touched.minBudget}
                />
                <TextInput
                  type="number"
                  name="maxBudget"
                  label="Campaign Max Budget"
                  error={errors.maxBudget}
                  touched={touched.maxBudget}
                />

                <Flex justify="center">
                  <Button
                    disabled={!isValid || !dirty}
                    loading={loading}
                    htmlType="submit"
                    style={{
                      backgroundColor: "#053559",
                      color: "white",
                      padding: "20px",
                      height: "46px",
                    }}
                  >
                    Create a New Campaign
                  </Button>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default CreateCampaign;
