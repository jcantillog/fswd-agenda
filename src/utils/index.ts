const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const getContactAvatarSrc = (seed?: number) =>
  `https://api.dicebear.com/7.x/miniavs/svg?seed=${
    seed || getRandomNumber(700)
  }`;

export { getRandomNumber, getContactAvatarSrc };
