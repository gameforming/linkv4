const MAX_MESSAGES = 1000;

export function saveMessages(userId, messages) {
  const trimmed = messages.slice(-MAX_MESSAGES);

  localStorage.setItem(
    `linkv4_messages_${userId}`,
    JSON.stringify(trimmed)
  );
}

export function loadMessages(userId) {
  const data = localStorage.getItem(
    `linkv4_messages_${userId}`
  );

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function clearMessages(userId) {
  localStorage.removeItem(
    `linkv4_messages_${userId}`
  );
}
