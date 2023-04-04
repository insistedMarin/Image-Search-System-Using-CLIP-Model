/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OBFormsVarificationCodeOverridesProps = {
    OBFormsVarificationCode?: PrimitiveOverrideProps<ViewProps>;
    "Varification Code"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OBFormsVarificationCodeProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "default" | "disabled" | "error" | "focus" | "hover";
} & {
    overrides?: OBFormsVarificationCodeOverridesProps | undefined | null;
}>;
export default function OBFormsVarificationCode(props: OBFormsVarificationCodeProps): React.ReactElement;
