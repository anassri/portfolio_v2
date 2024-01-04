import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";

type StickyProps = {
  children: string | JSX.Element | string[];
  position: "top" | "bottom" | "left" | "right";
  stuckClasses?: string;
  unstuckClasses?: string;
  stuckStyles?: CSSProperties;
  unstuckStyles?: CSSProperties;
};

export const Sticky: FunctionComponent<StickyProps> = ({
  children,
  position,
  stuckClasses,
  stuckStyles,
  unstuckClasses,
  unstuckStyles,
}) => {
  const [stuck, setStuck] = useState(false);
  const [ref, inView] = useInView({ threshold: 1, rootMargin: "-50px 0px" });

  const classes = stuck ? stuckClasses : unstuckClasses;
  const styles = stuck ? stuckStyles : unstuckStyles;

  const inlineStyles: CSSProperties = {
    position: "sticky",
    ...styles,
  };

  switch (position) {
    case "top":
      inlineStyles.top = -1;
      break;
    case "bottom":
      inlineStyles.bottom = -1;
      break;
    case "left":
      inlineStyles.left = -1;
      break;
    case "right":
      inlineStyles.right = -1;
      break;
  }

  useEffect(() => {
    if (inView) {
      setStuck(false);
    } else {
      setStuck(true);
    }
  }, [inView]);

  return (
    <div style={inlineStyles} className={classes} ref={ref}>
      {children}
    </div>
  );
};
