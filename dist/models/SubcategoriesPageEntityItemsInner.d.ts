/**
 * Sofia Pegasus core-api
 * Api principal do sistema Pegasus para gerenciamento financeiro de pequenas e médias empresas.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory } from './NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory';
import type { ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory } from './ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory';
/**
 *
 * @export
 * @interface SubcategoriesPageEntityItemsInner
 */
export interface SubcategoriesPageEntityItemsInner {
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    id: string;
    /**
     * Identificador da organização dona da subcategoria.
     * @type {string}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    ownerOrganization: string;
    /**
     * Nome da subcategoria.
     * @type {string}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    name: string;
    /**
     * Slug da subcategoria.
     * @type {string}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    slug: string;
    /**
     * Índice da subcategoria.
     * @type {number}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    index: number;
    /**
     * Identificador da categoria.
     * @type {string}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    category: string;
    /**
     *
     * @type {NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    populatedCategory?: NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory | null;
    /**
     * Identificador da subcategoria normalizada.
     * @type {string}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    normalizedSubcategory?: string | null;
    /**
     *
     * @type {ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    populatedNormalizedSubcategory?: ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory | null;
    /**
     * Data de criação da subcategoria.
     * @type {Date}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    createdAt: Date;
    /**
     * Data de atualização da subcategoria.
     * @type {Date}
     * @memberof SubcategoriesPageEntityItemsInner
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the SubcategoriesPageEntityItemsInner interface.
 */
export declare function instanceOfSubcategoriesPageEntityItemsInner(value: object): value is SubcategoriesPageEntityItemsInner;
export declare function SubcategoriesPageEntityItemsInnerFromJSON(json: any): SubcategoriesPageEntityItemsInner;
export declare function SubcategoriesPageEntityItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubcategoriesPageEntityItemsInner;
export declare function SubcategoriesPageEntityItemsInnerToJSON(json: any): SubcategoriesPageEntityItemsInner;
export declare function SubcategoriesPageEntityItemsInnerToJSONTyped(value?: SubcategoriesPageEntityItemsInner | null, ignoreDiscriminator?: boolean): any;