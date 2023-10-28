import React from "react";
import styles from "./Clients.module.css";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import JaneCooper from "../../assets/JaneCooper.svg";
import DevonLane from "../../assets/DevonLane.svg";
import RobertFox from "../../assets/RobertFox.svg";
import Arrow from "../../assets/Arrow1.svg";

export default function Clients() {
  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.SectionHead}>
        <p className={styles.Ptext}>What says our happy Clients</p>
        <img className={styles.Arrows} src={Arrow} alt="Arrow" />
      </div>

      <div className={styles.ClientCards}>
        <Card sx={{ minWidth: 75 }} className={styles.Cards1}>
          <CardContent className={styles.ClientContent}>
            <img
              src={JaneCooper}
              alt="JaneCooper"
              className={styles.Clientimg}
            />
            <Typography
              variant="h5"
              component="div"
              className={styles.HeadText}
            >
              Jane Cooper
            </Typography>
            <Typography component="p" className={styles.ClientRole}>
              <p>CEO of Hunt</p>
            </Typography>
            <Typography component="p" className={styles.ClientInfo}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 75 }} className={styles.Cards2}>
          <CardContent className={styles.ClientContent}>
            <img src={DevonLane} alt="DevonLane" className={styles.Clientimg} />
            <Typography
              variant="h5"
              component="div"
              className={styles.HeadText}
            >
              Devon Lane
            </Typography>
            <Typography component="p" className={styles.ClientRole}>
              <p>CEO of Hunt</p>
            </Typography>
            <Typography component="p" className={styles.ClientInfo}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 75 }} className={styles.Cards1}>
          <CardContent className={styles.ClientContent}>
            <img src={RobertFox} alt="RobertFox" className={styles.Clientimg} />
            <Typography
              variant="h5"
              component="div"
              className={styles.HeadText}
            >
              Robert Fox
            </Typography>
            <Typography component="p" className={styles.ClientRole}>
              <p>CEO of Hunt</p>
            </Typography>
            <Typography component="p" className={styles.ClientInfo}>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
