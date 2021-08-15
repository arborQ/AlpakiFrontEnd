import { Cart } from 'alpaki-ui'
import { PriceDisplay } from 'domain/price-display';

export function ProductDetails() {
    return (
        <div className="flex place-content-center">
            <div className="md:w-4/5 w-full">
                <Cart>
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/4 w-full">
                            details
                        </div>
                        <div className="md:w-1/4 w-full">
                            <div className="rounded-md border p-4">
                                <PriceDisplay price={123.34324} currency="usd" />
                            </div>
                        </div>
                    </div>
                </Cart>
            </div>
        </div>
    );
}