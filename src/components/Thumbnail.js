import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import moment from "moment";

const Thumbnail = ({ property, houseHover }) => {
  return (
    <Link
      to={`/property/${property.id}`}
      className="card link"
      onMouseEnter={(e) => houseHover(property.id)}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url('${property.Photos[0]}')`,
        }}
      >
        <Favorite id={property.id} isThumbnail={true} />
      </div>

      <div className="content">
        <small className="meta">
          {property.category.name} • {property.Bedrooms} Bedrooms •{" "}
          {property.Bathrooms} Bathrooms • {property.SquareFeet} Sq.Ft.
        </small>
        <h2>{property.Title}</h2>
        <small className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>{property.Address}</span>
        </small>
        <span className="price">
          ${Number(property.Price).toLocaleString()}
        </span>
        <span className="listed-date">
          Listed: {moment(property.Listed).fromNow()}
        </span>
      </div>
    </Link>
  );
};

export default Thumbnail;
