import { Cart } from "@/alpaki-ui";
import { useEffect, useState } from "react";
import { searchProducts, ProductResultItem } from '@/services/search-service';

export function SearchResults() {
    useEffect(() => {
        searchProducts('').then(updateProducts);
    }, []);
    const [products, updateProducts] = useState<ProductResultItem[]>([]);

    return (
        <div className="flex place-content-center">
            <div className="md:w-4/5 w-full">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="md:w-1/4 w-full">
                        <Cart>
                            search summary
                        </Cart>
                    </div>
                    <div className="md:w-3/4 w-full ml-6">
                        {
                            products.map(p => (
                                <div key={p.id} className="mb-4">
                                    <Cart>
                                        <div className="flex">
                                            <img src={p.image} className="w-32 h-32" alt={p.title} />
                                            {p.title}
                                        </div>
                                    </Cart>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}