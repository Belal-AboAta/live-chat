import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { socket } from "@/network/socket";
import type { IMessage } from "@/types/message";
import type { IUser } from "@/types/user";

export const useMessage = (user: IUser) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSendMessage = (message: string) => {
    const newMessage: IMessage = {
      id: uuidv4(),
      chatId: "1",
      senderId: user.id,
      content: message,
      timestamp: new Date(),
      avatarUrl: user.avatarUrl,
    };
    socket.emit("chat message", newMessage);
  };

  const onAttachFile = () => {
    // TODO: add logic for attaching files
  };

  const onVioceInput = () => {
    // TODO: add logic for voice input
  };

  // useEffect(() => {
  //  // TODO: fetch initial messages from server
  // }, []);

  useEffect(() => {
    socket.on("chat message", (message: IMessage) => {
      message.isUser = message.senderId === user.id;
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [user.id]);

  return {
    messages,
    onSendMessage,
    onAttachFile,
    onVioceInput,
  };
};
