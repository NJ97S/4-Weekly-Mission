"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import classes from "./signinForm.module.css";
import Input from "../common/input/input";
import { postSigninValidation } from "@/services/api";

const EMAIL_REGEX =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[a-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export interface FieldValues {
  email: string;
  password: string;
}

export default function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "all",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      await postSigninValidation(data);
      router.push("/shared");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes["login_form"]}>
      <div className={classes["input_container"]}>
        <Input
          label="이메일"
          type="text"
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: EMAIL_REGEX,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          })}
        />
        <Input
          label="비밀번호"
          type="password"
          errorMessage={errors.password?.message}
          {...register("password", { required: "비밀번호를 입력해주세요." })}
        />
      </div>
      <button type="submit" className={classes["submit_button"]}>
        로그인
      </button>
    </form>
  );
}
