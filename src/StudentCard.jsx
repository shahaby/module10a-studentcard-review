/*
 This react component constructs a student card that displays name, major, year, bio, and image
 It uses props pass data to the component from outside
 It uses useState hooks for a button to toggle the visibility of the student's bio on or off
 */

import React from "react";

function StudentCard(props) {
  // Destructure props and storing individual properties in variables
  const { name, major, year, bio, imageUrl } = props;

  // useState hook to manage the visibility of bio
  // showBio is a boolean: determines if bio is shown or not
  // setShowBio is the function: updates showBio state
  const [showBio, setShowBio] = React.useState(false);

  // Func to toggle on/off showBio state
  const toggleBio = () => {
    // Updates showBio to opposite of current value
    setShowBio(!showBio);
  };
  return (
    <div
      style={{
        maxWidth: "350px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
        }}
      />
      <h2 style={{ margin: "0", fontSize: "22px" }}>{name}</h2>
      <p style={{ margin: "4px 0", fontSize: "16px" }}>
        {major} – {year}
      </p>
      <button
        onClick={
          // Call toggleBio func when button clicked
          toggleBio
        }
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          fontSize: "14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        {
          // Change button text according to showBio state
          showBio ? "Hide Bio" : "Show Bio"
        }
      </button>
      {
        // Show bio only if showBio is true
        showBio && <p style={{ marginTop: "16px", fontSize: "14px" }}>{bio}</p>
      }
    </div>
  );
}
export default StudentCard;
