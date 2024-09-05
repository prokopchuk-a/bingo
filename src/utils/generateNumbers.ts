type Row = (number)[];
type Numbers = Row[];

export const generateNumbers = (): (number | null)[][] => {
  const ranges: Numbers = [
    [1, 9],
    [10, 19],
    [20, 29],
    [30, 39],
    [40, 49],
    [50, 59],
    [60, 69],
    [70, 79],
    [80, 90]
  ];

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const card: (number | null)[][] = Array.from({ length: 3 }, () => Array(9).fill(null));
  const usedNumbers = new Set<number>();

  for (let row = 0; row < 3; row++) {
    const rowNumbers = new Set<number>();
    while (rowNumbers.size < 5) {
      const col = Math.floor(Math.random() * 9);
      const num = getRandomNumber(ranges[col][0], ranges[col][1]);
      if (!rowNumbers.has(num) && !usedNumbers.has(num)) {
        rowNumbers.add(num);
        usedNumbers.add(num);
        card[row][col] = num;
      }
    }
  }

  return card;
};