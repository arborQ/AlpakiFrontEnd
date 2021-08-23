import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 border">
            {children}
        </div>
    );
}