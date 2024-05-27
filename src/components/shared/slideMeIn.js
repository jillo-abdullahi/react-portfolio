import { Slide } from "react-awesome-reveal";

export const SlideMeIn = ({
  children,
  triggerOnce = true,
  cascade = false,
  style,
}) => {
  return (
    <Slide
      direction="up"
      triggerOnce={triggerOnce}
      cascade={cascade}
      style={style}
    >
      {children}
    </Slide>
  );
};
