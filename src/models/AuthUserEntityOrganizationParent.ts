/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
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
export function instanceOfAuthUserEntityOrganizationParent(value: object): value is AuthUserEntityOrganizationParent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('sharedContacts' in value) || value['sharedContacts'] === undefined) return false;
    if (!('sharedSubcategories' in value) || value['sharedSubcategories'] === undefined) return false;
    if (!('sharedTags' in value) || value['sharedTags'] === undefined) return false;
    return true;
}

export function AuthUserEntityOrganizationParentFromJSON(json: any): AuthUserEntityOrganizationParent {
    return AuthUserEntityOrganizationParentFromJSONTyped(json, false);
}

export function AuthUserEntityOrganizationParentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthUserEntityOrganizationParent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'sharedContacts': json['sharedContacts'],
        'sharedSubcategories': json['sharedSubcategories'],
        'sharedTags': json['sharedTags'],
    };
}

export function AuthUserEntityOrganizationParentToJSON(json: any): AuthUserEntityOrganizationParent {
    return AuthUserEntityOrganizationParentToJSONTyped(json, false);
}

export function AuthUserEntityOrganizationParentToJSONTyped(value?: AuthUserEntityOrganizationParent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'sharedContacts': value['sharedContacts'],
        'sharedSubcategories': value['sharedSubcategories'],
        'sharedTags': value['sharedTags'],
    };
}
