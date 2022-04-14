import React, { useContext } from "react";
import { ShowsContext } from "../../../context/ShowsContext";
import ShowItem from "../showItem/ShowItem";

const ShowList = () => {
  const { loading, shows } = useContext(ShowsContext);

  return (
    <section className="shows">
      <div className="container">
        <div className="row py-2 justify-between">
          {loading && (
            <div className="col-full">
              <div className="not-found">Loading</div>
            </div>
          )}
  
          {shows.length === 0 && !loading ? (
            <div className="col-full">
              <div className="not-found">Show Not Found</div>
            </div>
          ) : (
            <>
              {shows.map((show, index) => {
                return (
                  <div className="col-1-5" key={index}>
                    <ShowItem show={show.show} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowList;
