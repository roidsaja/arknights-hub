"use client";

import React from "react";
import { CloseButton, Input, Pagination, Skeleton } from "@mantine/core";
import api from "src/api";

import { CardItemProps } from "../Interfaces";
import { OpsCard } from "./Card";

export default function Sidebar() {
  const [page, setPage] = React.useState<CardItemProps[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchAllOperator();
      setPage(data);
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredItems = searchTerm
    ? page.filter((item: any) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : page;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  return (
    <main className="h-full">
      {currentItems ? (
        <div className="flex flex-col items-center space-y-6">
          <Input
            placeholder="Search Operators..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setSearchTerm("")}
                style={{ display: searchTerm ? undefined : "none" }}
              />
            }
          />
          <div className="flex w-full flex-col space-y-6">
            {currentItems.map((ops: any, index: number) => {
              const baseArt = ops.art.slice(1);
              const baseArtURL =
                baseArt.length > 0 ? baseArt[0].link : "/this-is-fine.png";
              return (
                <OpsCard
                  key={index}
                  data={{
                    _id: ops._id,
                    name: ops.name,
                    rarity: ops.rarity,
                    class: ops.class[0],
                    art: baseArtURL,
                  }}
                />
              );
            })}
          </div>
          <div className="flex">
            <Pagination
              size="xs"
              value={currentPage}
              total={totalPages}
              radius="xl"
              color="#000000"
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      ) : (
        Array(60)
          .fill(0)
          .map((_, index) => <Skeleton key={index} h={28} mt="sm" animate />)
      )}
    </main>
  );
}
