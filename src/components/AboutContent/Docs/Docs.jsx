
import css from "./Docs.module.css";
import cv from "../../../assets/cv.jpg";
import certificate from "../../../assets/certificate.jpg";
import { Lens } from "@/components/magicui/lens";


export const Docs = () => {
  return (
    <div className={css.docBox}>
      <div className={css.education}>
  <div className={css.accents}>
    <div className={css.accCard}></div>
    <div className={css.accCard}></div>
    <div className={css.accCard}></div>

    <div className={css.lightTopRight}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 487 487"
        className={css.lightSvg}
      >
        <circle cx="243" cy="243.5" r="233" fill="none" opacity=".1" stroke="#aaa" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
        <circle cx="243.5" cy="243.5" r="243" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <circle cx="243" cy="243.5" r="222" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <path d="m10,243.5C10,114.82,114.32,10.5,243,10.5" fill="none" stroke="#ddd" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
      </svg>
    </div>
    <div className={css.topLight}></div>
  </div>

  <Lens>
    <img className={css.cv} src={certificate} alt="cv" />
  </Lens>
  <div className={css.linksItem}>
    <a
      href="https://drive.google.com/file/d/1dBRSm8ID4ucfYNSoIxbyjqceRLZstCQQ/view?usp=sharing"
      title="View Certificate"
      rel="noreferrer"
      target="_blank"
      className={css.link}
    >
      View Certificate
    </a>
        </div>

        <div className={css.lightBottomLeft}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 487 487"
        className={css.lightSvg}
      >
        <circle cx="243" cy="243.5" r="233" fill="none" opacity=".1" stroke="#aaa" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
        <circle cx="243.5" cy="243.5" r="243" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <circle cx="243" cy="243.5" r="222" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <path d="m10,243.5C10,114.82,114.32,10.5,243,10.5" fill="none" stroke="#ddd" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
      </svg>
    </div>
</div>

      <div className={css.education}>
        <div className={css.accents}>
    <div className={css.accCard}></div>
    <div className={css.accCard}></div>
    <div className={css.accCard}></div>

    <div className={css.lightTopRight}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 487 487"
        className={css.lightSvg}
      >
        <circle cx="243" cy="243.5" r="233" fill="none" opacity=".1" stroke="#aaa" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
        <circle cx="243.5" cy="243.5" r="243" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <circle cx="243" cy="243.5" r="222" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <path d="m10,243.5C10,114.82,114.32,10.5,243,10.5" fill="none" stroke="#ddd" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
      </svg>
    </div>
    <div className={css.topLight}></div>
  </div>

        <Lens>
          <img className={css.cvRight} src={cv} alt="cv" />
        </Lens>
        <div className={css.linksItem}>
          <a
            href="https://drive.google.com/file/d/180nWHjQMIeO7E1NlPrZHdAYsYJNMN71u/view?usp=sharing"
            className={css.link}
            title="View CV"
            rel="noreferrer"
            target="_blank"
          >
          View CV
          </a>
        </div>
<div className={css.lightBottomLeft}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 487 487"
        className={css.lightSvg}
      >
        <circle cx="243" cy="243.5" r="233" fill="none" opacity=".1" stroke="#aaa" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
        <circle cx="243.5" cy="243.5" r="243" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <circle cx="243" cy="243.5" r="222" fill="none" stroke="#111" strokeLinecap="round" strokeMiterlimit="10" />
        <path d="m10,243.5C10,114.82,114.32,10.5,243,10.5" fill="none" stroke="#ddd" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="18" />
      </svg>
    </div>
        
      </div>
      
    </div>
  );
};
