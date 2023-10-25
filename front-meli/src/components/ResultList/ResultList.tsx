import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss"

interface Result {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  address: string;
}

interface ResultListProps {
  results: Result[];
}

const ResultList: React.FC<ResultListProps> = ({ results }) => {
    return (
        <div className={styles.container}>
        {results.map((result) => (
          <div key={result.id} className={styles.result_item}>
            <img src={result.picture} alt={result.title} className="result-image" />
            <div className={styles.result_details}>
              <Link to={`/items/${result.id}`} className="result-title">{result.title}</Link>
              <p className="result-price"> ${result.price.amount.toLocaleString('es-AR')}</p>
            </div>
            <div>
              <p className={styles.address}>{result.address}</p>
            </div>
          </div>
        ))}
      </div>
      
    );
  };
  
  export default ResultList;
  
