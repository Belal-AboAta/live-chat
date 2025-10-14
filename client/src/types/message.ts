export interface IMessage {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isUser?: boolean;
  avatarUrl?: string;
}
