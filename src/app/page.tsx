"use client";

import React from "react";
import { Pagination } from "@mantine/core";
import api from "src/api";

export default function RootRoute() {
  const [page, setPage] = React.useState([]);
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
  const currentItems = page.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(page.length / itemsPerPage);

  return (
    <main>
      {currentItems.map((ops: any, index: number) => (
        <div className="flex flex-col gap-2" key={index}>
          <h1>{ops.name}</h1>
        </div>
      ))}
      <Pagination
        value={currentPage}
        total={totalPages}
        radius="xl"
        withEdges
        color="#000000"
        onChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}
