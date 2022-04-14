import React, { useState, useContext, useEffect } from "react";
import homeBg from "../../assets/images/home-bg.jpg";
import { ShowsContext } from "../../context/ShowsContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import Alert from "../shows/alert/Alert";
import { AlertContext } from "../../context/AlertContext";

const Search = (props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState("");

  const setSearchKeywordValue = (event) => {
    setSearchKeyword(event.target.value);
  };

  const styleClasses =
    props.size === "large"
      ? "col-2-4 search-content mx-auto mh-100"
      : "col-2-4 search-content mx-auto pt-6 pb-2";

  const { loading, searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (searchParams && searchParams.get("key")) {
      let key = searchParams.get("key");
      if (key) {
        setSearchKeyword(key);
        searchShows(key);
      }
    }
  }, []);

  const handleSearchForm = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      navigate(`/search?key=${searchKeyword}`);

      searchShows(searchKeyword);
    } else {
      setAlert("Search Bar is empty !", "danger");
    }
  };

  return (
    <section className="search" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="container">
        <div className="row">
          <div className={styleClasses}>
            {props.size === "large" ? (
              <>
                <h1>Find Your Next Show</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </>
            ) : null}
            <form className="search-form" onSubmit={handleSearchForm}>
              <input
                type="search"
                placeholder="Search for Tv Show"
                value={searchKeyword}
                onChange={setSearchKeywordValue}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Loading ..." : "search"}
              </button>
            </form>
            {alert ? <Alert type={alert.type} message={alert.message} /> : null}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
