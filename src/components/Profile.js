import React from "react";
import { HelmetProvider } from "react-helmet-async";

function Profile({
  imgSrc = "./placeholderimage.jpeg",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,

  html_url,
}) {
  return (
    <>
    <HelmetProvider>
      <title>My Github Portfolio</title>
      <meta name="description" content="Frontend Developer" />
      <link rel="canonical" href="http://localhost:3001/portfolio/" />
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
        <img src={imgSrc} alt="Me" />
      </div>
      <h1 alt="profile name">{name}</h1>
      </div>
      <div id="profile-details">
        
        <p>{bio}</p>
        <p>{location}</p>
        <div>
          <a href="https://github.com/jeweleni?tab=followers">
            <button
              className="
          buttons"
            >
              Followers: {followers}
            </button>
          </a>
        </div>
        <div>
          <a href="https://github.com/jeweleni?tab=following">
            <button className="buttons">Following: {following}</button>
          </a>
        </div>

        <a href="https://twitter.com/jeweleni_diva/">
          <button className="btns">{twitter_username}</button>
        </a>

        <a href="https://github.com/jeweleni">
          <button className="btns">{html_url}</button>
        </a>
      </div>
    </div>
    </HelmetProvider>
    </>
  );
}

export default Profile;