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
 * @interface LinkFinancialRecordsRequestBodyDto
 */
export interface LinkFinancialRecordsRequestBodyDto {
    /**
     * IDs dos registros financeiros a serem vinculados.
     * @type {Array<string>}
     * @memberof LinkFinancialRecordsRequestBodyDto
     */
    financialRecordIds: Array<string>;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof LinkFinancialRecordsRequestBodyDto
     */
    channel: LinkFinancialRecordsRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const LinkFinancialRecordsRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type LinkFinancialRecordsRequestBodyDtoChannelEnum = typeof LinkFinancialRecordsRequestBodyDtoChannelEnum[keyof typeof LinkFinancialRecordsRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the LinkFinancialRecordsRequestBodyDto interface.
 */
export declare function instanceOfLinkFinancialRecordsRequestBodyDto(value: object): value is LinkFinancialRecordsRequestBodyDto;
export declare function LinkFinancialRecordsRequestBodyDtoFromJSON(json: any): LinkFinancialRecordsRequestBodyDto;
export declare function LinkFinancialRecordsRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkFinancialRecordsRequestBodyDto;
export declare function LinkFinancialRecordsRequestBodyDtoToJSON(json: any): LinkFinancialRecordsRequestBodyDto;
export declare function LinkFinancialRecordsRequestBodyDtoToJSONTyped(value?: LinkFinancialRecordsRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
