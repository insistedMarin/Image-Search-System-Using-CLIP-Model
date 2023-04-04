/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function OBFormsValid(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Name: {}, OBFormsValid: {} },
      variantValues: { property1: "default" },
    },
    {
      overrides: { Name: {}, OBFormsValid: {} },
      variantValues: { property1: "error" },
    },
    {
      overrides: { Name: {}, OBFormsValid: {} },
      variantValues: { property1: "focus" },
    },
    {
      overrides: { Name: {}, OBFormsValid: { opacity: "0.6499999761581421" } },
      variantValues: { property1: "disabled" },
    },
    {
      overrides: { Name: {}, OBFormsValid: {} },
      variantValues: { property1: "hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(94,91,255,1)"
      borderRadius="5px"
      padding="9px 25px 9px 14px"
      backgroundColor="rgba(94,91,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "OBFormsValid")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="28px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Valid"
        {...getOverrideProps(overrides, "Name")}
      ></Text>
    </Flex>
  );
}
