


"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import * as React from "react";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "dark" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "dark" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "light" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}


// const iconSlugs = [
      //   "react", "javascript", "node-dot-js", "html5", "css3", "git", "postman", "vite",
      //       "redux", "typescript", "express", "mongodb", "git", "figma", "material-ui",
      //   "axios", "jwt","rest-api"
      //     ];
      

//       const slugs = [
//   "typescript",
//   "javascript",
//   "dart",
//   "java",
//   "react",
//   "flutter",
//   "android",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "prisma",
//   "amazonaws",
//   "postgresql",
//   "firebase",
//   "nginx",
//   "vercel",
//   "testinglibrary",
//   "jest",
//   "cypress",
//   "docker",
//   "git",
//   "jira",
//   "github",
//   "gitlab",
//   "visualstudiocode",
//   "androidstudio",
//   "sonarqube",
//   "figma",
// ];

{/* <div className={css.cloudBgn}>
                            
                            <IconCloud iconSlugs={iconSlugs} />
                            </div> */}