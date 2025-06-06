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
import type { ProcessExportResourceJobRequestBodyDtoRequester } from './ProcessExportResourceJobRequestBodyDtoRequester';
/**
 *
 * @export
 * @interface ExecuteBulkCreateJobRequestBodyDto
 */
export interface ExecuteBulkCreateJobRequestBodyDto {
    /**
     *
     * @type {ProcessExportResourceJobRequestBodyDtoRequester}
     * @memberof ExecuteBulkCreateJobRequestBodyDto
     */
    requester: ProcessExportResourceJobRequestBodyDtoRequester;
    /**
     *
     * @type {string}
     * @memberof ExecuteBulkCreateJobRequestBodyDto
     */
    bulkCreateJobRequestId: string;
}
/**
 * Check if a given object implements the ExecuteBulkCreateJobRequestBodyDto interface.
 */
export declare function instanceOfExecuteBulkCreateJobRequestBodyDto(value: object): value is ExecuteBulkCreateJobRequestBodyDto;
export declare function ExecuteBulkCreateJobRequestBodyDtoFromJSON(json: any): ExecuteBulkCreateJobRequestBodyDto;
export declare function ExecuteBulkCreateJobRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExecuteBulkCreateJobRequestBodyDto;
export declare function ExecuteBulkCreateJobRequestBodyDtoToJSON(json: any): ExecuteBulkCreateJobRequestBodyDto;
export declare function ExecuteBulkCreateJobRequestBodyDtoToJSONTyped(value?: ExecuteBulkCreateJobRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
