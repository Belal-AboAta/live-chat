import * as React from "react";
import { useEffect } from "react";

import { ChatWindow } from "@/components/ChatWindow";
import { ChatsList } from "@/components/ChatsList";
import { useMessage } from "@/hooks/useMessage";
import { useUsers } from "@/hooks/useUsers";
import { socket } from "@/network/socket";

export const ChatApp: React.FC = () => {
  const { user, users } = useUsers();
  const { messages, onSendMessage, onAttachFile, onVioceInput } = useMessage(
    user || { id: "", name: "", avatarUrl: "", isConnected: false },
  );

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <div className="flex h-screen gap-8 p-8">
      <ChatsList users={users} />
      <ChatWindow
        messages={messages}
        onSendMessage={onSendMessage}
        onAttachFile={onAttachFile}
        onVioceInput={onVioceInput}
      />
    </div>
  );
};
