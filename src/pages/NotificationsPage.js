import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotificationsPage = () => {
  return (
    <div>
      <Header />
      <div className="notify">
        <h1 style={styles.notify}>알림</h1>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  notify: {},
};

export default NotificationsPage;
