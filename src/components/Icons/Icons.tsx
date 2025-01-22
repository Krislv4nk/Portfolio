

"use client";

import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { fetchSimpleIcons, SimpleIcon, renderSimpleIcon } from "react-icon-cloud";
import { useTheme } from "next-themes";

type IconsProps = {
  iconSlugs: string[];
};

export const Icons = ({ iconSlugs }: IconsProps) => {
  const [data, setData] = useState<SimpleIcon[] | null>(null);
    const { theme } = useTheme();
    
    

  useEffect(() => {
    
    fetchSimpleIcons({ slugs: iconSlugs }).then((result) =>
      setData(Object.values(result.simpleIcons))
    );
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    const bgHex = theme === "dark" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "dark" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return data.map((icon) =>
      renderSimpleIcon({
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
      })
    );
  }, [data, theme]);

    
  
  return <>{renderedIcons}</>;
};
