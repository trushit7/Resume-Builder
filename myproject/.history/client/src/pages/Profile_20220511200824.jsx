import React from "react";
import Layout from "../components/Layout";
import { Tabs } from "antd";

const Profile = () => {
  const { TabPane } = Tabs;
  return (
    <Layout>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Tab 1
        </TabPane>
        <TabPane tab="Tab 2" disabled key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Tab 3
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default Profile;
