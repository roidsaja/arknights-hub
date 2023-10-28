"use client";

import React from "react";
import { Skeleton } from "@mantine/core";
import cn from "classnames";
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
            <h1>{ops.name}</h1>
            <h1>{ops.rarity}</h1>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}
