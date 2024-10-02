import React from "react";

const Dashboard = ({ userData }) => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Country</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Referral ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.full_name}</td>
            <td>{userData.username}</td>
            <td>{userData.country_row_id}</td>
            <td>{userData.email_id}</td>
            <td>{userData.mobile_number}</td>
            <td>{userData.referral_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
