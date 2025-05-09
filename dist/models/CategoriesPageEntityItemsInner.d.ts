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
 * @interface CategoriesPageEntityItemsInner
 */
export interface CategoriesPageEntityItemsInner {
    /**
     * Identificador da categoria.
     * @type {string}
     * @memberof CategoriesPageEntityItemsInner
     */
    id: string;
    /**
     * Direção da categoria (IN ou OUT).
     * @type {string}
     * @memberof CategoriesPageEntityItemsInner
     */
    direction: CategoriesPageEntityItemsInnerDirectionEnum;
    /**
     * Índice da categoria.
     * @type {number}
     * @memberof CategoriesPageEntityItemsInner
     */
    index: number;
    /**
     * Nome da categoria.
     * @type {string}
     * @memberof CategoriesPageEntityItemsInner
     */
    name: string;
    /**
     * Slug da categoria.
     * @type {string}
     * @memberof CategoriesPageEntityItemsInner
     */
    slug: string;
    /**
     * Data de criação da categoria.
     * @type {any}
     * @memberof CategoriesPageEntityItemsInner
     */
    createdAt: any | null;
    /**
     * Data de atualização da categoria.
     * @type {any}
     * @memberof CategoriesPageEntityItemsInner
     */
    updatedAt: any | null;
}
/**
 * @export
 */
export declare const CategoriesPageEntityItemsInnerDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type CategoriesPageEntityItemsInnerDirectionEnum = typeof CategoriesPageEntityItemsInnerDirectionEnum[keyof typeof CategoriesPageEntityItemsInnerDirectionEnum];
/**
 * Check if a given object implements the CategoriesPageEntityItemsInner interface.
 */
export declare function instanceOfCategoriesPageEntityItemsInner(value: object): value is CategoriesPageEntityItemsInner;
export declare function CategoriesPageEntityItemsInnerFromJSON(json: any): CategoriesPageEntityItemsInner;
export declare function CategoriesPageEntityItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesPageEntityItemsInner;
export declare function CategoriesPageEntityItemsInnerToJSON(json: any): CategoriesPageEntityItemsInner;
export declare function CategoriesPageEntityItemsInnerToJSONTyped(value?: CategoriesPageEntityItemsInner | null, ignoreDiscriminator?: boolean): any;
