const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const getContactAvatarSrc = () =>
  `https://api.dicebear.com/7.x/miniavs/svg?seed=${getRandomNumber(700)}`;

export { getRandomNumber, getContactAvatarSrc };
