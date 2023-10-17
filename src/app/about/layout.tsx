import React from "react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About-ArknightsHub",
    description: "Learn more about Arknights.",
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
