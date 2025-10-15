import * as React from "react";
import { motion, type Variants } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { IUser } from "@/types/user";

export interface UserTypingProps {
  users: IUser[];
}

export const UserTyping: React.FC<UserTypingProps> = ({ users }) => {
  const dotVariants: Variants = {
    jump: {
      y: -5,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      className="bg-white p-2 rounded w-full border border-gray-300 h-12 flex gap-2 items-center"
    >
      <div className="flex gap-1">
        {users.map((user) => (
          <motion.div
            key={user.id}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
          >
            <Avatar className="size-8">
              <AvatarImage src={user.avatarUrl} alt="avatar image" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.1, staggerDirection: -1 }}
        className="flex items-center justify-start gap-1 h-full"
      >
        <motion.div
          className="size-3 rounded-full bg-primary"
          variants={dotVariants}
        />
        <motion.div
          className="size-3 rounded-full bg-primary"
          variants={dotVariants}
        />
        <motion.div
          className="size-3 rounded-full bg-primary"
          variants={dotVariants}
        />
      </motion.div>
    </motion.div>
  );
};
