const KEY = "pos_sales";

export const getSales = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveSale = (sale) => {
  const sales = getSales();
  sales.push(sale);
  localStorage.setItem(KEY, JSON.stringify(sales));
};
