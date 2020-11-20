export type Item = {
    name: string,
    price: number,
}

export type Basket = {
    item: Item;
    count: number;
}