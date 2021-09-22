import { useCallback, useEffect, useState } from 'react';
import { InputProps, Input } from './input';
import { useDebounce } from '@/hooks/useDebounce';

export interface DebounceInputProps extends InputProps {
    debounce: number;
    onDebounceChange: (value: string) => void;
}

export function DebounceInput(props: DebounceInputProps) {
    const { value, debounce, onChange, onDebounceChange, ...inputProps } = props;
    const [inputValue, updateInputValue] = useState(value);
    const searchDebounced = useDebounce(inputValue, debounce);

    useEffect(() => {
        if (value !== searchDebounced) {
            onDebounceChange(searchDebounced);
        }
    }, [searchDebounced, value, onDebounceChange]);

    const updateLocalValue = useCallback((e) => {
        if (!!onChange) {
            onChange(e);
        }
        updateInputValue(e.target.value);
    }, [onChange, updateInputValue]);

    return (
        <Input value={inputValue} onChange={updateLocalValue} {...inputProps} />
    );
}
