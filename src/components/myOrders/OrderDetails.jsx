import React from "react";

const OrderDetails = () => { 
  return (
    <section className="orderDetails"> 
      <main>
        <h1>Order Details</h1> 
        <div>
          <h1>Shipping</h1> 
          <p>
            <b>Address</b>
            {"Merkuriuksenkatu 5 A 15"} </p>
        </div> 

        <div>
          <h1>Contact</h1> 
          <p>
            <b>Name</b>
            {"John Doe"} 
          </p>
          <p> 
            <b>Phone</b> 
            {"+358225674545"}
          </p> 
        </div>

        <div> 
          <h1>Status</h1> 
          <p>
            <b>Order Status</b>
            {"Completed"} 
          </p>
          <p>
            <b>Placed At</b> 
            {"27-08-2023"}
          </p> 
          <p>
            <b>Delivered At</b>
            {"27-08-2023"} </p>
        </div>

        <div>
          <h1>Payment</h1> <p>
          <b>Payment Method</b> 
          {"COD"}

          </p> 
          <p>
          <b>Payment Reference</b>#{"#65738366"} </p>
          <p>
          <b>Paid At</b> {"27-08-2023"}
          </p> 
        </div>
        <div>
          <h1>Amount</h1> 
          <p>
          <b>Items Total</b>€{14} 
          </p>
          <p>
          <b>Shipping Charges</b>€{4}
          </p> 
          <p>
          <b>Tax</b>€{2.1} 
          </p>
          <p>
          <b>Total Amount</b>€{14 + 4 + 2.1}
          </p> 
        </div>

        <article>
          <h1>Ordered Items</h1> 
          <div>
            <h4>Cheese Burger</h4> 
            <div>
              <span>{1}</span> x <span>{3}</span> </div>
            </div> 

          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
            <span>{1}</span> x <span>{4}</span>
          </div> 
        </div>

        <div>
          <h4>Burger Fries</h4> 
          <div>
          <span>{1}</span> x <span>{7}</span> 
          </div>
        </div>

        <div> 
          <h4
            style={{ 
              fontWeight: 800,
            }} 
          >
            Sub Total 
          </h4>

          <div 
            style={{
              fontWeight: 800, 
            }}
          >
            €{14}
          </div> 
        </div>
      </article>
    </main>
  </section> 
  );
};

export default OrderDetails;
