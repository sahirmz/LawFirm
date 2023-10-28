import React from "react";
import styles from "./PracticeArea.module.css";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
// import Typography from "@mui/material/Typography";
import BusinessLaw from "../../assets/BusinessLaw-1.svg";
import PartnershipLaw from "../../assets/PartnershipLaw-2.svg";
import RealStateLaw from "../../assets/RealStateLaw-3.svg";
import BusinessLaw2 from "../../assets/BusinessLaw-4.svg";
import LandLord from "../../assets/LandlordDisputes-5.svg";
import ElderAbuse from "../../assets/ElderAbuse-6.svg";

export default function PracticeArea() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.TitleText}>
        <h1>Area of Practices</h1>
      </div>
      <div className={styles.CardWrapper}>
        <div className={styles.CardSection}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.BigImage}
              sx={{
                height: 342,
                width: 752,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
              image={BusinessLaw}
              alt="BusinessLaw"
            />
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.SmallImage}
              sx={{
                height: 342,
                width: 358,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
              image={PartnershipLaw}
              alt="Partnership img"
            />
          </Card>
        </div>

        <div className={styles.CardSection}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.SmallImage}
              sx={{
                height: 342,
                width: 358,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
              image={RealStateLaw}
              alt="RealEstate"
            />
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.BigImage}
              sx={{
                height: 342,
                width: 752,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
              image={BusinessLaw2}
              alt="BusinessLaw2 img"
            />
          </Card>
        </div>

        <div className={styles.CardSection}>
          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.BigImage}
              sx={{
                height: 342,
                width: 752,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
              image={LandLord}
              alt="LandLord"
            />
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              className={styles.SmallImage}
              sx={{
                height: 342,
                width: 358,
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.05%, rgba(0, 0, 0, 0.60) 65.00%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
              }}
              image={ElderAbuse}
              alt="ElderAbuse img"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
