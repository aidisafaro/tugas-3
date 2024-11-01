import LoginForm from "../fragments/LoginForm";
import AuthLayout from "../layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn;