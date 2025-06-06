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
 * @interface ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner
 */
export interface ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner {
    /**
     *
     * @type {string}
     * @memberof ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner
     */
    name: string;
}
/**
 * Check if a given object implements the ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner interface.
 */
export declare function instanceOfProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner(value: object): value is ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner;
export declare function ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInnerFromJSON(json: any): ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner;
export declare function ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner;
export declare function ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInnerToJSON(json: any): ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner;
export declare function ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInnerToJSONTyped(value?: ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner | null, ignoreDiscriminator?: boolean): any;
