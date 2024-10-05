import React from "react";
import { Image, ImageProps } from "antd";

const CustomImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} preview={false} />;
};

export default CustomImage;
