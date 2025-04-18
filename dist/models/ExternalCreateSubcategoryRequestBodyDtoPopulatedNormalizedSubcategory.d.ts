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
import type { NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory } from './NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory';
/**
 * Subcategoria normalizada.
 * @export
 * @interface ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
 */
export interface ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory {
    /**
     * Identificador da subcategoria normalizada.
     * @type {string}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    id: string;
    /**
     * Nome da subcategoria.
     * @type {string}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    name: string;
    /**
     * Slug da subcategoria.
     * @type {string}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    slug: string;
    /**
     * Índice da subcategoria.
     * @type {number}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    index: number;
    /**
     * Identificador da categoria.
     * @type {string}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    category: string;
    /**
     *
     * @type {NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    populatedCategory?: NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory | null;
    /**
     * Indica se a subcategoria deve ser exibida no DRE.
     * @type {boolean}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    considerInDre: boolean;
    /**
     * Indica se a subcategoria é relacionada a faturas.
     * @type {boolean}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    isInvoiceRelated: boolean;
    /**
     * Indica se a subcategoria é relacionada a transferências internas.
     * @type {boolean}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    isInternalTransferRelated: boolean;
    /**
     * Indica se a subcategoria é relacionada a transferências automáticas de aplicação.
     * @type {boolean}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    isAutomaticApplicationRelated: boolean;
    /**
     * Data de criação da subcategoria.
     * @type {any}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    createdAt: any | null;
    /**
     * Data de atualização da subcategoria.
     * @type {any}
     * @memberof ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory
     */
    updatedAt: any | null;
}
/**
 * Check if a given object implements the ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory interface.
 */
export declare function instanceOfExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory(value: object): value is ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory;
export declare function ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategoryFromJSON(json: any): ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory;
export declare function ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory;
export declare function ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategoryToJSON(json: any): ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory;
export declare function ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategoryToJSONTyped(value?: ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory | null, ignoreDiscriminator?: boolean): any;
