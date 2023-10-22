"use client";

import React from "react";
import { Skeleton } from "@mantine/core";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import api from "../api";
import { OperatorInfoProps } from "../components/Interfaces";

export default function RootRoute() {
  const [ops, setOps] = React.useState<OperatorInfoProps>();
  const params = useSearchParams();
  const searchParams = params.get("op");
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
    <div>
      {ops ? (
        <>
          <h1>{ops.name}</h1>
          <h1>{ops.rarity}</h1>
          {ops.art.slice(1).map((artImg, index) => (
            <Image
              src={artImg.link}
              alt={"img"}
              key={index}
              width={500}
              height={500}
            />
          ))}
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
