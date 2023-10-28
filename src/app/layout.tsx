"use client";

import React from "react";
import { AppShell, Burger, Group, ScrollArea, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import Sidebar from "../components/common/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="dark">
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                ArknightsHub
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <AppShell.Section>Operators</AppShell.Section>
              <AppShell.Section grow my="md" component={ScrollArea}>
                <Sidebar />
              </AppShell.Section>
              <AppShell.Section>
                © {new Date().getFullYear()} ArknightsHub
              </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>
              <div className="mx-auto max-w-screen-2xl px-4">{children}</div>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
