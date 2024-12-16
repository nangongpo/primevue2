import { VNode } from 'vue'

declare type PublicProps = {
  [key: string]: any;
};

declare type EmitFn<Options = { [event: string]: (...args: any[]) => void }, Event extends keyof Options = keyof Options> = 
  Options extends { [event: string]: (...args: infer Args) => any } 
    ? (event: Event, ...args: Args) => void
    : (event: string, ...args: any[]) => void;

export class ClassComponent<Props, Slots, Emits> {
  $props: Props & PublicProps
  $slots: Slots
  $emit: EmitFn<Emits>
}

export type GlobalComponentConstructor<T> = {
    new (): T;
};

/**
 * Custom types
 */
export declare type Booleanish = boolean | 'true' | 'false';

export declare type Numberish = number | string;

export declare type Nullable<T = void> = T | null | undefined;

export declare type PassThrough<T = void> = T | object | undefined;

export declare type DefaultPassThrough<T = void> = T | ((instance?: VNode) => T | undefined) | undefined;

export declare type HintedString<T extends string> = string | T;
