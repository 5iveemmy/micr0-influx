import { Field, FieldProps } from "formik";
import { Input, Form } from "antd";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  touched?: boolean;
}

const { TextArea } = Input;

const CustomTextArea = ({
  name,
  touched,
  error,
  label,
  placeholder,
  rows = 4,
}: Props) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <Form.Item
          label={label && <>{label}</>}
          validateStatus={touched && error ? "error" : ""}
          help={touched && error ? error : ""}
        >
          <TextArea
            {...field}
            placeholder={placeholder}
            rows={rows}
            onChange={(e) => form.setFieldValue(name, e.target.value)}
            onBlur={() => form.setFieldTouched(name, true)}
            value={field.value}
            status={error && touched ? "error" : ""}
          />
        </Form.Item>
      )}
    </Field>
  );
};

export default CustomTextArea;
