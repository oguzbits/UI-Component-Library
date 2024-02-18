import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button variant="default" />,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary" />,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost" />,
};

export const Destructive: Story = {
  render: () => <Button variant="destructive" />,
};

export const Icon: Story = {
  render: () => <Button variant="default" size="icon" />,
};
