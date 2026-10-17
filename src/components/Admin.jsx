const statuses = ["Preparing", "Ready", "Completed"];

function Admin({ orders, updateStatus }) {
  return (
    <div>
      <h1>Admin - Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.token}>
                <td>#{order.token}</td>
                <td>{order.items.map((i) => `${i.name} x${i.quantity}`).join(", ")}</td>
                <td>₹{order.total}</td>
                <td><span className={`status ${order.status}`}>{order.status}</span></td>
                <td>
                  {statuses.map((s) => (
                    <button
                      key={s}
                      className={order.status === s ? "filter active" : "filter"}
                      onClick={() => updateStatus(order.token, s)}
                    >
                      {s}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
