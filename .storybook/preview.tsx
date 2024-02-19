import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <main className={fontSans.className}>
        <Story />
      </main>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
