
import css from "./Docs.module.css";
import cv from "../../../assets/cv.jpg";
import certificate from "../../../assets/certificate.jpg";
import { Lens } from "@/components/magicui/lens";
import icons from '../../../assets/sprite.svg';


export const Docs = () => {
    return (
        <div className={css.docBox}>
        <div className={css.education}>
          <Lens>
              <img
                className={css.cv}
                src={certificate}
                alt="cv" />
              </Lens>
            <a
              title="View Certificate"
              rel="noreferrer"
              target="_blank"
              href=
                "https://drive.google.com/file/d/1dBRSm8ID4ucfYNSoIxbyjqceRLZstCQQ/view?usp=sharing"
            className={css.link}
          ><svg className={css.repoLinkIcon}>
              <use href={`${icons}#icon-link`}></use>
            </svg>Education</a>
          </div>
          <div className={css.education}>
              <Lens><img
                className={css.cvRight}
                src={cv}
              alt="cv" />
          </Lens>
          <a
              title="View CV"
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/180nWHjQMIeO7E1NlPrZHdAYsYJNMN71u/view?usp=sharing"
            className={css.link}
            ><svg className={css.repoLinkIcon}>
              <use href={`${icons}#icon-link`}></use>
            </svg>CV</a>
          </div>
        </div>
    )
}