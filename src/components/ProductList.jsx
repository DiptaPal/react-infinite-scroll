import { useEffect, useRef, useState } from "react";
import Product from "./Product";
const productsPerPage = 10;

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const loaderRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(
                `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
                    page * productsPerPage
                }`
            );
            const data = await res.json();
            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...data.products,
                ]);
                setPage((prePage) => prePage + 1);
            }
        };

        const onIntersection = (items) => {
            const loaderItem = items[0];
            if (loaderItem.isIntersecting & hasMore) {
                fetchProducts();
            }
        };

        const observer = new IntersectionObserver(onIntersection);

        if (observer && loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        //cleanup
        () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [hasMore, page]);
    return (
        <div>
            <div className="text-2xl text-center font-bold my-3 underline">
                Product List
            </div>

            <div className="grid grid-cols-4 gap-y-6 ">
                {products.map((product) => (
                    <Product key={product.it} product={product} />
                ))}
            </div>

            {hasMore && <div ref={loaderRef}>Loading more products...</div>}
        </div>
    );
}
