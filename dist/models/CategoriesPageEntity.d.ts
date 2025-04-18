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
import type { CategoriesPageEntityItemsInner } from './CategoriesPageEntityItemsInner';
import type { ContactsPageEntityPageInfo } from './ContactsPageEntityPageInfo';
/**
 *
 * @export
 * @interface CategoriesPageEntity
 */
export interface CategoriesPageEntity {
    /**
     *
     * @type {Array<CategoriesPageEntityItemsInner>}
     * @memberof CategoriesPageEntity
     */
    items: Array<CategoriesPageEntityItemsInner>;
    /**
     *
     * @type {ContactsPageEntityPageInfo}
     * @memberof CategoriesPageEntity
     */
    pageInfo: ContactsPageEntityPageInfo;
}
/**
 * Check if a given object implements the CategoriesPageEntity interface.
 */
export declare function instanceOfCategoriesPageEntity(value: object): value is CategoriesPageEntity;
export declare function CategoriesPageEntityFromJSON(json: any): CategoriesPageEntity;
export declare function CategoriesPageEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesPageEntity;
export declare function CategoriesPageEntityToJSON(json: any): CategoriesPageEntity;
export declare function CategoriesPageEntityToJSONTyped(value?: CategoriesPageEntity | null, ignoreDiscriminator?: boolean): any;
