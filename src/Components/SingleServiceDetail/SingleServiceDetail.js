import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleServiceDetail.css";
const SingleServiceDetail = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleServiceDetails, setSingleServiceDetails] = useState({});

  // load the all serviceDetail
  useEffect(() => {
    const url = "/serviceDetail.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data.serviceDetail));
  }, []);

  // load the single service detail
  useEffect(() => {
    const showServiceDetail = serviceDetails.find(
      (serviceDetail) => serviceDetail.id === id
    );
    setSingleServiceDetails(showServiceDetail);
  }, [serviceDetails]);
  return (
    <div className="">
      <div className="service-detail">
        <div className="col-md-6 col-sm-12 text-start service-tags">
          <h6 className="fw-bolder">{singleServiceDetails?.name}</h6>
          <p className="text-muted fw-bolder">
            {singleServiceDetails?.description}
          </p>
          <button className="appointment-btn fw-bolder rounded-2">
            Buy Your Ticket
          </button>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            className="serviceDetail-img"
            src={singleServiceDetails?.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleServiceDetail;
