import React from "react";
import ListingsGrid from "../components/iu/ListingsGridx";
import ProfileCard from "../components/iu/ProfileCardx";
import PurchasesGrid from "../components/iu/PurchasesGridx";
import "../css/userDashboard.css";



const Dashboard = () => {
  return (
    <div className="dashboard-container">
       <h2 className="userDashboard-color">User Dashboard</h2>

      <section className="profile-section">
        <ProfileCard />
      </section>

      <section className="listings-section">
        <h3>My Listings</h3>
        <ListingsGrid />
      </section>

      <section className="purchases-section">
        <h3>My Purchases</h3>
        <PurchasesGrid />
      </section> 
    </div>
  );
};

export default Dashboard;
