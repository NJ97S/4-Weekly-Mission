import SignOAuth from "@/components/common/signOAuth/signOAuth";
import classes from "./page.module.css";
import SignHeader from "@/components/common/signHeader/signHeader";
import SignupForm from "@/components/signupForm/signupForm";

export default function Signup() {
  return (
    <div className={classes["basic_align"]}>
      <div className={classes.container}>
        <SignHeader linkName="로그인 하기" path="/signin">
          이미 회원이신가요?
        </SignHeader>
        <SignupForm />
        <div className={classes["sns_container"]}>
          <SignOAuth>다른 방식으로 가입하기</SignOAuth>
        </div>
      </div>
    </div>
  );
}
