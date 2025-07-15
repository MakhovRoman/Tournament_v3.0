import type { Props } from "./types";
import styles from './style.module.scss';

export const MainLayout = ({children}: Props) => {
    return(
        <main className={styles.main}>
            { children }
        </main>
    )
}
