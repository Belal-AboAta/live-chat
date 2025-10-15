import { useEffect, useState } from "react";

import { debounce } from "@/lib/utils";
import { socket } from "@/network/socket";
import type { IUser } from "@/types/user";

export const useTyping = (currentUser: IUser) => {
  const [currentUsers, setCurrentUsers] = useState<IUser[]>();
  const onTyping = (user: IUser) => {
    socket.emit("user typing", user);
  };

  const onStopTyping = (user: IUser) => {
    socket.emit("user stop typing", user);
  };

  const onTypingDebounce = debounce<(user: IUser) => void>(onTyping, 300);
  const onStopTypingDebounce = debounce<(user: IUser) => void>(
    onStopTyping,
    3000,
  );

  useEffect(() => {
    socket.on("user typing", (users: IUser[]) => {
      setCurrentUsers(
        users.filter((u) => u.id !== currentUser.id && u.isTyping),
      );
    });

    return () => {
      socket.off("user typing");
    };
  }, [currentUser.id]);

  useEffect(() => {
    socket.on("user stop typing", (users: IUser[]) => {
      setCurrentUsers(
        users.filter((u) => u.id !== currentUser.id && u.isTyping),
      );
    });
  }, [currentUser.id]);

  return { currentUsers, onTypingDebounce, onStopTypingDebounce };
};
