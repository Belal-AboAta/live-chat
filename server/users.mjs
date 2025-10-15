export const users = [
  {
    id: "1",
    name: "Mohamed Hany",
    isConnected: false,
    isSelected: false,
    isTyping: false,
    avatarUrl:
      "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRs86hFvI4k2pxAAuAKCvJduTV7NKv_bh8M00HHbsbXoFF0anF8JP-Bo9nY-7ft4_0v",
  },
  {
    id: "2",
    name: "Hamada Tolba",
    isConnected: false,
    isSelected: false,
    isTyping: false,
    avatarUrl:
      "https://img.a.transfermarkt.technology/portrait/big/158014-1513325588.jpg?lm=1",
  },
  {
    id: "3",
    name: "Ahmed Atef Kota",
    isConnected: false,
    isSelected: false,
    isTyping: false,
    avatarUrl: "https://semedia.filgoal.com/Photos/Person/Medium/222826.png",
  },
  {
    id: "4",
    name: "Shehata Abo Kf",
    isConnected: false,
    isSelected: false,
    isTyping: false,
    avatarUrl: "https://media.filfan.com/NewsPics/FilfanNew/large/314616_0.jpg",
  },
  {
    id: "5",
    name: "Sayed Neymar",
    isConnected: false,
    isSelected: false,
    isTyping: false,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaLHoQb_q3Mrvqc8I_NHFOG1rd_eUJ2SjdZXIQUSmb1BtcSE7ZmMTdlpJO_oFdfXqiRhcx6ifvxENYDJlII9oYkaLS3lZvNP5tm9F5i5I",
  },
];

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function setUserConnectionStatus(id, status) {
  const user = getUserById(id);
  if (user) {
    user.isConnected = status;
  }
}

export function toggleUserSelection(id, status) {
  const user = getUserById(id);
  if (user) {
    user.isSelected = status;
  }
}

export function resetUserSelections() {
  users.forEach((user) => {
    user.isSelected = false;
  });
}

export function getUser() {
  let selectedUser;
  for (const user of users) {
    if (!user.isSelected) {
      selectedUser = user;
    }
  }

  if (selectedUser) {
    return selectedUser;
  } else {
    return null;
  }
}

export function setUserTypingStatus(id, isTyping) {
  const user = getUserById(id);
  if (user) {
    user.isTyping = isTyping;
  }
}
