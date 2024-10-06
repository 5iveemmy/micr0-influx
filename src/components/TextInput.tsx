import { Field, FieldProps } from "formik";
import { Input, Form } from "antd";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

const TextInput = ({ name, label, type, placeholder }: Props) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <Form.Item
          label={label && <>{label}</>}
          validateStatus={
            form.touched[name] && form.errors[name] ? "error" : ""
          }
        >
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            style={{ height: "46px", borderColor: "#9D9D9D" }}
          />
        </Form.Item>
      )}
    </Field>
  );
};

export default TextInput;
