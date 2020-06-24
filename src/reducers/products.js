const initState = {
  products: [
    {
      id: 1,
      name: "Football",
      price: "49.99",
      stocked: true,
      currency: "$",
    },
    {
      id: 2,
      name: "Baseball",
      price: "9.99",
      stocked: true,
      currency: "$",
    },
    {
      id: 3,
      name: "Basketball",
      price: "29.99",
      stocked: false,
      currency: "$",
    },
    {
      id: 4,
      name: "iPod Touch",
      price: "99.99",
      stocked: true,
      currency: "$",
    },
    {
      id: 5,
      name: "iPhone 5",
      price: "399.99",
      stocked: false,
      currency: "$",
    },
    {
      id: 6,
      name: "Nexus 7",
      price: "199.99",
      stocked: true,
      currency: "$",
    },
  ]
};

const products = (state = initState, action = {}) => {
  switch(action.type) {
    case 'UPDATE_PRODUCT_BY_ID':
      return {
        ...state,
        products: state.products.map(p => p.id === action.payload.id ? action.payload : p)
      }
    case 'ADD_PRODUCT':
      const productId = state.products
        .map(p => p.id)
        .reduce((acc, cur) => Math.max(acc, cur));

      return {
        ...state,
        products: [
          ...state.products,
          {
            id: productId + 1,
            name: action.payload.item,
            price: action.payload.price,
            stocked: action.payload.stock,
            currency: "$",
          }
        ]
      }
    default:
      return state;
  }
};

export default products;
