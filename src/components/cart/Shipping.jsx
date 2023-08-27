import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>House No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
              {/* COUNTRY DROPDOWN CODE ADDED*/}
            <label>Country</label>

            <select>
              <option value="">India</option>
              // Added the code for country DROPDOWN
              {Country && Country.getAllCountries().map((i) => 
              ( <option value="{i.isoCode}" key="{i.isoCode}">
                {i.name}
              </option>
              ))}
            </select>
          </div>
          <div>
              {/* STATE DROPDOWN CODE ADDED*/}
            <label>State</label>
            <select>
              <option value="">State</option>
              {State && State.getStatesOfCountry("IN").map((i) => 
              ( <option value="{i.isoCode}" key="{i.isoCode}">
                {i.name} 
              </option> 
              ))}
            </select>
          </div>

          <div>
            <label>Post Code</label>
            <input type="number" placeholder="Enter postcode" />
          </div>

          {/* CONTACT CODE ADDED*/}     
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          <Popup trigger={
                <Link className="link" to="/myorders"> 
                  Confirm Order
                </Link>}
                position="right center">
                <div 
                  style={{
                    color:"red",
                    position: 'absolute', 
                    top: '50%', 
                    right: '100%', 
                    transform: 'translateY(-50%)', 
                    backgroundColor: '#fff', 
                    padding: '10px', 
                    borderRadius: '5px', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}
                  >Order Placed
                  </div>
               
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
