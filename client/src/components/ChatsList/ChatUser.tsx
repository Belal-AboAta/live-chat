import clsx from "clsx";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import type { IUser } from "@/types/user";

export interface ChatUserProps {
  user: IUser;
  onClick: (id: string) => void;
}

export const ChatUser: React.FC<ChatUserProps> = ({
  user: { id, name, avatarUrl, isConnected },
  onClick,
}) => {
  return (
    <Button
      className="flex items-center xl:justify-start gap-4 px-2 py-8 rounded-none hover:bg-primary cursor-pointer w-full transition-colors duration-500"
      onClick={() => {
        onClick(id);
      }}
      variant="ghost"
    >
      <div className="relative">
        <Avatar className="size-12">
          <AvatarImage src={avatarUrl} alt="avatar image" />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
        <div
          className={clsx(
            "size-2 ring-2 ring-background rounded-full absolute bottom-0 right-0",
            isConnected ? "bg-green-500" : "bg-gray-400",
          )}
        ></div>
      </div>
      <p className="hidden xl:block text-gray-700 font-medium text-xl">
        {name}
      </p>
    </Button>
  );
};
