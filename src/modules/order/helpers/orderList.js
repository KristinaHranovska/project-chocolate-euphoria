export function orderList(productList) {
    const order = productList.map(({ product: { productName, price }, quantity }) => {
        return {
            nameProduct: productName,
            quantity: quantity,
            total: `${parseFloat(price) * quantity} UAN`
        }
    });

    const totalPrice = order
        .map(({ total }) => parseFloat(total))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return { ...order, totalPrice };
}
