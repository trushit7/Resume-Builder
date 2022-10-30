import React, { useState } from "react";
import Layout from "../components/Layout";
import { Form, Tabs, Button, message, Spin } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import SkillsEducation from "../components/SkillsEducation";
import Experience from "../components/Experience";
import axios from "axios";

const Profile = () => {
  const { TabPane } = Tabs;

  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const onFinish = async (value) => {
    setLoading(true);
    try {
      await axios.post("/api/user/update", { ...value, _id: user._id });

      message.success("profile update success");
      setLoading(false);
    } catch (error) {
      message.error("something went wrong");
      setLoading(false);
    }
  };

  return (
    <Layout>
      {loading && <Spin size="large" />}
      <div className="updateProfile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={onFinish}>
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
