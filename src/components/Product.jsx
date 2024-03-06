/* eslint-disable react/prop-types */

import { Badge, Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";
export default function Product({ product }) {
    return (
        <>
            <Card
                key={product.id}
                className="max-w-xs overflow-hidden rounded-md shadow-lg"
                imgSrc={product.thumbnail}
                imgSize="md"
            >
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                    <Heart size={20} weight="bold" color="white" />
                </Card.Container>
                <Card.Container className="p-6">
                    <Card.Container className="flex items-center justify-between">
                        <Badge size="xs" colorType="light" color="gray">
                            For Sale
                        </Badge>
                        <Card.Title>${product.price}</Card.Title>
                    </Card.Container>
                    <Card.Container className="my-3">
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Description>
                            {product.description}
                        </Card.Description>
                    </Card.Container>
                    <Card.Container className="flex items-center justify-start gap-5">
                        <Button size="sm" type="outlineGray">
                            <span className="pr-2">
                                <ShoppingCart size={24} />
                            </span>
                            Add To Cart
                        </Button>
                    </Card.Container>
                </Card.Container>
            </Card>
        </>
    );
}
