import React, { useEffect } from "react";
import type { FormInstance } from "antd";
import { Button, Form, Input, Space } from "antd";
// types
import { ContactType } from "types/contacts";

interface SubmitButtonProps {
  form: FormInstance;
  onSubmit: (values: Partial<ContactType>) => void;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
  onSubmit,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      onClick={() => {
        onSubmit(values);
        form.resetFields();
      }}
    >
      {children}
    </Button>
  );
};

interface ContactFormProps {
  initialValues?: ContactType;
  onSubmit: (values: Partial<ContactType>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
  },
  onSubmit,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  return (
    <Form
      form={form}
      initialValues={initialValues}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
    >
      <Form.Item name="firstName" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Last name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form} onSubmit={onSubmit}>
            Submit
          </SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
