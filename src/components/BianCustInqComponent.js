import React, { useState, useEffect } from "react";
import BianService from "../services/BianService";

function BainCustInqComponent() {
  const [customerId, setCustomerId] = useState("");
  const [customerDetails, setCustomerDetails] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "customerId") {
      setCustomerId(value);
    }
  };

  useEffect(() => {
    getCustomerDetailsById(customerId);
  }, [isSubmit]);

  const getCustomerDetailsById = () => {
    BianService.getCustomerDetailsById(customerId).then((res) => {
      setCustomerDetails(res.data);
      if (res.data) setIsSubmit(true);
    });
  };

  const handleSubmit = () => {
    getCustomerDetailsById(customerId);
  };
  const getTitle = () => {
    return <h3 className="text-center">Customer Inquiry</h3>;
  };
  return (
    <div>
      <div>{getTitle()}</div>
      <div class="input-group">
        <input
          type="search"
          name="customerId"
          id="customerId"
          value={customerId}
          onChange={(e) => handleInputChange(e)}
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => handleSubmit()}
        >
          SEARCH
        </button>
      </div>

      {isSubmit ? (
        <div>
          <br></br>
          <div className="flex shadow border-b">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Customer Id
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Customer Name
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Customer Age
                  </th>
                  <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Customer City
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr key={customerDetails.customer_id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {customerDetails.customer_id}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {customerDetails.customer_name}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {customerDetails.customer_age}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {customerDetails.customer_city}
                    </div>
                  </td>
              
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BainCustInqComponent;
