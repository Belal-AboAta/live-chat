import * as React from "react";
import { ChatHeader } from "../ChatHeader";
import { ChatMessage } from "../ChatMessage";
import { ChatWindowInput } from "../ChatWindowInput";

export const ChatWindow: React.FC = () => {
  return (
    <div className="w-4/5 flex flex-col h-full bg-white rounded-lg shadow-md">
      <ChatHeader title="Chat Title" subtitle="Subtitle or status" />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-200">
        {Array.from({ length: 20 }).map((_, index) => (
          <ChatMessage
            key={index}
            message="Hello! How can I help you today?"
            isUser={index % 2 === 0}
            avatarUrl={
              index % 2 === 0 ? undefined : "https://i.pravatar.cc/150?img=3"
            }
          />
        ))}
      </div>
      <ChatWindowInput />
    </div>
  );
};
