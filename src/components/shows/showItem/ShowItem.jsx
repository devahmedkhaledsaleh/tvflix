import React from "react";
import { Link } from "react-router-dom";
import noImg from "../../../assets/images/no-img.png";

const ShowItem = (props) => {
  const { show } = props;
  return (
    <Link to={`/shows/${show.id}`} className="show-item">
      <div className="show-item_img">
        <img
          src={show.image && show.image.medium ? show.image.medium : noImg}
          alt={show.name ? show.name : "ShowImage"}
        />
        <div className="show-item_img-hover">
          <div className="rating">
            {show.rating && show.rating.average && (
              <>
                <span>star</span> {show.rating.average}
              </>
            )}
          </div>

          <h3 className="title"> {show.name ? show.name : "..."}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ShowItem;
