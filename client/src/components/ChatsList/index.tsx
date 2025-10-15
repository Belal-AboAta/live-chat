import * as React from "react";

import type { IUser } from "@/types/user";
import { ChatUser } from "./ChatUser";

export interface ChatsListProps {
  users: IUser[];
}

export const ChatsList: React.FC<ChatsListProps> = ({ users = [] }) => {
  const handleChatClick = (userId: string) => {
    console.log("Chat clicked:", userId);
  };
  return (
    <div className="w-1/5 max-h-full bg-white rounded-lg shadow-md p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <ul className="overflow-y-auto h-full space-y-1 w-full">
        {users.map((user) => (
          <ChatUser key={user.id} user={user} onClick={handleChatClick} />
        ))}
      </ul>
    </div>
  );
};
