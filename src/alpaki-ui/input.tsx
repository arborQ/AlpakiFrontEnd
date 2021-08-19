export interface InputProps {
    value: string;
    label: string;
    onChange: (value: string) => void;
}

export function Input({ value, label, onChange }: InputProps) {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">
                <span className=" px-4">
                    {label}
                </span>
                <input
                    type="text"
                    value={value}
                    onChange={e => onChange(e.currentTarget.value)}
                    className="mt-1 py-2 px-4 outline-none block w-full focus:shadow-lg shadow-md sm:text-sm border-gray-300 rounded-md"
                />
            </label>
        </div>
    );
}