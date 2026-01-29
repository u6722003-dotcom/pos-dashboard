import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { salesByCategory } from "../utils/calculations";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function SalesByCategory({ sales }) {
  const data = Object.entries(salesByCategory(sales)).map(
    ([name, value]) => ({ name, value })
  );

  return (
    <div className="card">
      <h3>Sales by Category</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={100}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
