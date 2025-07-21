import type { TitleProps } from "./types"
import * as React from "react";
import styles from "./styles.module.scss";

export const Title: React.FC<TitleProps> = ({
    children,
    titleSize
}) => {
    const Heading = titleSize;

    return (
        <Heading as={titleSize} className={styles.title}>{ children }</Heading>
    )
}