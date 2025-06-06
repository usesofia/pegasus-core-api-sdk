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
import type { CreateManyFinancialRecordsRequestBodyDtoDataInner } from './CreateManyFinancialRecordsRequestBodyDtoDataInner';
/**
 *
 * @export
 * @interface CreateManyFinancialRecordsRequestBodyDto
 */
export interface CreateManyFinancialRecordsRequestBodyDto {
    /**
     *
     * @type {Array<CreateManyFinancialRecordsRequestBodyDtoDataInner>}
     * @memberof CreateManyFinancialRecordsRequestBodyDto
     */
    data: Array<CreateManyFinancialRecordsRequestBodyDtoDataInner>;
    /**
     *
     * @type {string}
     * @memberof CreateManyFinancialRecordsRequestBodyDto
     */
    populate?: string;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof CreateManyFinancialRecordsRequestBodyDto
     */
    channel: CreateManyFinancialRecordsRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const CreateManyFinancialRecordsRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type CreateManyFinancialRecordsRequestBodyDtoChannelEnum = typeof CreateManyFinancialRecordsRequestBodyDtoChannelEnum[keyof typeof CreateManyFinancialRecordsRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the CreateManyFinancialRecordsRequestBodyDto interface.
 */
export declare function instanceOfCreateManyFinancialRecordsRequestBodyDto(value: object): value is CreateManyFinancialRecordsRequestBodyDto;
export declare function CreateManyFinancialRecordsRequestBodyDtoFromJSON(json: any): CreateManyFinancialRecordsRequestBodyDto;
export declare function CreateManyFinancialRecordsRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateManyFinancialRecordsRequestBodyDto;
export declare function CreateManyFinancialRecordsRequestBodyDtoToJSON(json: any): CreateManyFinancialRecordsRequestBodyDto;
export declare function CreateManyFinancialRecordsRequestBodyDtoToJSONTyped(value?: CreateManyFinancialRecordsRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
