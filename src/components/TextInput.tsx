import { Field, FieldProps } from "formik";
import { Input, Form } from "antd";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  touched?: boolean;
}

const TextInput = ({
  name,
  label,
  touched,
  error,
  type,
  placeholder,
}: Props) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <Form.Item
          label={label && <>{label}</>}
          validateStatus={touched && error ? "error" : ""}
          help={touched && error ? error : ""}
        >
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            style={{
              height: "46px",
              borderColor: ` ${!touched && !error && "#9D9D9D"}  `,
            }}
            status={error && touched ? "error" : ""}
          />
        </Form.Item>
      )}
    </Field>
  );
};

export default TextInput;
