import { IconProps } from "src/types";

export const IconBack = ({
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
        d="M15 18L9.12053 12.2827C9.08232 12.2456 9.05201 12.2015 9.03133 12.153C9.01065 12.1045 9 12.0525 9 12C9 11.9475 9.01065 11.8955 9.03133 11.847C9.05201 11.7985 9.08232 11.7544 9.12053 11.7173L15 6"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
