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
import type { ProcessExportResourceJobRequestBodyDtoRequesterOrganization } from './ProcessExportResourceJobRequestBodyDtoRequesterOrganization';
/**
 * Usuário que solicitou a importação.
 * @export
 * @interface OfxImportJobRequestsPageDtoItemsInnerUser
 */
export interface OfxImportJobRequestsPageDtoItemsInnerUser {
    /**
     *
     * @type {string}
     * @memberof OfxImportJobRequestsPageDtoItemsInnerUser
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof OfxImportJobRequestsPageDtoItemsInnerUser
     */
    primaryEmail: string;
    /**
     *
     * @type {string}
     * @memberof OfxImportJobRequestsPageDtoItemsInnerUser
     */
    primaryPhoneNumber: string;
    /**
     *
     * @type {string}
     * @memberof OfxImportJobRequestsPageDtoItemsInnerUser
     */
    firstName: string;
    /**
     *
     * @type {string}
     * @memberof OfxImportJobRequestsPageDtoItemsInnerUser
     */
    lastName: string;
    /**
     *
     * @type {ProcessExportResourceJobRequestBodyDtoRequesterOrganization}
     * @memberof OfxImportJobRequestsPageDtoItemsInnerUser
     */
    organization?: ProcessExportResourceJobRequestBodyDtoRequesterOrganization | null;
}
/**
 * Check if a given object implements the OfxImportJobRequestsPageDtoItemsInnerUser interface.
 */
export declare function instanceOfOfxImportJobRequestsPageDtoItemsInnerUser(value: object): value is OfxImportJobRequestsPageDtoItemsInnerUser;
export declare function OfxImportJobRequestsPageDtoItemsInnerUserFromJSON(json: any): OfxImportJobRequestsPageDtoItemsInnerUser;
export declare function OfxImportJobRequestsPageDtoItemsInnerUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfxImportJobRequestsPageDtoItemsInnerUser;
export declare function OfxImportJobRequestsPageDtoItemsInnerUserToJSON(json: any): OfxImportJobRequestsPageDtoItemsInnerUser;
export declare function OfxImportJobRequestsPageDtoItemsInnerUserToJSONTyped(value?: OfxImportJobRequestsPageDtoItemsInnerUser | null, ignoreDiscriminator?: boolean): any;
