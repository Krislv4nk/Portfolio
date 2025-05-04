
import { Marquee } from "../../Marquee/Marquee.tsx";
import { skills } from "../../../lib/variables/variables.js";
import Icon from "../Icon/Icon.jsx";
import css from "./Tools.module.css";

export const Tools = () => {
    
    const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
    const secondRow = skills.slice(Math.ceil(skills.length / 2));
    return (
        <div className={css.toolBox}>
            <h3 className={css.title}>Tech Stack, Tools and Technologies:</h3>
            <Marquee pauseOnHover className={css.marquee}>
                {firstRow.map(({ name, iconId }, index) => (
                    <div key={index} className={css.skillList}>
                        <span className={css.item}><Icon id={iconId} className={css.icon} />{name}</span>
                    </div>
                ))}
            </Marquee>

            <Marquee reverse pauseOnHover className={css.marquee}>
                {secondRow.map(({ name, iconId }, index) => (
                    <div key={index} className={css.skillList}>
                        <span className={css.item}>
                            <Icon id={iconId} className={css.icon} />{name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}