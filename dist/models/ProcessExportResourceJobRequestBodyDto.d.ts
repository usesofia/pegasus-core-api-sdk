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
 * @interface ProcessExportResourceJobRequestBodyDto
 */
export interface ProcessExportResourceJobRequestBodyDto {
    /**
     *
     * @type {string}
     * @memberof ProcessExportResourceJobRequestBodyDto
     */
    exportResourceJobRequestId: string;
    /**
     *
     * @type {ProcessExportResourceJobRequestBodyDtoRequester}
     * @memberof ProcessExportResourceJobRequestBodyDto
     */
    requester: ProcessExportResourceJobRequestBodyDtoRequester;
}
/**
 * Check if a given object implements the ProcessExportResourceJobRequestBodyDto interface.
 */
export declare function instanceOfProcessExportResourceJobRequestBodyDto(value: object): value is ProcessExportResourceJobRequestBodyDto;
export declare function ProcessExportResourceJobRequestBodyDtoFromJSON(json: any): ProcessExportResourceJobRequestBodyDto;
export declare function ProcessExportResourceJobRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessExportResourceJobRequestBodyDto;
export declare function ProcessExportResourceJobRequestBodyDtoToJSON(json: any): ProcessExportResourceJobRequestBodyDto;
export declare function ProcessExportResourceJobRequestBodyDtoToJSONTyped(value?: ProcessExportResourceJobRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
