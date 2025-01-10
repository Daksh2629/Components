import React from "react";
import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

// Default export for Storybook
export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    // If you want to control the ID (for story use), set it as text
    id: { control: "text" },
    
    backgroundImages: { control: "array" },
    backgroundVideo: { control: "text" },
    backgroundColor: { control: "text" },
    rounded: { control: "text" },
    borderStyle: { control: "text" },
    
    // Flex properties
    flexDirection: { control: "radio", options: ["row", "column"] },
    justifyContent: {
      control: "radio",
      options: ["start", "center", "end", "between", "around"],
    },
    alignItems: {
      control: "radio",
      options: ["start", "center", "end", "baseline", "stretch"],
    },
  },
} as Meta;

// Template for stories
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Default Card
export const DefaultCard = Template.bind({});
DefaultCard.args = {
  id: "1",
  backgroundColor: "bg-white",
  rounded: "rounded-md",
  borderStyle: "border border-gray-300",
  children: <div className="p-4 text-center">Default Card Content</div>,
};

// Card with Background Image
export const CardWithBackgroundImage = Template.bind({});
CardWithBackgroundImage.args = {
  id: "2",
  backgroundImages: ["https://via.placeholder.com/500x300"],
  backgroundColor: "bg-white",
  rounded: "rounded-lg",
  borderStyle: "border border-gray-200",
  children: <div className="p-4 text-white">Card with Background Image</div>,
};

// Card with Background Video
export const CardWithBackgroundVideo = Template.bind({});
CardWithBackgroundVideo.args = {
  id: "3",
  backgroundVideo: "https://www.w3schools.com/html/movie.mp4", // Example video URL
  backgroundColor: "bg-black",
  rounded: "rounded-lg",
  borderStyle: "border border-gray-700",
  children: <div className="p-4 text-white">Card with Background Video</div>,
};

// Card with Column Layout
export const CardWithColumnLayout = Template.bind({});
CardWithColumnLayout.args = {
  id: "4",
  backgroundColor: "bg-blue-500",
  rounded: "rounded-lg",
  borderStyle: "border border-gray-300",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  children: (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold">Vertical Layout</h2>
      <p>This card has a column layout.</p>
    </div>
  ),
};

// Card with Row Layout
export const CardWithRowLayout = Template.bind({});
CardWithRowLayout.args = {
  id: "5",
  backgroundColor: "bg-green-500",
  rounded: "rounded-lg",
  borderStyle: "border border-gray-300",
  flexDirection: "row",
  justifyContent: "between",
  alignItems: "center",
  children: (
    <div className="flex w-full p-4 text-white">
      <div className="flex-1">
        <h2 className="text-2xl font-bold">Horizontal Layout</h2>
        <p>This card has a row layout with content distributed evenly.</p>
      </div>
      <div className="flex-none w-24 h-24 bg-white rounded-full"></div>
    </div>
  ),
};

// Customizable Card
export const CustomizableCard = Template.bind({});
CustomizableCard.args = {
  id: "6",
  backgroundImages: ["https://via.placeholder.com/600x400"],
  backgroundColor: "bg-pink-500",
  rounded: "rounded-xl",
  borderStyle: "border-4 border-yellow-400",
  className: "shadow-lg hover:scale-105 transition-transform duration-300",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  children: (
    <div className="p-4 text-white">
      <h2 className="text-3xl font-bold">Customizable Card</h2>
      <p className="mt-2">You can apply your custom styles and behaviors here.</p>
    </div>
  ),
};
