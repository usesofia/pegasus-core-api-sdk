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
 * @interface RemoveInstallmentFinancialRecordRequestBodyDto
 */
export interface RemoveInstallmentFinancialRecordRequestBodyDto {
    /**
     *
     * @type {string}
     * @memberof RemoveInstallmentFinancialRecordRequestBodyDto
     */
    removeRelatedFinancialRecordsOption: RemoveInstallmentFinancialRecordRequestBodyDtoRemoveRelatedFinancialRecordsOptionEnum;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof RemoveInstallmentFinancialRecordRequestBodyDto
     */
    channel: RemoveInstallmentFinancialRecordRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const RemoveInstallmentFinancialRecordRequestBodyDtoRemoveRelatedFinancialRecordsOptionEnum: {
    readonly OnlyNotCompleted: "ONLY_NOT_COMPLETED";
    readonly None: "NONE";
};
export type RemoveInstallmentFinancialRecordRequestBodyDtoRemoveRelatedFinancialRecordsOptionEnum = typeof RemoveInstallmentFinancialRecordRequestBodyDtoRemoveRelatedFinancialRecordsOptionEnum[keyof typeof RemoveInstallmentFinancialRecordRequestBodyDtoRemoveRelatedFinancialRecordsOptionEnum];
/**
 * @export
 */
export declare const RemoveInstallmentFinancialRecordRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type RemoveInstallmentFinancialRecordRequestBodyDtoChannelEnum = typeof RemoveInstallmentFinancialRecordRequestBodyDtoChannelEnum[keyof typeof RemoveInstallmentFinancialRecordRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the RemoveInstallmentFinancialRecordRequestBodyDto interface.
 */
export declare function instanceOfRemoveInstallmentFinancialRecordRequestBodyDto(value: object): value is RemoveInstallmentFinancialRecordRequestBodyDto;
export declare function RemoveInstallmentFinancialRecordRequestBodyDtoFromJSON(json: any): RemoveInstallmentFinancialRecordRequestBodyDto;
export declare function RemoveInstallmentFinancialRecordRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveInstallmentFinancialRecordRequestBodyDto;
export declare function RemoveInstallmentFinancialRecordRequestBodyDtoToJSON(json: any): RemoveInstallmentFinancialRecordRequestBodyDto;
export declare function RemoveInstallmentFinancialRecordRequestBodyDtoToJSONTyped(value?: RemoveInstallmentFinancialRecordRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
