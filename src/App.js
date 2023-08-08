import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import MusicCard from "./MusicCard";

function App() {
  const [song, setSong] = useState("");
  const [Data, setData] = useState([]);
  const [title, setTitle] = useState("");
  async function call() {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: `${song}` },
      headers: {
        "X-RapidAPI-Key": "6b27eda253msh9e2953c59dbe5dap1516c6jsn3848acb69309",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    await Axios.request(options)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        console.log(typeof Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onclick() {
    if (window.navigator.onLine) call();
    else alert("Please check your internet connection....");
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Search Music....</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name="music"
          placeholder="Enter any music...."
          style={{
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "7px",
            border: "2px solid black",
          }}
          onChange={(e) => {
            setSong(e.target.value);
          }}
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "20px",
            paddingLeft: "19px",
            cursor: "pointer",
            border: "none",
            paddingRight: "19px",
          }}
          onClick={call}
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "25px",
        }}
      >
        {Data &&
          Data.map((ele) => {
            return <MusicCard Data={ele} key={ele.preview} />;
          })}
      </div>
    </>
  );
}

export default App;
