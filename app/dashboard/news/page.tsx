import { fetchInvoicesPages } from "@/app/_lib/data";
import Search from "@/app/components/ui/Search";
import { InvoicesTableSkeleton } from "@/app/components/ui/Skeletons";
import { CreateInvoice } from "@/app/components/ui/users/buttons";
import Pagination from "@/app/components/ui/users/pagination";
import Table from "@/app/components/ui/users/table";
import React, { Suspense } from "react";


const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search users..." />
         <CreateInvoice /> 
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
