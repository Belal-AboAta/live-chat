import clsx from "clsx";
import * as React from "react";
import { useMemo } from "react";
import { Check, CheckCheck } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  avatarUrl?: string;
  isSent?: boolean;
  isRecieved?: boolean;
  isRead?: boolean;
}
export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser = false,
  avatarUrl,
  isSent,
  isRecieved,
  isRead,
}) => {
  const messageSymbol = useMemo(() => {
    let symbol;
    if (isSent) {
      symbol = <Check color="#000000" />;
    }

    if (isRecieved) {
      symbol = <CheckCheck color="#000000" />;
    }
    if (isRead) {
      symbol = <CheckCheck color="#4ade80" />;
    }

    return symbol;
  }, [isSent, isRecieved, isRead]);
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
      <div className="relative">
        <p
          className={clsx(
            "mb-2 p-6 rounded-xl max-w-xs text-black wrap-break-word",
            isUser ? "bg-white rounded-tr-none" : "bg-primary",
          )}
        >
          {message}
        </p>

        {isUser && (
          <span className="absolute bottom-3 right-2 text-xs flex items-center gap-1 size-4">
            {messageSymbol}
          </span>
        )}
      </div>
    </div>
  );
};
