import clsx from "clsx";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  avatarUrl?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser = false,
  avatarUrl,
}) => {
  return (
    <div
      className={clsx(
        "flex items-start mb-4 gap-4",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      {!isUser && avatarUrl && (
        <Avatar>
          <AvatarImage src={avatarUrl} alt="avatar image" />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
      )}
      <p
        className={clsx(
          "mb-2 p-4 rounded-xl max-w-xs text-black",
          isUser ? "bg-white rounded-tr-none" : "bg-primary",
        )}
      >
        {message}
      </p>
    </div>
  );
};
