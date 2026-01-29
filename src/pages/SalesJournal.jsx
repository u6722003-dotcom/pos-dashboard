import { useState } from "react";
import products from "../data/product-item.json";
import { saveSale, getSales } from "../utils/storage";
import { formatCategory } from "../utils/format";

export default function SalesJournal() {
  const [selectedName, setSelectedName] = useState("");
  const [qty, setQty] = useState(1);
  const [date, setDate] = useState("");

  const product = products.find(p => p.itemName === selectedName);
  const total = product ? product.unitPrice * qty : 0;

  const addSale = () => {
    if (!product || !date || qty <= 0) return;

    saveSale({
      id: Date.now(),
      date,
      product: product.itemName,
      category: formatCategory(product.category),
      unitPrice: product.unitPrice,
      qty,
      total
    });

    window.location.reload();
  };

  const sales = getSales();

  return (
    <div>
      <h1>Sales Journal</h1>

      <div className="card form-card">
        <label>Product</label>
        <select onChange={e => setSelectedName(e.target.value)}>
          <option value="">Select product</option>
          {products.map(p => (
            <option key={p.itemName} value={p.itemName}>
              {p.itemName}
            </option>
          ))}
        </select>

        <label>Quantity</label>
        <input
          type="number"
          min="1"
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
        />

        <label>Date</label>
        <input type="date" onChange={e => setDate(e.target.value)} />

        <div className="total">
          Total: <strong>฿{total}</strong>
        </div>

        <button onClick={addSale}>Add Sale</button>
      </div>

      <div className="card">
        <h3>All Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Category</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(s => (
              <tr key={s.id}>
                <td>{s.date}</td>
                <td>{s.product}</td>
                <td>{s.category}</td>
                <td>{s.qty}</td>
                <td>฿{s.unitPrice}</td>
                <td>฿{s.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
