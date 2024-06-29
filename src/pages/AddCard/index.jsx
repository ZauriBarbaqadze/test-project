// index.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { addUser } from "../../services/userSlice";

const Index = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [website, setWebsite] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      position,
      website,
      portfolio,
      instagram,
      facebook,
      twitter,
    };
    dispatch(addUser(userData));
    console.log(userData);
    setName("");
    setPosition("");
    setWebsite("");
    setPortfolio("");
    setInstagram("");
    setFacebook("");
    setTwitter("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Create User</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control bc"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Your Position
            </label>
            <input
              type="text"
              className="form-control bc"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Your Website Link
            </label>
            <input
              type="text"
              className="form-control bc"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="portfolio" className="form-label">
              Your Portfolio Link
            </label>
            <input
              type="text"
              className="form-control bc"
              id="portfolio"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="instagram" className="form-label">
              Your Instagram Link
            </label>
            <input
              type="text"
              className="form-control bc"
              id="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="facebook" className="form-label">
              Your Facebook Link
            </label>
            <input
              type="text"
              className="form-control bc"
              id="facebook"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="twitter" className="form-label">
              Your Twitter Link
            </label>
            <input
              type="text"
              className="form-control bc"
              id="twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
