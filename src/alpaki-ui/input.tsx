export interface InputProps {
    value: string;
    label: string;
}

export function Input({ value, label, type = "text", ...otherProps }: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="col-span-6 sm:col-span-3 pb-4">
            <label className="block text-sm font-medium text-gray-700">
                <span className=" px-4">
                    {label}
                </span>
                <input
                    type={type}
                    value={value}
                    className="mt-1 py-2 px-4 outline-none block w-full focus:shadow-lg shadow-md sm:text-sm border-gray-300 rounded-md border"
                    {...otherProps}
                />
            </label>
        </div>
    );
}