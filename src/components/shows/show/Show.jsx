import React, { useContext, useEffect } from "react";
import { ShowsContext } from "../../../context/ShowsContext";
import noImg from "../../../assets/images/no-img.png";
import { useParams } from "react-router-dom";

const Show = () => {
  const { activeShow, getActiveShow } = useContext(ShowsContext);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getActiveShow(id);
    }
  }, [id]);
  return (
    <section
      className="show"
      style={{
        backgroundImage: `url(${
          activeShow.image && activeShow.image.medium
            ? activeShow.image.medium
            : noImg
        })`,
      }}
    >
      <div className="container">
        <div className="row">
          {!activeShow ? (
            <div className="col-full">
              <div className="not-found">Show Not Found</div>
            </div>
          ) : (
            <>
              <div className="col-1-4">
                <div className="show-img">
                  <img
                    src={
                      activeShow.image && activeShow.image.medium
                        ? activeShow.image.medium
                        : noImg
                    }
                    alt={activeShow.name ? activeShow.name : "ShowImage"}
                  />
                </div>
              </div>
              <div className="col-3-4">
                <div className="show-info">
                  <h1 className="mb-2">{activeShow.name}</h1>
                  {activeShow.genres && activeShow.genres.length > 0 ? (
                    <div className="show-info_type mb-2">
                      {activeShow.genres.map((genre, index) => (
                        <span className="badge" key={index}>
                          {genre}
                        </span>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}

                  {activeShow.status && (
                    <div className="show-info_status mb-1">
                      <strong>Status : </strong> {activeShow.status}
                    </div>
                  )}

                  {activeShow.rating && activeShow.rating.average && (
                    <div className="show-info_rating mb-1">
                      <strong>Rating : </strong> {activeShow.rating.average}
                    </div>
                  )}

                  {activeShow.officialSite && (
                    <div className="show-info_site mb-1">
                      <a
                        href={`${activeShow.officialSite}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <strong>Official Site</strong>
                      </a>
                    </div>
                  )}
                  {activeShow.summary && (
                    <div className="show-info_about flex">
                      <strong>story : </strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: activeShow.summary,
                        }}
                      ></span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Show;
