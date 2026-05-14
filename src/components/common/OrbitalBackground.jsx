import styles from "./OrbitalBackground.module.css";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const orbitIcons = [
  <FaReact />,
  <FaNodeJs />,
  <SiExpress />,
  <SiJavascript />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiTailwindcss />,
  <SiBootstrap />,
  <FaFigma />,
];

export default function OrbitalBackground() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.gradient}></div>

      <div className={`${styles.orbit} ${styles.orbitOne}`}>
        {orbitIcons.map((icon, i) => (
          <div
            key={i}
            className={styles.icon}
            style={{
              transform: `rotate(${i * 40}deg)
              translateX(var(--orbit1-radius))
              rotate(-${i * 40}deg)`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className={`${styles.orbit} ${styles.orbitTwo}`}>
        {orbitIcons.map((icon, i) => (
          <div
            key={i}
            className={styles.iconSecondary}
            style={{
              transform: `rotate(${i * 40}deg)
              translateX(var(--orbit2-radius))
              rotate(-${i * 40}deg)`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>

    </div>
  );
}