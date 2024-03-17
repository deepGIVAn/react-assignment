import React from "react";
import Layout from "../Layout";
import { useSortBy, useTable, usePagination } from "react-table";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { AddOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 2,
    eventname: "Apple Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 3,
    eventname: "Banana Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 4,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 5,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 6,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 7,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 8,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 9,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 10,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 11,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 12,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 13,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 14,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 15,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 16,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 17,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 18,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 19,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 20,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 21,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 22,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 14,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
  {
    id: 23,
    eventname: "Filled Name",
    eventstart: "Jan 12, 2024",
    eventend: "Jan 14, 2024",
    clientname: "Muhammad Asad",
    contactInfo: "+1 234 566 7890",
    venue: "Lorem Ipsum Dolor Sit Amet",
  },
];

const columns = [
  {
    Header: "Event Name",
    accessor: "eventname",
  },
  {
    Header: "Event Start",
    accessor: "eventstart",
  },
  {
    Header: "Event End",
    accessor: "eventend",
  },
  {
    Header: "Client Name",
    accessor: "clientname",
  },
  {
    Header: "Contact Info",
    accessor: "contactInfo",
  },
  {
    Header: "Venue",
    accessor: "venue",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "7px",
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  border: "1px solid white",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const EventRequest = () => {
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
      initialState: { pageSize: 8 },
    },
    useSortBy,
    usePagination
  );

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="relative whitespace-pre border-2 border-[#D175B6] rounded-xl w-full h-full text-white custom-shadow overflow-hidden">
        <div className="p-2 sm:p-4 flex flex-col sm:flex-row gap-3 justify-between">
          <span className="text-2xl font-medium">Event Requests</span>
          <span className="flex flex-row gap-2 items-center">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search here"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <AddOutlined
              onClick={() => navigate("/addevent")}
              sx={{
                fontSize: 30,
                color: "white",
                border: "1px solid white",
                borderRadius: "4px",
                backgroundImage: "linear-gradient(to right, #FF00FF, #8F00FF)",
                cursor: "pointer",
              }}
            />
          </span>
        </div>
        <div className="overflow-scroll custom-scrollbar">
          <table {...getTableProps()} className="w-full">
            <thead className="bg-[#D175B6] w-full">
              {headerGroups.map((hg) => (
                <tr {...hg.getHeaderGroupProps()}>
                  {hg.headers.map((header) => (
                    <td
                      {...header.getHeaderProps(header.getSortByToggleProps())}
                      className="p-3 px-5 text-base font-medium text-left"
                    >
                      {/* {console.log(header.id)} */}
                      {header.render("Header")}
                      {header.isSorted ? (
                        <span className="ml-2">
                          {header.isSortedDesc ? (
                            <ExpandCircleDownIcon
                              sx={{ fontSize: 30, color: "white" }}
                            />
                          ) : (
                            <ExpandCircleDownIcon
                              sx={{
                                fontSize: 30,
                                color: "white",
                                transform: "rotate(180deg)",
                              }}
                            />
                          )}
                        </span>
                      ) : (
                        (header.id === "eventname" ||
                          header.id === "eventend" ||
                          header.id === "clientname") && (
                          <span className="ml-2">
                            <ExpandCircleDownIcon
                              sx={{
                                fontSize: 30,
                                color: "white",
                                transform: "rotate(180deg)",
                              }}
                            />
                          </span>
                        )
                      )}
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
                    className="border-b-2 border-[#D175B6]"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className={`${
                          cell.column.id === "eventname" && "bg-black/30"
                        } p-3 text-base px-5`}
                      >
                        {/* {console.log(cell.column.id)} */}
                        {cell.column.id === "eventname" && (
                          <span className="mr-2">
                            <VisibilityOutlinedIcon
                              sx={{ fontSize: 20, color: "white" }}
                            />
                          </span>
                        )}
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="absolute bottom-0 w-full py-5 flex flex-row gap-3 items-center justify-center bg-black h-[20px] ">
          <button
            disabled={!canPreviousPage}
            className={`${!canPreviousPage && "text-gray-800 cursor-default"}`}
            onClick={previousPage}
          >
            <ArrowRightAltIcon
              sx={{ fontSize: 30, transform: "rotate(180deg)" }}
            />
          </button>
          {Array(pageCount)
            .fill(1)
            .map((i, index) => (
              <span
                key={index}
                className={`${
                  pageIndex === index
                    ? "text-xl text-[#D175B6]"
                    : "text-sm cursor-pointer"
                } `}
                onClick={() => gotoPage(index)}
              >
                {index + 1}
              </span>
            ))}

          {/* {pageIndex + 1} of {pageCount} */}
          <button
            disabled={!canNextPage}
            onClick={nextPage}
            className={`${!canNextPage && "text-gray-800 cursor-default"}`}
          >
            <ArrowRightAltIcon sx={{ fontSize: 30 }} />
          </button>
          {/* <button
            onClick={() => gotoPage(pageCount - 1)}
            className={`${
              pageCount - 1 === pageIndex && "text-red-500 cursor-not-allowed"
            }`}
          >
            Last
          </button> */}
        </div>
      </div>
    </Layout>
  );
};

export default EventRequest;
