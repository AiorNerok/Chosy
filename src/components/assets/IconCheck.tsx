import { IconProps } from "src/types";

export const IconCheck = ({
  size,
  height = "24",
  width = "24",
  strokeWidth = "2",
  strokeColor = "#A4A5AE",
}: IconProps) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L10.7689 16.8225C10.7217 16.8788 10.6656 16.9234 10.6038 16.9539C10.5421 16.9843 10.4759 17 10.4091 17C10.3423 17 10.2761 16.9843 10.2144 16.9539C10.1527 16.9234 10.0966 16.8788 10.0494 16.8225L5 11.569"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
