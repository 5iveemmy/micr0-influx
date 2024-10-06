import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Modal } from "antd";
import TextInput from "./TextInput";
import { Formik } from "formik";
import CustomSelectInput from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";
import * as Yup from "yup";

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

const CreateCampaign = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        title="Create a New Campaign"
        open={open}
        onCancel={onClose}
        width={720}
        footer={null}
      >
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            title: "john",
            brand: "",
            category: "",
            description: "",
            minBudget: "",
            maxBudget: "",
          }}
          onSubmit={(values) => {
            console.log(values, "values");
          }}
        >
          {({ handleSubmit, errors, touched, isValid, dirty }) => {
            console.log(errors, "errors");
            console.log(touched, "errors");
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
                  options={[{ label: "Category", value: "Category" }]}
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
