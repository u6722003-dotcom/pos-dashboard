export const totalRevenue = (sales) =>
  sales.reduce((sum, s) => sum + s.total, 0);

export const totalItemsSold = (sales) =>
  sales.reduce((sum, s) => sum + s.qty, 0);

export const salesByCategory = (sales) => {
  const map = {};
  sales.forEach(s => {
    map[s.category] = (map[s.category] || 0) + s.total;
  });
  return map;
};

export const topProducts = (sales) => {
  const map = {};
  sales.forEach(s => {
    map[s.product] = (map[s.product] || 0) + s.qty;
  });
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
};

export const dailySales = (sales) => {
  const map = {};
  sales.forEach(s => {
    map[s.date] = (map[s.date] || 0) + s.total;
  });

  return Object.entries(map).map(([date, total]) => ({
    date,
    total
  }));
};
