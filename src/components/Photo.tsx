import { FC } from "react";
import { PhotoComponentProps } from "src/types";

export const Photo: FC<PhotoComponentProps> = ({
  isSelect,
  size = "75",
  src,
  handlerToggle,
  classes
}) => {
  return (
    <div
      onClick={handlerToggle}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={`rounded-full box-border border-2 ${classes} ${
        isSelect ? "border-chosy-purple" : "border-transparent"
      }`}
    >
      <img className="w-full h-full" src={src} alt="pokemon pic" />
    </div>
  );
};
