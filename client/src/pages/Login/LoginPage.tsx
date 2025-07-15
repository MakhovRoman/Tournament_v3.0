import { FormModule } from '@/modules/Form';
import styles from './styles.module.scss';

export const LoginPage = () => {
    return (
        <>
            <h1 className={styles.title}>Login Page</h1>
            <div>
                <FormModule>
                    I am form module!
                </FormModule>
            </div>
        </>
    )
}
