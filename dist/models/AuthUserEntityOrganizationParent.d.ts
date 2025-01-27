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
 * @interface AuthUserEntityOrganizationParent
 */
export interface AuthUserEntityOrganizationParent {
    /**
     *
     * @type {string}
     * @memberof AuthUserEntityOrganizationParent
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof AuthUserEntityOrganizationParent
     */
    name: string;
    /**
     *
     * @type {boolean}
     * @memberof AuthUserEntityOrganizationParent
     */
    sharedContacts: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AuthUserEntityOrganizationParent
     */
    sharedSubcategories: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AuthUserEntityOrganizationParent
     */
    sharedTags: boolean;
}
/**
 * Check if a given object implements the AuthUserEntityOrganizationParent interface.
 */
export declare function instanceOfAuthUserEntityOrganizationParent(value: object): value is AuthUserEntityOrganizationParent;
export declare function AuthUserEntityOrganizationParentFromJSON(json: any): AuthUserEntityOrganizationParent;
export declare function AuthUserEntityOrganizationParentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthUserEntityOrganizationParent;
export declare function AuthUserEntityOrganizationParentToJSON(json: any): AuthUserEntityOrganizationParent;
export declare function AuthUserEntityOrganizationParentToJSONTyped(value?: AuthUserEntityOrganizationParent | null, ignoreDiscriminator?: boolean): any;
