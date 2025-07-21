import { FormModule } from '@/modules/Form';
import styles from './styles.module.scss';
import {ElemInput} from "@/components/form/ElemInput";

export const LoginPage = () => {
    return (
        <>
            <div>
                <FormModule
                    title="Login"
                    titleSize="h1"
                >
                    <ElemInput
                        size="large"
                        type="text"
                    />
                    <ElemInput
                        size="large"
                        type="password"
                    />
                </FormModule>
            </div>
        </>
    )
}
