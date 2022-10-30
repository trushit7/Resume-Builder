import React from "react";
import Layout from "../components/Layout";
import { Form, Tabs, Button } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import Experience from "../components/Experience";

const Profile = () => {
  const { TabPane } = Tabs;
  return (
    <Layout>
      <div className="updateProfile">
        <h2>Update Profile</h2>
        <Form
          layout="vertical"
          onFinish={(value) => {
            console.log(value);
          }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience and Project" key="3">
              <Experience />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">Update</Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Profile;
