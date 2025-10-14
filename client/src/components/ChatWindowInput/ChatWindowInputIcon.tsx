import clsx from "clsx";
import * as React from "react";

import { Button } from "../ui/button";

export interface ChatWindowInputIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export const ChatWindowInputIcon: React.FC<
  ChatWindowInputIconProps & React.ComponentProps<"button">
> = ({ icon, onClick, className, type }) => {
  return (
    <Button
      type={type ? type : "button"}
      variant="outline"
      className={clsx(
        "bg-gray-100 hover:bg-gray-400 cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};
