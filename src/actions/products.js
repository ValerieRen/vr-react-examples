export const addProduct = (item, price, stock) => ({
	type: 'ADD_PRODUCT',
	payload: {item, price, stock}
});

export const updateProductId = product => ({
	type: 'UPDATE_PRODUCT_BY_ID',
	payload: product
});
