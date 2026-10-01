import Styles from "./_orders.module.css";

const Orders = () => {
  const orders = [
    {
      id: "ORD001",
      user: "Shabaz",
      course: "MERN Full Stack",
      price: 5999,
      status: "Completed",
    },
    {
      id: "ORD002",
      user: "Rahul",
      course: "Java Full Stack",
      price: 4999,
      status: "Completed",
    },
    {
      id: "ORD003",
      user: "Aman",
      course: "React Development",
      price: 2999,
      status: "Pending",
    },
  ];

  return (
    <section className={Styles.ordersPage}>
      <h1>Orders</h1>

      <div className={Styles.ordersContainer}>
        {orders.map((order) => (
          <article className={Styles.orderCard} key={order.id}>
            <h2>{order.course}</h2>

            <p>
              <strong>Order ID:</strong> {order.id}
            </p>

            <p>
              <strong>User:</strong> {order.user}
            </p>

            <p>
              <strong>Price:</strong> ₹{order.price}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span className={Styles.status}>{order.status}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Orders;