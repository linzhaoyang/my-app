import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { useEffect } from "react";

const { Option } = Select;

const App = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, []);

  return (
    <Form name="control-hooks" form={form}>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
        </Select>
      </Form.Item>
      <Form.Item name="note" label="Time" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
