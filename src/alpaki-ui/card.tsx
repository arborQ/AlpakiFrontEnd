import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren<{}>) {
    const { children } = props;

    return (
        <div className="bg-white rounded-xl shadow-xl focus-within:shadow-2xl p-4 md:p-6 border transition duration-150 ease-in-out">
            {children}
        </div>
    );
}