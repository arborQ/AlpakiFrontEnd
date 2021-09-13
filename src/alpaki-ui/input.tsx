import { classNames } from 'utils/classNames';

export interface InputProps {
    value: string;
    label: string;
    error?: string;
}

export function Input({ value, label, type = "text", error, ...otherProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
    const labelClassName = classNames("block text-md font-medium text-gray-700", { "text-alternative": !!error });
    const inputClassName = classNames("mt-1 py-3 px-4 outline-none block w-full focus:shadow-lg shadow-md sm:text-md border-gray-300 rounded-md border", { "border-alternative": !!error});
    
    return (
        <div className="col-span-6 sm:col-span-3 pb-4">
            <label className={labelClassName}>
                {label}
                <input
                    type={type}
                    value={value}
                    className={inputClassName}
                    {...otherProps}
                />
                {
                    error ?? <span>{error}</span>
                }
            </label>
        </div>
    );
}