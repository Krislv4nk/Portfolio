import { Link } from "react-router-dom";
import css from "./Docs.module.css";
import cv from "../../../assets/cv.jpg";
import certificate from "../../../assets/certificate.jpg";


export const Docs = () => {
    return (
        <div className={css.docBox}>
          <div className={css.education}>
            <h3 className={css.title}>Education</h3>
            <Link
              title="View Certificate"
              rel="noreferrer"
              target="_blank"
              to={
                "https://drive.google.com/file/d/1dBRSm8ID4ucfYNSoIxbyjqceRLZstCQQ/view?usp=sharing"
              }
          >
            
              <img
                className={css.cv}
                src={certificate}
                alt="cv" />
            </Link>
          </div>
          <div className={css.education}>
            <h3 className={css.title}>CV</h3>

            <Link
              title="View CV"
              rel="noreferrer"
              target="_blank"
              to={
                "https://drive.google.com/file/d/180nWHjQMIeO7E1NlPrZHdAYsYJNMN71u/view?usp=sharing"
              }
            >
              <img
                className={css.cvRight}
                src={cv}
                alt="cv"/>
            </Link>
          </div>
        </div>
    )
}