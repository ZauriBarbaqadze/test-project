import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "../../components/modal/index";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaEdit,
} from "react-icons/fa";
import styles from "./styles.module.css";

const Index = () => {
  const { userId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [button, setButton] = useState("");
  const users = useSelector((state) => state.user.users);

  const user = users.find((user) => user.id === parseInt(userId));

  const buttonColors = ["red", "blue", "green", "yellow", "purple", "black"];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Modal
        title="Change Profile Settings"
        content={
          <div>
            <div>
              <label htmlFor="inputPassword5" className="form-label">
                Change Your Background Image, Paste Link
              </label>
              <input
                type="text"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div>
              <p>Change Your Buttons Color</p>
              <div className={styles.colorContainer}>
                {buttonColors.map((color, index) => (
                  <div
                    onClick={(e) => setButton(color)}
                    key={index}
                    className={styles.ColorFrame}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <form>
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
              <div id="passwordHelpBlock" className="form-text">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
            </form>
          </div>
        }
        visible={modalOpen}
      />
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
            className="btn btn-light rounded-0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: button, border: button }}
            href={user.website}
          >
            WEBSITE
          </a>
          <a
            className="btn btn-light rounded-0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: button, border: button }}
            href={user.portfolio}
          >
            PORTFOLIO
          </a>
          <a
            className="btn btn-light rounded-0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: button, border: button }}
            href={user.services}
          >
            SERVICES
          </a>
          <a
            className="btn btn-light rounded-0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: button, border: button }}
            href={user.contact}
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
      <button onClick={() => setModalOpen(true)} className={styles.editBtn}>
        <FaEdit size={25} color="white" />
      </button>
    </div>
  );
};

export default Index;
