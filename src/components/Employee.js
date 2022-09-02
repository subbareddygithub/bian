import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee}) => {
  console.log(employee)
  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.accountNumber}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.accountName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.branchCode}</div>
      </td>
    
    </tr>
  );
};

export default Employee;
