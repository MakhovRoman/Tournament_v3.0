import type { Props } from "./types";
import { Title } from "@components/shared/Title";
import * as React from "react";
import styles from './styles.module.scss';

export const FormModule: React.FC<Props> = ({
    children,
    title,
    titleSize,
}) => {

    return (
        <div className={ styles.form_layout }>
            <Title titleSize={ titleSize }>{ title }</Title>
            { children }
        </div>
    )
}
