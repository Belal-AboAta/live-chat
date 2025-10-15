import * as React from "react";
import { useEffect, useRef } from "react";

import { ChatHeader } from "../ChatHeader";
import { ChatMessage } from "../ChatMessage";
import { ChatWindowInput } from "../ChatWindowInput";
import type { IMessage } from "@/types/message";

export interface ChatWindowProps {
  chatTitle?: string;
  chatSubtitle?: string;
  messages: IMessage[];
  onSendMessage: (message: string) => void;
  onAttachFile: () => void;
  onVioceInput: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  chatTitle = "Chat Title",
  chatSubtitle = "Subtitle or status",
  messages,
  onSendMessage,
  onAttachFile,
  onVioceInput,
}) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-4/5 flex flex-col h-full bg-white rounded-lg shadow-md">
      <ChatHeader title={chatTitle} subtitle={chatSubtitle} />
      <div
        className="flex-1 p-4 overflow-y-auto bg-gray-200"
        ref={messagesContainerRef}
      >
        {/* TODO: add empty messages view */}
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isUser={message.isUser}
            avatarUrl={message.avatarUrl}
          />
        ))}
      </div>
      <ChatWindowInput
        onSendMessage={onSendMessage}
        onAttachFile={onAttachFile}
        onVoiceInput={onVioceInput}
      />
    </div>
  );
};
