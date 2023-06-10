import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rounded-3xl w-[358px] bg-white p-4">{children}</div>;
};
