import { PropsWithChildren } from "react";

export function Cart(props: PropsWithChildren<{}>) {
    const { children } = props;

    return <div className="shadow-md p-6">{children}</div>
}