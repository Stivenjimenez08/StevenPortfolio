import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import photo from "../../../assets/fotohv.jpg";
import "../../StyleComponent.css"

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="contentHome">
      <div className="contentPersonalInfo">
        <Typography id="name">Steveen Jimenez Zuluaga</Typography>
        <Typography id="profession">{t("profession")}</Typography>
      </div>
      <div className="contentInfo">
        <img src={photo} alt="Photo About Me" className="photo" />
        <div className="contentDescription">
          <Typography id="description">{t("home")}</Typography>
        </div>
      </div>
    </div>
  );
};
