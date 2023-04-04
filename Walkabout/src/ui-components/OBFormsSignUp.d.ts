/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OBFormsSignUpOverridesProps = {
    OBFormsSignUp?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OBFormsSignUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default" | "disabled" | "error" | "focus" | "hover";
} & {
    overrides?: OBFormsSignUpOverridesProps | undefined | null;
}>;
export default function OBFormsSignUp(props: OBFormsSignUpProps): React.ReactElement;
