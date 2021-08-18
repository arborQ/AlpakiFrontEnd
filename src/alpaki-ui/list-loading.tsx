import { Cart } from "./cart";

export interface ListLoadingProps {
    size?: number;
}

export function ListLoading({ size = 4 }: ListLoadingProps) {
    var items: React.ReactElement[] = [];
    for (let i = 0; i < size; i++) {
        items.push((
            <div className="w-full mx-auto mb-4" key={i}>
                <Cart>
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-blue-400 rounded"></div>
                                <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </Cart>
            </div>
        ));
    }
    return (
        <>
            {
                items
            }
        </>
    );
}