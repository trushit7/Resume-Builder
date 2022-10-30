import React from "react";
import Layout from "../components/Layout";
import { Tabs } from "antd";
import PersonalInfo from "../components/PersonalInfo";

const Profile = () => {
  const { TabPane } = Tabs;
  return (
    <Layout>
      <div className="updateProfile">
        <h2>Update Profile</h2>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Personal Info" key="1">
            <PersonalInfo />
          </TabPane>
          <TabPane tab="Skills and Education" key="2">
            Tab 2
          </TabPane>
          <TabPane tab="Experience and Project" key="3">
            Tab 3
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
