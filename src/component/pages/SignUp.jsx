import FormSignUp from "../fragments/FormSignUp";
import AuthLayout from "../layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUp;