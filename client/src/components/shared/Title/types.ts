import type { JSX } from "react";

export type TitleProps = {
    children: string;
    titleSize: TitleSize;
};

type TitleSize = Extract<keyof JSX.IntrinsicElements, `h${1|2|3|4|5|6}`>;