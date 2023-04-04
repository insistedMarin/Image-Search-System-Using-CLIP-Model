/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UserProfile } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserProfileUpdateFormInputValues = {
    username?: string;
    userphoto?: string;
};
export declare type UserProfileUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    userphoto?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileUpdateFormOverridesProps = {
    UserProfileUpdateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    userphoto?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userProfile?: UserProfile;
    onSubmit?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onSuccess?: (fields: UserProfileUpdateFormInputValues) => void;
    onError?: (fields: UserProfileUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserProfileUpdateFormInputValues) => UserProfileUpdateFormInputValues;
    onValidate?: UserProfileUpdateFormValidationValues;
}>;
export default function UserProfileUpdateForm(props: UserProfileUpdateFormProps): React.ReactElement;
