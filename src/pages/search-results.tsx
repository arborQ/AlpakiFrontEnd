import { Card, DebounceInput, ListLoading } from "alpaki-ui";
import { useEffect, useState } from "react";
import { searchProducts, ProductResultItem } from '@/services/search-service';
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@/hooks/useQuery";

export default function SearchResults() {
    let query = useQuery();
    const history = useHistory();
    const search = query.get('search');
    const [products, updateProducts] = useState<ProductResultItem[]>([]);

    useEffect(() => {
        searchProducts(search ?? '').then(updateProducts);
    }, [search]);

    return (
        <div className="flex place-content-center pt-4">
            <DebounceInput label={'Search'} value={search ?? ''} debounce={500} onDebounceChange={value => {
                history.replace(`/search?search=${value}`)
            }} />
            <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full lx:mx-6 md:mx-2 mx-1">
                    {
                        products.length === 0
                            ? <ListLoading size={5} />
                            : products.map(p => (
                                <div key={p.id} className="mb-4">
                                    <Card>
                                        <div className="flex">
                                            <img loading="lazy" src={p.image} className="w-32 h-32 rounded-md border shadow-sm mr-4" alt={p.title} />
                                            <Link to={`/product/${p.id}`}>{p.title}</Link>
                                        </div>
                                    </Card>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}
