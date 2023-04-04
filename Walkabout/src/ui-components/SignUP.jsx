/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import OBFormsSignUp from "./OBFormsSignUp";
import OBFormsValid from "./OBFormsValid";
import OBFormsVarificationCode from "./OBFormsVarificationCode";
import OBFormsPassword from "./OBFormsPassword";
import { View } from "@aws-amplify/ui-react";
import OBFormsEmail from "./OBFormsEmail";
export default function Signup(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="682px"
      height="516px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Signup")}
    >
      <OBFormsSignUp
        display="flex"
        gap="0"
        direction="column"
        width="90.49px"
        height="47.92px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="401.3px"
        left="290.73px"
        border="1px SOLID rgba(94,91,255,1)"
        borderRadius="5px"
        padding="9px 25px 9px 14px"
        backgroundColor="rgba(4,125,149,1)"
        property1="default"
        {...getOverrideProps(overrides, "OB Forms/Sign Up")}
      ></OBFormsSignUp>
      <OBFormsValid
        display="flex"
        gap="0"
        direction="column"
        width="99px"
        height="48px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="304px"
        left="427px"
        border="1px SOLID rgba(94,91,255,1)"
        borderRadius="5px"
        padding="9px 25px 9px 14px"
        backgroundColor="rgba(4,125,149,1)"
        property1="default"
        {...getOverrideProps(overrides, "OB Forms/Valid")}
      ></OBFormsValid>
      <OBFormsVarificationCode
        width="246px"
        height="83.71px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="277.04px"
        left="147px"
        padding="0px 0px 0px 0px"
        property1="default"
        {...getOverrideProps(overrides, "OB Forms/Varification Code")}
      ></OBFormsVarificationCode>
      <OBFormsPassword
        width="379px"
        height="81.32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="168.45px"
        left="147px"
        padding="0px 0px 0px 0px"
        property1="default"
        {...getOverrideProps(overrides, "OB Forms/Password")}
      ></OBFormsPassword>
      <View
        width="614px"
        height="456px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26px"
        left="33px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "content")}
      ></View>
      <OBFormsEmail
        width="379px"
        height="81.32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="66.8px"
        left="147px"
        padding="0px 0px 0px 0px"
        property1="default"
        {...getOverrideProps(overrides, "OB Forms/Email")}
      ></OBFormsEmail>
    </View>
  );
}
