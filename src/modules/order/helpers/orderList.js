export function orderList(productList) {
    const order = productList.map(({ product: { productName, price, photo }, quantity }) => {
        return {
            nameProduct: productName,
            photo: photo,
            quantity: quantity,
            total: `${parseFloat(price) * quantity} UAN`
        }
    });
    return order;
}
