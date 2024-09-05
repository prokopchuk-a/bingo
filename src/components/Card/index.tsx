import { useState } from 'react';
import { generateNumbers } from '../../utils/generateNumbers';
import styles from './style.module.css';

type Row = (number | null)[];
type Numbers = Row[];

const LotoCard: React.FC = () => {
  const [numbers, setNumbers] = useState<Numbers>(generateNumbers());

  const handleRegenerate = () => {
    setNumbers(generateNumbers());
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {numbers.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((num, colIndex) => (
              <div key={colIndex} className={styles.cell}>
                {num !== null ? num : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleRegenerate}>Regenerate</button>
    </div>
  );
};

export default LotoCard;
