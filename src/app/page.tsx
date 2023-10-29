"use client";

import React from "react";
import { Skeleton } from "@mantine/core";
import cn from "classnames";
import { Box, ExternalLink, ShieldQuestion, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import api from "../api";
import { OperatorInfoProps } from "../components/Interfaces";

export default function RootRoute() {
  const [ops, setOps] = React.useState<OperatorInfoProps>();

  const params = useSearchParams();
  const searchParams = params.get("op");
  const artParams = params.get("art");

  console.log(ops);
  let imageName = "";
  if (ops && ops.class.length > 0) {
    imageName += ops.class[0];
    if (ops.class.length > 1) {
      imageName += `_${ops.class[1].replace(" ", "")}`;
      if (ops.class.length > 2) {
        imageName += `_${ops.class[2].replace(" ", "")}`;
      }
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      if (searchParams) {
        const data = await api.fetchOperator(searchParams);
        setOps(data);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-[#373a40]",
        "bg-neutral-900 p-8 dark:border-neutral-800",
        "md:p-12 lg:flex-row lg:gap-8",
      )}
    >
      <div className="h-full w-full basis-full lg:basis-4/6">
        {ops ? (
          <>
            <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
              <Image
                src={
                  artParams !== null
                    ? `https://ucarecdn.com/${artParams}`
                    : ops?.art.slice(1).length > 0
                    ? ops?.art.slice(1)[0].link
                    : "/this-is-fine.png"
                }
                className="h-full w-full object-contain"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                alt={"arknights operator"}
                priority={true}
              />
            </div>
            <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
              {ops.art.slice(1).map((artImg, index) => (
                <li key={index} className="h-32 w-32">
                  <Link
                    href={`/?op=${ops.name}&art=${artImg.link.replace(
                      "https://ucarecdn.com/",
                      "",
                    )}`}
                  >
                    <div
                      className={cn(
                        "flex h-full w-full items-center justify-center overflow-hidden rounded-xl border",
                        "border-slate-700 bg-inherit hover:border-slate-500 hover:bg-neutral-800",
                      )}
                    >
                      <Image
                        src={artImg.link}
                        alt={"img"}
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="basis-full lg:basis-2/6">
        {ops ? (
          <>
            <div className="mb-6 flex flex-col border-b border-neutral-700 pb-6">
              <div className="mb-2 flex flex-col md:flex-row">
                <h1 className="text-5xl font-medium">{ops.name}</h1>
                <Link href={ops.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                </Link>
              </div>
              <div className="mt-6 flex gap-2">
                <div className="w-auto rounded-full bg-amber-600 p-2 text-sm text-white">
                  <p className="flex">
                    <span className="mr-1 inline">
                      <Sparkles size={18} />
                    </span>
                    {ops.rarity}
                  </p>
                </div>
                <div className="w-auto rounded-full bg-cyan-600 p-2 text-sm text-white">
                  <p className="flex">
                    <span className="mr-1 inline">
                      <ShieldQuestion size={18} />
                    </span>
                    {ops.affiliation[0]}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {ops.tags.map((tag, index) => (
                  <div
                    className="w-auto rounded-full bg-neutral-600 p-2 text-sm text-white"
                    key={index}
                  >
                    <p className="flex">
                      <span className="mr-1 inline">
                        <Box size={18} />
                      </span>
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              {ops.class.length > 0 && (
                <div className="mt-2 flex gap-2">
                  <div className="relative aspect-square h-full max-h-[64px] w-full overflow-hidden">
                    <Image
                      src={`/ClassIcons/${ops.class[0]
                        .replace(" ", "_")
                        .toLowerCase()}.png`}
                      alt={"class type"}
                      className="h-full w-full object-contain"
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      priority
                    />
                  </div>
                  <div className="relative aspect-square h-full max-h-[64px] w-full overflow-hidden">
                    <Image
                      src={`/ClassIcons/${imageName.toLowerCase()}.png`}
                      alt={"class type"}
                      className="h-full w-full object-contain"
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mb-6 flex flex-col pb-6">
              <p>{ops.biography}</p>
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}
