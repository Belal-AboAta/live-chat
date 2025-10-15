export interface IUser {
  id: string;
  name: string;
  isConnected: boolean;
  isTyping?: boolean;
  avatarUrl: string;
}
