import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { USER_PER_PAGE } from "../components/USER_PER_PAGE";
import Users from "../components/Users";
import { Outlet } from "react-router-dom";

function MyGithub() {
  const [portfolio, setPortFolio] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [dynamicRoute, setDynamicRoute] = useState(false);

  function scrollView(z) {
    z.current.scrollIntoView();
  }
  function chooseRepo() {
    
    setDynamicRoute(true);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/jeweleni/repos")
      .then((res) => res.json())
      .then((data) => {
        setPortFolio(data);
        setTotalPages(Math.ceil(data.length / USER_PER_PAGE));
        setLoading(false);
      });
  }, []);
  const handleClick = (btn) => {
    if (btn === "next") {
      setPage(page + 1);
      return;
    }
    setPage(page - 1);
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div
      style={{ width: "100", border: "1px soild black", position: "relative" }}
    >
      <h1 alt="repository list">My Github Repositories</h1>
      <Users
        users={portfolio}
        page={page}
        chooseRepo={chooseRepo}
        scrollView={scrollView}
        dynamicRoute={dynamicRoute}
      />

      <Pagination
        totalPages={totalPages}
        handleClick={handleClick}
        setPage={setPage}
        page={page}
      />
      <Outlet context={[portfolio, setPortFolio, scrollView, dynamicRoute]} />
    </div>
  );
}

export default MyGithub;