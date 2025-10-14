import * as React from "react";

import { ChatWindow } from "@/components/ChatWindow";
import { ChatsList } from "@/components/ChatsList";

export const ChatApp: React.FC = () => {
  return (
    <div className="flex h-screen gap-8 p-8">
      <ChatsList />
      <ChatWindow />
    </div>
  );
};
