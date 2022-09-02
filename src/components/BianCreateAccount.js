import React, { useState } from "react";
import BianService from "../services/BianService";

function BianCreateAccount(props) {
  const [values, setValues] = useState({
    accountNumber: "",
    accountName: "",
    branchCode: "",
    branchName: "",
    taxIdentificationNumber: "",
    accountPurpose: "",
  });   

  const handleAccountNumberInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      accountNumber: e.target.value,
    }));
  };

  const handleAccountNameInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      accountName: e.target.value,
    }));
  };

  const handleBranchCodeInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      branchCode: e.target.value,
    }));
  };

  const handleBranchNameInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      branchName: e.target.value,
    }));
  };

  const handleTaxIdentificationNumberInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      taxIdentificationNumber: e.target.value,
    }));
  };

  const handleAccountPurposeInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      accountPurpose: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const userData = values;
    BianService.createAccount(userData).then((res) => {
      
    });
    e.target.reset();
    e.preventDefault();
  };

  const handleCancel = (e) =>{
    e.target.reset();
  }

  const getTitle = () => {
    
        return <h3 className="text-center">Account Opening</h3>
}

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              getTitle()
            }
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Account Number: </label>
                  <input
                    placeholder="Account Number"
                    name="accountNumber"
                    className="form-control"
                    value={values.accountNumber}
                    onChange={handleAccountNumberInputChange}
                  />
                </div>
                <div className="form-group">
                  <label> Account Name: </label>
                  <input
                    placeholder="Account Name"
                    name="accountName"
                    className="form-control"
                    value={values.accountName}
                    onChange={handleAccountNameInputChange}
                  />
                </div>
                <div className="form-group">
                  <label> Branch Code: </label>
                  <input
                    placeholder="Branch Code"
                    name="branchCode"
                    className="form-control"
                    value={values.branchCode}
                    onChange={handleBranchCodeInputChange}
                  />
                </div>
                <div className="form-group">
                  <label> Branch Name: </label>
                  <input
                    placeholder="Branch Name"
                    name="branchName"
                    className="form-control"
                    value={values.branchName}
                    onChange={handleBranchNameInputChange}
                  />
                </div>

                <div className="form-group">
                  <label> Tax Identification Number: </label>
                  <input
                    placeholder="Tax Identification Number"
                    name="taxIdentificationNumber"
                    className="form-control"
                    value={values.taxIdentificationNumber}
                    onChange={handleTaxIdentificationNumberInputChange}
                  />
                </div>

                <div className="form-group">
                  <label> Account Purpose: </label>
                  <input
                    placeholder="Account Purpose"
                    name="accountPurpose"
                    className="form-control"
                    value={values.accountPurpose}
                    onChange={handleAccountPurposeInputChange}
                  />
                </div>

                <button className="btn btn-success" onClick={handleSubmit}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BianCreateAccount;
