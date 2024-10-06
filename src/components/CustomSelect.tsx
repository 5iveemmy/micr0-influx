import { Field, FieldProps } from "formik";
import { Select, Form } from "antd";

const { Option } = Select;

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  options: Array<{ value: string | number; label: string }>;
}

const CustomSelectInput = ({ name, label, placeholder, options }: Props) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <Form.Item
          label={label && <>{label}</>}
          validateStatus={
            form.touched[name] && form.errors[name] ? "error" : ""
          }
        >
          <Select
            {...field}
            placeholder={placeholder}
            style={{ height: "46px", borderColor: "#9D9D9D" }}
            onChange={(value) => form.setFieldValue(name, value)}
            onBlur={() => form.setFieldTouched(name, true)}
            value={field.value}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      )}
    </Field>
  );
};

export default CustomSelectInput;
