export function orderList(productList) {
    const order = productList.map(({ product: { productName, price }, quantity }) => {
        return {
            nameProduct: productName,
            quantity: quantity,
            total: `${parseFloat(price) * quantity} UAN`
        }
    });
    return order;
}
