import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  SendOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Divider, Input, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full mt-8 py-8">
      <Divider />
      <div className="flex flex-1 justify-between gap-6 flex-col-reverse sm:flex-col-reverse lg:gap-0 lg:flex-row">
        <div className="footer-links-wrapper flex flex-col gap-10 justify-between">
          <Space
            className="flex flex-col items-start md:flex-row md:items-center"
            split={<Divider type="vertical" className="hidden md:block" />}
          >
            <Link
              to="/contact"
              className="uppercase font-medium hover:text-primary hover:underline hover:underline-offset-4 md:text-sm"
            >
              Contact
            </Link>
            <Link
              to="/terms-of-services"
              className="uppercase font-medium hover:text-primary hover:underline hover:underline-offset-4 md:text-sm"
            >
              Terms of Services
            </Link>
            <Link
              to="/shipping-and-returns"
              className="uppercase font-medium hover:text-primary hover:underline hover:underline-offset-4 md:text-sm"
            >
              Shipping and Returns
            </Link>
            <Link
              to="/faqs"
              className="uppercase font-medium hover:text-primary hover:underline hover:underline-offset-4 md:text-sm"
            >
              FAQs
            </Link>
          </Space>
          <Space className="m-auto md:m-0" >
            <p className="text-[12px] text-center sm:text-base">
              <span className="font-semibold">&copy; 2024 em'Belle.</span>{" "}
              <span className="text-gray-600">Terms of Use</span>{" "}
              <span className="font-semibold">and</span>{" "}
              <span className="text-gray-600">privacy policy.</span>
            </p>
          </Space>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="input-wrapper flex border-b-2 border-spacing-8 flex-col">
              <Input
                placeholder="Give an email, get the newsletter."
                size="large"
                style={{ border: "none", outline: "none" }}
                className="focus:border-0 focus:outline-none focus:shadow-none sm:w-auto xl:w-[500px]"
                suffix={
                  <Button
                    type="text"
                    className="hover:text-primary hover:bg-transparent"
                    icon={<SendOutlined />}
                  />
                }
              />
            </div>
            <Checkbox className="text-left text-primary accent-primary text-[12px] sm:text-sm">
              I agree to the website’s terms and conditions
            </Checkbox>
          </div>
          <div className="flex gap-8 lg:justify-end">
            <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
              <FacebookFilled
                style={{
                  color: "#707070",
                  fontSize: "1.5rem",
                }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com"
              rel="noreferrer"
            >
              <InstagramFilled
                style={{
                  color: "#707070",
                  fontSize: "1.5rem",
                }}
              />
            </a>
            <a target="_blank" href="https://www.x.com" rel="noreferrer">
              <TwitterOutlined
                style={{
                  color: "#707070",
                  fontSize: "1.5rem",
                }}
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com" rel="noreferrer">
              <LinkedinFilled
                style={{
                  color: "#707070",
                  fontSize: "1.5rem",
                  borderRadius: "100%",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
