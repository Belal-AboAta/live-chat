import * as React from "react";
import { useEffect, useRef } from "react";

import { useTyping } from "@/hooks/useTyping";
import type { IMessage } from "@/types/message";
import type { IUser } from "@/types/user";
import { ChatHeader } from "../ChatHeader";
import { ChatMessage } from "../ChatMessage";
import { ChatWindowInput } from "../ChatWindowInput";
import { UserTyping } from "../UserTyping";

export interface ChatWindowProps {
  currentUser: IUser;
  chatTitle?: string;
  chatSubtitle?: string;
  messages: IMessage[];
  onSendMessage: (message: string) => void;
  onAttachFile: () => void;
  onVioceInput: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  currentUser,
  chatTitle = "Chat Title",
  chatSubtitle = "Subtitle or status",
  messages,
  onSendMessage,
  onAttachFile,
  onVioceInput,
}) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { currentUsers, onTypingDebounce, onStopTypingDebounce } =
    useTyping(currentUser);

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
      {currentUsers && currentUsers.length > 0 && (
        <UserTyping users={currentUsers} />
      )}
      <ChatWindowInput
        onSendMessage={onSendMessage}
        onAttachFile={onAttachFile}
        onVoiceInput={onVioceInput}
        onTyping={() => {
          onTypingDebounce(currentUser);
          onStopTypingDebounce(currentUser);
        }}
      />
    </div>
  );
};
