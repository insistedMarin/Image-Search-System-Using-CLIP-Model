/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OBFormsPasswordOverridesProps = {
    OBFormsPassword?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OBFormsPasswordProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "default" | "disabled" | "error" | "focus" | "hover";
} & {
    overrides?: OBFormsPasswordOverridesProps | undefined | null;
}>;
export default function OBFormsPassword(props: OBFormsPasswordProps): React.ReactElement;
