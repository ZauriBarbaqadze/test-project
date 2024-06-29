import React from "react";
import man from "../../assets/Man.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const index = () => {
  const { userId } = useParams();
  const users = useSelector((state) => state.user.users);

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.cont}>
        <div className={styles.image}>
          <img src={user.image} alt="" />
        </div>
        <div className="text-center">
          <h1 className={styles.Name}>{user.name}</h1>
          <h2 className={styles.ShortDesc}>{user.position}</h2>
        </div>
        <div className="d-grid gap-2 col-6 buttonsi">
          <a
            className=" btn btn-light rounded-0"
            _blank="true"
            href={user.website}
          >
            WEBSITE
          </a>
          <a
            className=" btn btn-light rounded-0"
            href={user.portfolio}
            _blank="true"
          >
            PORTFOLIO
          </a>
          <a
            className=" btn btn-light rounded-0"
            href={user.services}
            _blank="true"
          >
            SERVICES
          </a>
          <a
            className=" btn btn-light rounded-0"
            href={user.contact}
            _blank="true"
          >
            CONTACT
          </a>
        </div>
        <div className="d-flex gap-2">
          <a href={user.instagram}>
            <FaInstagram size={40} color="white" />
          </a>
          <a href={user.facebook}>
            <FaFacebook size={40} color="white" />
          </a>
          <a href={user.twitter}>
            <FaTwitter size={40} color="white" />
          </a>
          <a href={user.discord}>
            <FaDiscord size={40} color="white" />
          </a>
        </div>
        <div className={styles.line}></div>
        <h2 className={styles.tag}>@zauribarbaqadze</h2>
      </div>
    </div>
  );
};

export default index;
