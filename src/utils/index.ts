export const getBrandAcronym = (brandName: string): string => {
  const words = brandName.split(" ").filter((word) => /^[a-zA-Z]+$/.test(word));

  const acronym = words.length > 1 ? words[0][0] + words[1][0] : words[0][0];

  return acronym.toUpperCase();
};

export const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
