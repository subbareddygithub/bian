import React, { useState, useEffect } from "react";
import BianService from "../services/BianService";

function BainAcctInqComponent() {
  const [accountId, setAccountId] = useState("");
  const [accountDetails, setAccountDetails] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "accountId") {
      setAccountId(value);
    }
  };

  useEffect(() => {
    getAccountDetailsByID(accountId);
  }, [isSubmit]);

  const getAccountDetailsByID = () => {
    BianService.getAccountDetailsById(accountId).then((res) => {
      setAccountDetails(res.data);
      if (res.data) setIsSubmit(true);
    });
  };

  const handleSubmit = () => {
    getAccountDetailsByID(accountId);
  };
  const getTitle = () => {
    return <h3 className="text-center">Account Inquiry</h3>;
  };
  return (
    <div>
      <div>{getTitle()}</div>
      <div class="input-group">
        <input
          type="search"
          name="accountId"
          id="accountId"
          value={accountId}
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
                    Account Number
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Account Name
                  </th>
                  <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Branch Code
                  </th>
                  <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Branch Name
                  </th>
                  <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Tax Identification Number
                  </th>
                  <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Account Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr key={accountDetails.accountNumber}>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {accountDetails.accountNumber}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {accountDetails.accountName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {accountDetails.branchCode}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {accountDetails.branchName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {accountDetails.taxIdentificationNumber}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {accountDetails.accountPurpose}
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

export default BainAcctInqComponent;
