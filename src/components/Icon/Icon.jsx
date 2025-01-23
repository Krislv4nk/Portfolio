

import sprite from "../../assets/icons.svg";


const Icon = ({ id, className, width = 24, height = 24, stroke = "currentColor" }) => (
  <svg className={className} width={width} height={height} fill={stroke} aria-hidden="true">
    <use xlinkHref={`${sprite}#icon-${id}`} />
  </svg>
);

export default Icon;
