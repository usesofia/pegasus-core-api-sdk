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
/**
 *
 * @export
 * @interface TagsPageEntityItemsInner
 */
export interface TagsPageEntityItemsInner {
    /**
     * Identificador da tag.
     * @type {string}
     * @memberof TagsPageEntityItemsInner
     */
    id: string;
    /**
     * Identificador da organização dona da tag.
     * @type {string}
     * @memberof TagsPageEntityItemsInner
     */
    ownerOrganization: string;
    /**
     * Nome da tag.
     * @type {string}
     * @memberof TagsPageEntityItemsInner
     */
    name: string;
    /**
     * Data de criação da tag.
     * @type {Date}
     * @memberof TagsPageEntityItemsInner
     */
    createdAt: Date;
    /**
     * Data de atualização da tag.
     * @type {Date}
     * @memberof TagsPageEntityItemsInner
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the TagsPageEntityItemsInner interface.
 */
export declare function instanceOfTagsPageEntityItemsInner(value: object): value is TagsPageEntityItemsInner;
export declare function TagsPageEntityItemsInnerFromJSON(json: any): TagsPageEntityItemsInner;
export declare function TagsPageEntityItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagsPageEntityItemsInner;
export declare function TagsPageEntityItemsInnerToJSON(json: any): TagsPageEntityItemsInner;
export declare function TagsPageEntityItemsInnerToJSONTyped(value?: TagsPageEntityItemsInner | null, ignoreDiscriminator?: boolean): any;