/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OBFormsEmailOverridesProps = {
    OBFormsEmail?: PrimitiveOverrideProps<ViewProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OBFormsEmailProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "default" | "disabled" | "error" | "focus" | "hover";
} & {
    overrides?: OBFormsEmailOverridesProps | undefined | null;
}>;
export default function OBFormsEmail(props: OBFormsEmailProps): React.ReactElement;
