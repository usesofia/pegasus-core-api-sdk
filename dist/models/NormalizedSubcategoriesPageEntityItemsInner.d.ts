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
/**
 *
 * @export
 * @interface NormalizedSubcategoriesPageEntityItemsInner
 */
export interface NormalizedSubcategoriesPageEntityItemsInner {
    /**
     * Identificador da subcategoria normalizada.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    id: string;
    /**
     * Nome da subcategoria.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    name: string;
    /**
     * Slug da subcategoria.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    slug: string;
    /**
     * Índice da subcategoria.
     * @type {number}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    index: number;
    /**
     * Identificador da categoria.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    category: string;
    /**
     *
     * @type {NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    populatedCategory?: NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory | null;
    /**
     * Indica se a subcategoria é relacionada a faturas.
     * @type {boolean}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    isInvoiceRelated?: boolean | null;
    /**
     * Indica se a subcategoria é relacionada a transferências internas.
     * @type {boolean}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    isInternalTransferRelated?: boolean | null;
    /**
     * Indica se a subcategoria é relacionada a transferências automáticas de aplicação.
     * @type {boolean}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    isAutomaticApplicationRelated?: boolean | null;
    /**
     * Data de criação da subcategoria.
     * @type {Date}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    createdAt: Date;
    /**
     * Data de atualização da subcategoria.
     * @type {Date}
     * @memberof NormalizedSubcategoriesPageEntityItemsInner
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the NormalizedSubcategoriesPageEntityItemsInner interface.
 */
export declare function instanceOfNormalizedSubcategoriesPageEntityItemsInner(value: object): value is NormalizedSubcategoriesPageEntityItemsInner;
export declare function NormalizedSubcategoriesPageEntityItemsInnerFromJSON(json: any): NormalizedSubcategoriesPageEntityItemsInner;
export declare function NormalizedSubcategoriesPageEntityItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedSubcategoriesPageEntityItemsInner;
export declare function NormalizedSubcategoriesPageEntityItemsInnerToJSON(json: any): NormalizedSubcategoriesPageEntityItemsInner;
export declare function NormalizedSubcategoriesPageEntityItemsInnerToJSONTyped(value?: NormalizedSubcategoriesPageEntityItemsInner | null, ignoreDiscriminator?: boolean): any;