import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";

const DeliverForm2: React.FC = () => {
  const router = useRouter();
  const { country, state } = router.query;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      deliveryType: "",
      vehicleType: "",
      identityType: "",
      identityNumber: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required("Required"),
      lastname: yup.string().required("Required"),
      email: yup.string().email("Invalid email").required("Required"),
      phoneNumber: yup.string().required("Required"),
      deliveryType: yup.string().required("Required"),
      vehicleType: yup.string().required("Required"),
      identityType: yup.string().required("Required"),
      identityNumber: yup.string().required("Required"),
      password: yup.string().min(6, "Must be at least 6 characters").required("Required"),
    }),
    onSubmit: async (values) => {
      const data = { ...values, country, state };
      try {
        const response = await fetch("/api/deliveryman/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          router.push("/verificationSuccess");
        } else {
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      {formik.errors.firstname && formik.touched.firstname && (
        <p className="error">{formik.errors.firstname}</p>
      )}
      {/* Similar fields for lastname, email, phoneNumber, etc. */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DeliverForm2;
