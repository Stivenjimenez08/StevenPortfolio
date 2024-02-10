import React, { useEffect, useState } from "react";
import linkedIn from "../../../assets/linkedin.png";
import github from "../../../assets/github-sign.png";
import whatsapp from "../../../assets/whatsapp.png";
import "../../StyleComponent.css"
import { DownloadButton } from "../../atoms/DownloadButton";

const LinkedIn = "https://www.linkedin.com/in/steveen-jimenez-719235255/"
const Github = "https://github.com/Stivenjimenez08"
const Whatsapp = "https://w.app/hgYBpy"
export const Network = () => {

  const [scrollY, setScrollY] = useState(0);
  const offset = 300;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contentNetwork" style={{ top: `${scrollY + offset}px `, position: "absolute" }}>
      <div class="image-container">
        <a href={LinkedIn} target="blank" className="socialLink"><img src={linkedIn} className="socialMedia" alt="linkedIn" /></a>
        <div class="image-name">LinkedIn</div>
      </div>
      <div class="image-container">
      <a href={Github} target="blank" className="socialLink"><img src={github}  className="socialMedia"alt="Github" /></a>
      <div class="image-name">Github</div>
      </div>
      <div class="image-container">
      <a href={Whatsapp} target="blank" className="socialLink"><img src={whatsapp}  className="socialMedia"alt="Whatsapp" /></a>
      <div class="image-name">Whatsapp</div>
      </div>
      <DownloadButton/>
    </div>
  );
};
