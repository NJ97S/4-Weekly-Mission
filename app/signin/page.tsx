import classes from "./page.module.css";

import SignHeader from "@/components/common/signHeader/signHeader";
import SigninForm from "@/components/signinForm/signinForm";
import SignOAuth from "@/components/common/signOAuth/signOAuth";

export default function Signin() {
  return (
    <div className={classes["basic_align"]}>
      <div className={classes.container}>
        <SignHeader path="/signup">회원 가입하기</SignHeader>
        <SigninForm />
        <div className={classes["sns_container"]}>
          <SignOAuth>소셜 로그인</SignOAuth>
        </div>
      </div>
    </div>
  );
}
