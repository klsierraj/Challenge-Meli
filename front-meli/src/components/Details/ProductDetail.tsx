
import styles from "./styles.module.scss"
export const ProductDetail = ({product}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
        <img src={product.picture} alt="picture" />
        </div>
        <div>
          <p>{product.condition} - {product.sold_quantity} vendidos</p>
          <p>{product.title}</p>
          <p>$ {product.price.amount.toLocaleString('es-AR')}</p>
          <button className={styles.buy_btn}>Comprar</button>
        </div>
    
      
      </div>
      <div className={styles.description_container}>
        <h2>Descripcion del producto</h2>
        <p className={styles.description}>{product.description}</p>

      </div>
 

    </section>
  )
}
