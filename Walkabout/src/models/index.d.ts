import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type PulishMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPulish = {
  readonly id: string;
  readonly userID: string;
  readonly image?: string | null;
  readonly text?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPulish = {
  readonly id: string;
  readonly userID: string;
  readonly image?: string | null;
  readonly text?: string | null;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pulish = LazyLoading extends LazyLoadingDisabled ? EagerPulish : LazyPulish

export declare const Pulish: (new (init: ModelInit<Pulish, PulishMetaData>) => Pulish) & {
  copyOf(source: Pulish, mutator: (draft: MutableModel<Pulish, PulishMetaData>) => MutableModel<Pulish, PulishMetaData> | void): Pulish;
}

type EagerUser = {
  readonly id: string;
  readonly Pulishes?: (Pulish | null)[] | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly Pulishes: AsyncCollection<Pulish>;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}