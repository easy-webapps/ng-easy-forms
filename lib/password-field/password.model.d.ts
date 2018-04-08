export interface PasswordConfigType {
    length: number;
    pattern: {
        regex: RegExp;
        msg?: string;
    };
}
export interface PasswordConfigInterface {
    [s: string]: PasswordConfigType;
}
export declare const passwordConfig: PasswordConfigInterface;
