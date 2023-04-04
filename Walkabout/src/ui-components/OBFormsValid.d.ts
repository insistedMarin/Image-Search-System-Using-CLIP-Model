/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OBFormsValidOverridesProps = {
    OBFormsValid?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OBFormsValidProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "default" | "disabled" | "error" | "focus" | "hover";
} & {
    overrides?: OBFormsValidOverridesProps | undefined | null;
}>;
export default function OBFormsValid(props: OBFormsValidProps): React.ReactElement;
