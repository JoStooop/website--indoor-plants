export const getTotalPrice = (products) => {
  return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const getTotalItems = (products) => {
  return products.reduce((acc, item) => {
    if (item.quantity) {
      acc += item.quantity;
    } else {
      acc += 1;
    }
    return acc;
  }, 0);
};
