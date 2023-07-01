
import LayoutPrimary from "app/components/Layouts/LayoutPrimary";
import CardFormLayout from "app/components/Layouts/CardFormLayout";
import React from "react";
import Head from "next/head";
import ForgotPasswordForm from "modules/account/components/forgotPassword";
export default function SetupPassword() { 
  return (
    <div>
      <Head>
        <title> Forgot Password</title>
      </Head>
      <LayoutPrimary headerType={"onlyLogoHeader"}>
        <CardFormLayout hideAvatar title="Forgot Password" subtitle="Enter your email associated with your account and we’ll send an email with instructions to reset your password">
          <ForgotPasswordForm /> 
        </CardFormLayout>
      </LayoutPrimary>
    </div>
  );
}
