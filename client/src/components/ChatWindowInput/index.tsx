import { ImageUp, Mic, Send } from "lucide-react";
import * as React from "react";

import { Input } from "../ui/input";
import { ChatWindowInputIcon } from "./ChatWindowInputIcon";

export interface ChatWindowInputProps {
  onSendMessage?: (message: string) => void;
  onAttachFile?: () => void;
  onVoiceInput?: () => void;
}

export const ChatWindowInput: React.FC<ChatWindowInputProps> = ({
  onSendMessage,
  onAttachFile,
  onVoiceInput,
}) => {
  const iconsSize = 5;

  const Icons = {
    image: <ImageUp className={`size-${iconsSize}`} />,
    mic: <Mic className={`size-${iconsSize}`} />,
    send: <Send className={`size-${iconsSize}`} />,
  };
  return (
    <div className="flex w-full items-center gap-2 p-4">
      <ChatWindowInputIcon icon={Icons.image} onClick={onAttachFile} />
      <ChatWindowInputIcon icon={Icons.mic} onClick={onVoiceInput} />
      <Input type="text" placeholder="Write your message..." />
      <ChatWindowInputIcon
        className="bg-primary text-white hover:bg-primary/20"
        icon={Icons.send}
        onClick={() => onSendMessage?.("")}
      />
    </div>
  );
};
