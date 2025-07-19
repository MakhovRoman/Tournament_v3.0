import { Input } from 'antd';
import type { ElemInputProps } from './types';

export const ElemInput = ({
    id,
    disabled,
    status,
    size,
    type,
    value,
    variant,
    onChange
}: ElemInputProps) => {
    return (
        <Input
            id = {id}
            disabled={disabled}
            status={status}
            size={size}
            type={type}
            value={value}
            variant={variant}
            onChange={onChange}
        />
    )
}
