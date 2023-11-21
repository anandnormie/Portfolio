import "./works.scss";
import { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      lin: "https://anandnormie.github.io/Basic_project/",
      title: "E-Commerce Website",
      desc:
        "This is an E-commerce website made using HTML,CSS and JavaScript which enables people to buy from a wide range of Electronics goods. ",
      img:
        "./assets/project.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      lin: "https://anandnormie.github.io/Tic-Tac-Toe/",
      title: "Web Game",
      desc:
        "This Tic-Tac-Toe Game was build using JavaScript and enables two players to play simultaneosly.When someone wins the Game sends a notification and the game ends",
      img:
        "./assets/tictactoe.png",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Web App",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.lin}>Project</a></span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>))
        }
      </div>
      <ArrowForwardIos className="arrow right" onClick={() => handleClick("right")} />
      <ArrowBackIos className="arrow left" onClick={() => handleClick("left")} />
    </div>
  );
}

