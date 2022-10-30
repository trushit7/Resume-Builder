import { Form, Input } from "antd";
import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Item
            name={"firstName"}
            label="firstName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
