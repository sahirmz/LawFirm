import React from "react";
import styles from "./WhyChooseUs.module.css";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import GiftImage from "../../assets/GiftLogo-1.svg";

export default function WhyChooseUs() {
  return (
    <div className={styles.SectionWrap}>
      <div className={styles.HeadTitle}>
        <p>Why Choose us?</p>
      </div>
      <div className={styles.CardWrapper}>
        <div className={styles.ContentWrap}>
          <Card sx={{ minWidth: 75 }} className={styles.Cards}>
            <CardContent>
              <img src={GiftImage} alt="Giftimg" className={styles.GiftLogo} />
              <Typography
                variant="h5"
                component="div"
                className={styles.HeadText}
              >
                98% Success Rate
              </Typography>
              <Typography component="div" className={styles.pText}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </Typography>
            </CardContent>
            <Chip label="Read More" className={styles.pill} />
          </Card>
        </div>

        <div className={styles.ContentWrap}>
          <Card sx={{ minWidth: 75 }} className={styles.middleCard}>
            <CardContent>
              <img src={GiftImage} alt="Giftimg" className={styles.GiftLogo} />
              <Typography
                variant="h5"
                component="div"
                className={styles.HeadText}
              >
                100% Success Rate
              </Typography>
              <Typography component="div" className={styles.pText}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </Typography>
            </CardContent>
            <Chip label="Read More" className={styles.pill} />
          </Card>
        </div>

        <div className={styles.ContentWrap}>
          <Card sx={{ minWidth: 75 }} className={styles.Cards}>
            <CardContent>
              <img src={GiftImage} alt="Giftimg" className={styles.GiftLogo} />
              <Typography
                variant="h5"
                component="div"
                className={styles.HeadText}
              >
                100% Success Rate
              </Typography>
              <Typography component="div" className={styles.pText}>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>
              </Typography>
            </CardContent>
            <Chip label="Read More" className={styles.pill} />
          </Card>
        </div>
      </div>
    </div>
  );
}
