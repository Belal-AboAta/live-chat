import * as React from "react";

export const ChatsList: React.FC = () => {
  return (
    <div className="w-1/5 max-h-full bg-white rounded-lg shadow-md p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <ul className="overflow-y-auto h-full"></ul>
    </div>
  );
};
