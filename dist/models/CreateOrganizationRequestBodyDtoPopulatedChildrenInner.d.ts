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
 * @interface CreateOrganizationRequestBodyDtoPopulatedChildrenInner
 */
export interface CreateOrganizationRequestBodyDtoPopulatedChildrenInner {
    /**
     * Identificador da organização.
     * @type {string}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    id: string;
    /**
     * Nome da organização.
     * @type {string}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    name: string;
    /**
     * Slug da organização.
     * @type {string}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    slug: string;
    /**
     * Tipo da organização.
     * @type {string}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    type: CreateOrganizationRequestBodyDtoPopulatedChildrenInnerTypeEnum;
    /**
     * Documento da organização. Geralmente CNPJ.
     * @type {string}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    document?: string;
    /**
     * URL da imagem do logo da organização.
     * @type {string}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    imageUrl?: string;
    /**
     * Data de criação da organização.
     * @type {Date}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    createdAt: Date;
    /**
     * Data de atualização da organização.
     * @type {Date}
     * @memberof CreateOrganizationRequestBodyDtoPopulatedChildrenInner
     */
    updatedAt: Date;
}
/**
 * @export
 */
export declare const CreateOrganizationRequestBodyDtoPopulatedChildrenInnerTypeEnum: {
    readonly Leaf: "LEAF";
    readonly Group: "GROUP";
};
export type CreateOrganizationRequestBodyDtoPopulatedChildrenInnerTypeEnum = typeof CreateOrganizationRequestBodyDtoPopulatedChildrenInnerTypeEnum[keyof typeof CreateOrganizationRequestBodyDtoPopulatedChildrenInnerTypeEnum];
/**
 * Check if a given object implements the CreateOrganizationRequestBodyDtoPopulatedChildrenInner interface.
 */
export declare function instanceOfCreateOrganizationRequestBodyDtoPopulatedChildrenInner(value: object): value is CreateOrganizationRequestBodyDtoPopulatedChildrenInner;
export declare function CreateOrganizationRequestBodyDtoPopulatedChildrenInnerFromJSON(json: any): CreateOrganizationRequestBodyDtoPopulatedChildrenInner;
export declare function CreateOrganizationRequestBodyDtoPopulatedChildrenInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrganizationRequestBodyDtoPopulatedChildrenInner;
export declare function CreateOrganizationRequestBodyDtoPopulatedChildrenInnerToJSON(json: any): CreateOrganizationRequestBodyDtoPopulatedChildrenInner;
export declare function CreateOrganizationRequestBodyDtoPopulatedChildrenInnerToJSONTyped(value?: CreateOrganizationRequestBodyDtoPopulatedChildrenInner | null, ignoreDiscriminator?: boolean): any;