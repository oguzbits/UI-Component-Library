import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button variant="default">Button</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Button</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Button</Button>,
};

export const Destructive: Story = {
  render: () => <Button variant="destructive">Button</Button>,
};

export const Icon: Story = {
  render: () => (
    <Button variant="default" size="icon">
      Button
    </Button>
  ),
};
