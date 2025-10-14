import * as React from "react";

export interface ChatHeaderProps {
  title: string;
  subtitle?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};
