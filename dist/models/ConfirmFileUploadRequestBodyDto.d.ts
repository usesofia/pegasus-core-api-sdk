/**
 * Sofia Pegasus core-api
 * Api principal do sistema Pegasus para gerenciamento financeiro de pequenas e médias empresas.
 *
 * The version of the OpenAPI document: 1.0.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ConfirmFileUploadRequestBodyDto
 */
export interface ConfirmFileUploadRequestBodyDto {
    /**
     * Identificador do arquivo.
     * @type {string}
     * @memberof ConfirmFileUploadRequestBodyDto
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ConfirmFileUploadRequestBodyDto
     */
    status: ConfirmFileUploadRequestBodyDtoStatusEnum;
    /**
     * Legenda do arquivo.
     * @type {string}
     * @memberof ConfirmFileUploadRequestBodyDto
     */
    caption?: string | null;
    /**
     * Data de exclusão do arquivo.
     * @type {any}
     * @memberof ConfirmFileUploadRequestBodyDto
     */
    deletedAt?: any | null;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof ConfirmFileUploadRequestBodyDto
     */
    channel: ConfirmFileUploadRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const ConfirmFileUploadRequestBodyDtoStatusEnum: {
    readonly Failed: "FAILED";
    readonly Completed: "COMPLETED";
};
export type ConfirmFileUploadRequestBodyDtoStatusEnum = typeof ConfirmFileUploadRequestBodyDtoStatusEnum[keyof typeof ConfirmFileUploadRequestBodyDtoStatusEnum];
/**
 * @export
 */
export declare const ConfirmFileUploadRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type ConfirmFileUploadRequestBodyDtoChannelEnum = typeof ConfirmFileUploadRequestBodyDtoChannelEnum[keyof typeof ConfirmFileUploadRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the ConfirmFileUploadRequestBodyDto interface.
 */
export declare function instanceOfConfirmFileUploadRequestBodyDto(value: object): value is ConfirmFileUploadRequestBodyDto;
export declare function ConfirmFileUploadRequestBodyDtoFromJSON(json: any): ConfirmFileUploadRequestBodyDto;
export declare function ConfirmFileUploadRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfirmFileUploadRequestBodyDto;
export declare function ConfirmFileUploadRequestBodyDtoToJSON(json: any): ConfirmFileUploadRequestBodyDto;
export declare function ConfirmFileUploadRequestBodyDtoToJSONTyped(value?: ConfirmFileUploadRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
