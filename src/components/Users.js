import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Users.css";
import User from "./User";

const Users = ({ users, setUsers }) => {
  const [currentPage, setCurrentPage] = useState(0);
  // const [data] = useState(users);
  const PER_PAGE = 7;
  const offset = currentPage * PER_PAGE;
  const currentPageData = users
    .slice(offset, offset + PER_PAGE)
    .map((user) => (
      <User
        key={user.id}
        number={user.id}
        name={user.name}
        email={user.email}
        gender={user.gender}
        status={user.status}
        setUsers={setUsers}
        users={users}
      />
    ));
  const pageCount = Math.ceil(users.length / PER_PAGE);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  return (
    <div className="container">
      {currentPageData}
      <div className="paginate-container">
        <ReactPaginate
          previousLabel={"<<<"}
          nextLabel={">>>"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      </div>
    </div>
  );
};

export default Users;

//token: e211f92f65e4b134775224458d20b14fad585ad97bbdb4bb9ccea885fa93d50f

//token: 7f9912c5ee3bf743fb5e548ba9b9ca45444351294ebd7c50c5841799146741d8
