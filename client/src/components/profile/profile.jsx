import "./profile.css";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useUserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfileTab = () => {
  const navigate = useNavigate();
  const [profileTab, setProfileTab] = useState(true);
  const { user, logOut, googleSignIn } = useUserAuth();
  const username = user.displayName?.split(" ")[0];
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    await googleSignIn();
  };

  const Disable = () => {
    setProfileTab(!profileTab);
  };

  const today = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var Today =
    weekday[today.getDay()] +
    ", " +
    today.getDate() +
    " " +
    months[today.getMonth()];

  return (
    <>
      <button id="profileButton" onClick={() => Disable()}>
        <BsFillPersonFill className="icon" id="profile-icon" />
      </button>
      {profileTab && (
        <div id="outerTab">
          <div id="iconTab">
            <h4 id="today">{Today}</h4>
            <IoMailOutline className="icons" />
          </div>
          <div id="searchbar">
            <AiOutlineSearch
              className="search-icon"
              onClick={() =>
                console.log(document.getElementById("searchInput").value)
              }
            />
            <input
              type="text"
              id="searchInput"
              placeholder="Search.."
              autoComplete="off"
            />
          </div>
          {user ? (
            <>
              <img src={user.photoURL} alt="profile" id="profileImage" />
              <div id="firstname">
                <p>
                  Hello{" "}
                  {username?.slice(0, 1).toUpperCase() +
                    username?.slice(1, username?.length).toLowerCase()}
                  !
                </p>
              </div>
              <button
                onClick={() => {
                  logOut();
                  navigate("../");
                }}
                className="navButton logout"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={handleGoogleSignIn} className="navButton">
                Login/SignUp
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileTab;
