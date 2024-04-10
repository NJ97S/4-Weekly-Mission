"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import classes from "./signupForm.module.css";
import { FieldValues } from "../signinForm/signinForm";
import { postSignupValidation } from "@/services/api";
import Input from "../common/input/input";

const EMAIL_REGEX =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[a-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const PASSWORD_REGEX = /^(?!(?:[0-9]+)$)(?!(?:[a-zA-Z]+)$)([0-9a-zA-Z]){8,}$/;

interface Inputs extends FieldValues {
  password_repeat: string;
}

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit = async (data: Inputs) => {
    try {
      await postSignupValidation(data);
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
          placeholder="이메일을 입력해주세요."
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
          placeholder="영문, 숫자를 조합해 8자 이상 입력해주세요."
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: PASSWORD_REGEX,
              message: "비밀번호는 영문, 숫자를 조합해 8자 이상 입력해주세요.",
            },
          })}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          errorMessage={errors.password_repeat?.message}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          {...register("password_repeat", {
            validate: (value) =>
              value === watch("password") || "비밀번호가 다릅니다.",
          })}
        />
      </div>
      <button type="submit" className={classes["submit_button"]}>
        회원가입
      </button>
    </form>
  );
}
