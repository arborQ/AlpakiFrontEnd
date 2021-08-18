import { useState } from "react";
import { useCallback } from "react";
import { PropsWithChildren } from "react";

export function Button(props: PropsWithChildren<{} & React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    const [isProcessing, changeIsProcessing] = useState(false);
    const { onClick, disabled, children, ...otherProps } = props;


    var onClickCallback = useCallback(async (event: any) => {
        if (onClick) {
            changeIsProcessing(true);
            await Promise.resolve(onClick(event))
            changeIsProcessing(false);
        }
    }, [onClick]);

    return (<button
        className="px-4 py-2 rounded-md bg-primary shadow-md"
        onClick={onClickCallback}
        disabled={disabled || isProcessing || !onClick}
        {...otherProps}>
            <span className="text-primary leading-8">
                {children}
            </span>
    </button>);
}