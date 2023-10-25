
import styles from  "./styles.module.scss"
export const BreadCrumbs = ({breadcrumbs}) => {
  return (
    <ul className={styles.breadcrumbs} data-testid='breadcrumbs'>
            {breadcrumbs.map((category: string) => (
                <li key={category}>
                    <a href='#'>{category}</a>
                </li>
            ))}
        </ul>
  )
}
