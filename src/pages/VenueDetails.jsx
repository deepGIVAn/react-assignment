import React, { useState } from "react";
import Layout from "../Layout";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import Select from "react-select";
import { useTable, usePagination } from "react-table";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Selectbox = ({ id }) => {
  const [select, setId] = useState(id);

  return (
    <Select
      sx={{
        width: "100%",
        borderRadius: "7px",
        height: "32px",
        border: "2px solid #D175B6",
        color: "gray",
      }}
      value={select}
      onChange={(e) => setId(e.target.value)}
      // displayEmpty
      // inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={id}>Select Contractor</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};

const data = [
  {
    id: 1,
    position: "Camera 1 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 2,
    position: "Camera 2 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 3,
    position: "Camera 3 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 4,
    position: "Camera 4 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 5,
    position: "Camera 5 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 6,
    position: "Camera 6 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 7,
    position: "Camera 7 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 8,
    position: "Camera 8 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 9,
    position: "Camera 9 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 10,
    position: "Camera 10 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 11,
    position: "Camera 11 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 12,
    position: "Camera 12 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
  {
    id: 13,
    position: "Camera 13 (Video)",
    info: "LP default",
    qty: 20,
    select: <Selectbox id={1} />,
  },
];

const columns = [
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  {
    Header: "Info",
    accessor: "info",
  },
  {
    Header: "Quantity",
    accessor: "qty",
  },
  {
    Header: "",
    accessor: "select",
  },
];

const VenueDetails = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 6 },
    },
    usePagination
  );

  const [select1, setSelect1] = useState("em");

  return (
    <Layout>
      <div className="p-2 sm:p-5 relative whitespace-pre border-2 border-[#D175B6] rounded-xl w-full h-full text-white custom-shadow overflow-scroll custom-scrollbar">
        <div className="mb-2">
          <span className="text-2xl font-medium">Event Name &nbsp;</span>(Venue
          Details)
        </div>
        <div className="w-full lg:w-fit text-sm text-[#D175B6] border-2 custom-shadow border-[#D175B6] rounded-lg flex flex-col lg:flex-row gap-3">
          <span className="p-3">Event Details</span>
          <span className="p-3 bg-[#D175B6] text-white">
            Assign Coordinator/Coordinator
          </span>
          <span className="p-3">Session Management</span>
          <span className="p-3">Generate SOW</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-3 sm:py-4">
          <div className="">
            <span className="text-xl font-medium mb-2 block">
              Assign Coordinator
            </span>
            <Select
              sx={{
                width: "100%",
                borderRadius: "7px",
                height: "48px",
                border: "2px solid #D175B6",
                color: "white",
              }}
              value={select1}
              onChange={(e) => setSelect1(e.target.value)}
              // displayEmpty
              // inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="em">Search Coordinator</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <h2 className="mt-2 text-[#D175B6] cursor-pointer">
              Add New Coordinator
            </h2>
          </div>
          <div className="">
            <span className="text-xl font-medium mb-2">Event Name &nbsp;</span>
            (Venue Here)
            <div className="mt-2 border-2 rounded-md border-[#D175B6] flex flex-row justify-between mb-2 py-1 px-3">
              <span>
                Start: <strong>12-12-2023</strong>
              </span>
              <span>
                Ends: <strong>15-12-2023</strong>
              </span>
            </div>
            <div className="border-2 rounded-md border-[#D175B6] mb-2 py-1 px-3 text-wrap">
              Venue Address:{" "}
              <strong>Some Location 12, Name Here, City,State.</strong>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-3 py-2 sm:py-3">
          <div>
            <span className="text-xl font-medium mb-2 block">
              Assign Contractor
            </span>

            <div className="bg-black border-2 custom-shadow border-[#D175B6] rounded-lg p-3 px-2 flex flex-col gap-3">
              <div className="bg-[#D175B6] text-white custom-shadow rounded-lg p-2">
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-medium">Meeting Room 1</span>
                  <img
                    src="images/starblack.png"
                    alt="hello"
                    className="rounded-full"
                  />
                  <span className="text-sm text-black font-medium">
                    12 Positions
                  </span>
                </div>
                <span className="text-xs">
                  Start from 12 Jan, 2023-Ends at 15 Jan, 2023
                </span>
              </div>
              <div className="bg-black text-white border-2 custom-shadow border-[#D175B6] rounded-lg p-2">
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-medium">Meeting Room 2</span>
                  <img
                    src="images/startpink.png"
                    alt="hello"
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">12 Positions</span>
                </div>
                <span className="text-xs">
                  Start from 12 Jan, 2023-Ends at 15 Jan, 2023
                </span>
              </div>
              <div className="bg-black text-white border-2 custom-shadow border-[#D175B6] rounded-lg p-2">
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-medium">Meeting Room 3</span>
                  <img
                    src="images/startpink.png"
                    alt="hello"
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">12 Positions</span>
                </div>
                <span className="text-xs">
                  Start from 12 Jan, 2023-Ends at 15 Jan, 2023
                </span>
              </div>
              <div className="bg-black text-white border-2 custom-shadow border-[#D175B6] rounded-lg p-2">
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-medium">Meeting Room 4</span>
                  <img
                    src="images/startpink.png"
                    alt="hello"
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">12 Positions</span>
                </div>
                <span className="text-xs">
                  Start from 12 Jan, 2023-Ends at 15 Jan, 2023
                </span>
              </div>
              <div className="bg-black text-white border-2 custom-shadow border-[#D175B6] rounded-lg p-2">
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-medium">Meeting Room 5</span>
                  <img
                    src="images/startpink.png"
                    alt="hello"
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">12 Positions</span>
                </div>
                <span className="text-xs">
                  Start from 12 Jan, 2023-Ends at 15 Jan, 2023
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <span className="text-xl font-medium mb-2 block">&nbsp;</span>
            <span className="text-lg font-medium mb-2 block">Positions</span>
            <div className="relative bg-black w-full h-[372px] rounded-lg overflow-scroll custom-scrollbar border-2  custom-shadow border-[#D175B6]">
              <table
                {...getTableProps()}
                className="w-full overflow-scroll custom-scrollbar"
              >
                <thead className="w-full">
                  {headerGroups.map((hg) => (
                    <tr {...hg.getHeaderGroupProps()}>
                      {hg.headers.map((header) => (
                        <td
                          {...header.getHeaderProps()}
                          className="p-2 px-4 text-base font-medium text-left"
                        >
                          {/* {console.log(header.id)} */}
                          {header.render("Header")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className="divide">
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className="border-y-2 border-[#D175B6]"
                      >
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="p-2 px-4 text-sm"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="absolute bottom-0 w-full py-1 flex flex-row justify-center items-center gap-3">
                <div className="absolute bottom-0 w-full py-5 flex flex-row gap-3 items-center justify-center bg-black h-[20px] ">
                  <button
                    disabled={!canPreviousPage}
                    className={`${
                      !canPreviousPage && "text-gray-800 cursor-default"
                    }`}
                    onClick={previousPage}
                  >
                    <ArrowRightAltIcon
                      sx={{ fontSize: 30, transform: "rotate(180deg)" }}
                    />
                  </button>
                  {Array(pageCount)
                    .fill(1)
                    .map((i, index) => (
                      <div
                        key={index}
                        className={`${
                          pageIndex === index
                            ? "text-xl bg-[#D175B6] rounded-full border-2 border-white h-[15px] w-[15px] custom-shadow"
                            : "text-xl cursor-pointer rounded-full border-2 border-white h-[12px] w-[12px]"
                        } `}
                        onClick={() => gotoPage(index)}
                      >
                        {/* {index + 1} */}{" "}
                      </div>
                    ))}

                  {/* {pageIndex + 1} of {pageCount} */}
                  <button
                    disabled={!canNextPage}
                    onClick={nextPage}
                    className={`${
                      !canNextPage && "text-gray-800 cursor-default"
                    }`}
                  >
                    <ArrowRightAltIcon sx={{ fontSize: 30 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-3">
          <button className="px-8 py-3 bg-[#D175B6] shadow-inner rounded-xl font-medium">
            Save Edits
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default VenueDetails;
