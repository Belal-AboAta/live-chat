import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { socket } from "@/network/socket";
import type { IMessage } from "@/types/message";

export const useMessage = () => {
  socket.connect();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const userId = uuidv4();

  const onSendMessage = (message: string) => {
    const newMessage: IMessage = {
      id: uuidv4(),
      chatId: "1",
      senderId: userId,
      content: message,
      timestamp: new Date(),
      avatarUrl: "https://i.pravatar.cc/150?img=3",
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
    console.log("Setting up socket listener for chat messages");
    socket.on("chat message", (message: IMessage) => {
      message.isUser = message.senderId === userId;
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [userId]);

  return {
    messages,
    onSendMessage,
    onAttachFile,
    onVioceInput,
  };
};
