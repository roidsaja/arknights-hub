import React from "react";

import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="dark">
          <div className="container mb-20 flex-grow">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
