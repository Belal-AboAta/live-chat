export const messages = [];

export function addMessage(message) {
  messages.push(message);
}

export function getMessageById(id) {
  return messages.find((message) => message.id === id);
}

export function updateSentStatus(id, status) {
  const message = getMessageById(id);
  if (message) {
    message.isSent = status;
  }
}

export function updateReceivedStatus(id, status) {
  const message = getMessageById(id);
  if (message) {
    message.isReceived = status;
  }
}

export function updateReadStatus(id, status) {
  const message = getMessageById(id);
  if (message) {
    message.isRead = status;
  }
}

export function updateAllMessagesStatus(statusType, status) {
  messages.forEach((message) => {
    if (statusType === "sent") {
      message.isSent = status;
    } else if (statusType === "received") {
      message.isReceived = status;
    } else if (statusType === "read") {
      message.isRead = status;
    }
  });
}
