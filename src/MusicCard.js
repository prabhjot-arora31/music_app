import React from "react";

function MusicCard({ Data }) {
  return (
    <div
      className="dabba"
      style={{
        margin: "10px",
        cursor: "pointer",
        border: "2px solid black",
        // padding: "20px",
        // height: `${Data.album.cover_xl ? "650px" : "200px"}`,
      }}
    >
      <div className="dabba">
        <img
          src={`${
            Data.album.cover_xl
              ? Data.album.cover_xl
              : "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjkxNDg1MjEy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
          }`}
          style={{ width: "100%" }}
          alt=""
          sizes=""
          srcset=""
        />
      </div>
      <div
        className="imgBack"
        style={{
          margin: 0,
          padding: "8px",
          position: "relative",
          top: "-2px",
        }}
      >
        <h4 style={{ textAlign: "center" }}>Title: {Data.album.title}</h4>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <h5 style={{ textAlign: "center" }}>Author: {Data.artist.name}</h5>
          <div style={{ width: "100px" }}>
            <img
              src={`${Data.artist.picture}`}
              style={{ width: "100%" }}
              alt=""
              sizes=""
              srcset=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "7.5px",
            flexWrap: "wrap",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Preview:</h4>
          <audio
            src={`${Data.preview}`}
            controlsList="nodownload"
            controls
          ></audio>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
