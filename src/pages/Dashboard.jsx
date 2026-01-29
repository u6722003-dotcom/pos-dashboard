import { getSales } from "../utils/storage";
import {
  totalRevenue,
  totalItemsSold,
  topProducts,
  dailySales
} from "../utils/calculations";

import SalesByCategory from "../components/SalesByCategory";
import SalesTrend from "../components/SalesTrend";

export default function Dashboard() {
  const sales = getSales();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="grid-3">
        <div className="card stat">
          <p>Revenue</p>
          <h2>฿{totalRevenue(sales)}</h2>
        </div>
        <div className="card stat">
          <p>Transactions</p>
          <h2>{sales.length}</h2>
        </div>
        <div className="card stat">
          <p>Items Sold</p>
          <h2>{totalItemsSold(sales)}</h2>
        </div>
      </div>

      <div className="grid-2">
        <SalesByCategory sales={sales} />
        <SalesTrend data={dailySales(sales)} />
      </div>

      <div className="card">
        <h3>Top 5 Products</h3>
        <ul>
          {topProducts(sales).map(([name, qty], i) => (
            <li key={i}>
              {i + 1}. {name} — {qty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
