import { useCallback, useEffect, useState } from "react";

import type { IUser } from "@/types/user";
import { socket } from "@/network/socket";
import { getRandomUser, getUsers } from "@/network/apis/users";

export const useUsers = () => {
  const [user, setUser] = useState<IUser>();
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchRandomUser = useCallback(async () => {
    const userData = await getRandomUser();
    setUser(userData);
  }, []);

  useEffect(() => {
    fetchRandomUser();
  }, [fetchRandomUser]);

  useEffect(() => {
    if (user) {
      socket.emit("user connected", user.id);

      const handleBeforeUnload = () => {
        socket.emit("user disconnected", user.id);
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [user]);

  useEffect(() => {
    socket.on("connected users", (Users: IUser[]) => {
      setUsers(Users.filter((u) => u.id !== user?.id));
    });

    return () => {
      socket.off("connected users");
    };
  }, [user?.id]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users.filter((u) => u.id !== user?.id));
    };
    if (user) {
      fetchUsers();
    }
  }, [user]);
  return { user, users };
};
