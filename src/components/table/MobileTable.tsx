import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useState } from 'react';
import MobileTableRows from "@/components/MobileTableRows"

export function DataTable({ name, title, data }) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10, // or whatever your default is
  });

  const table = useReactTable({
    data,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false, // unless you're fetching data server-side
  });

  return (
    <div className="py-4 px-1">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="font-bold">{name}</div>
        {table.getRowModel().rows.map((row) => (
          <MobileTableRows
            key={row.id}
            title={title}
            data={row.original} // pass the row data
          />
        ))}

        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-sm px-3 py-1 border rounded"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-sm px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
