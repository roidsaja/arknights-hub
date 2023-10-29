"use client";

import React from "react";
import { AppShell, Burger, Group, ScrollArea, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Github } from "lucide-react";
import Link from "next/link";

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
                <Link href="/">Arknights Hub</Link>
                <Link
                  href="https://github.com/roidsaja/arknights-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-600 p-[2px] pb-0 hover:bg-neutral-400"
                >
                  <Github fill="black" color="black" />
                </Link>
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <AppShell.Section>Operators</AppShell.Section>
              <AppShell.Section grow my="md" component={ScrollArea}>
                <Sidebar />
              </AppShell.Section>
              <AppShell.Section>
                © {new Date().getFullYear()} Arknights Hub
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
