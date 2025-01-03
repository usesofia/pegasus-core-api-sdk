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
 * @interface AuthorsPageEntityItemsInner
 */
export interface AuthorsPageEntityItemsInner {
    /**
     * Identificador do autor.
     * @type {string}
     * @memberof AuthorsPageEntityItemsInner
     */
    id: string;
    /**
     * Identificador da organização.
     * @type {string}
     * @memberof AuthorsPageEntityItemsInner
     */
    organization: string;
    /**
     * Identificador do usuário que criou o autor.
     * @type {string}
     * @memberof AuthorsPageEntityItemsInner
     */
    createdByUser: string;
    /**
     * Nome completo do autor.
     * @type {string}
     * @memberof AuthorsPageEntityItemsInner
     */
    fullName: string;
    /**
     * Email do autor.
     * @type {string}
     * @memberof AuthorsPageEntityItemsInner
     */
    email: string;
    /**
     * Resumo sobre o autor.
     * @type {string}
     * @memberof AuthorsPageEntityItemsInner
     */
    summary?: string;
    /**
     * Data de criação do autor.
     * @type {Date}
     * @memberof AuthorsPageEntityItemsInner
     */
    createdAt: Date;
    /**
     * Data de atualização do autor.
     * @type {Date}
     * @memberof AuthorsPageEntityItemsInner
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the AuthorsPageEntityItemsInner interface.
 */
export function instanceOfAuthorsPageEntityItemsInner(value: object): value is AuthorsPageEntityItemsInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('organization' in value) || value['organization'] === undefined) return false;
    if (!('createdByUser' in value) || value['createdByUser'] === undefined) return false;
    if (!('fullName' in value) || value['fullName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function AuthorsPageEntityItemsInnerFromJSON(json: any): AuthorsPageEntityItemsInner {
    return AuthorsPageEntityItemsInnerFromJSONTyped(json, false);
}

export function AuthorsPageEntityItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorsPageEntityItemsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'organization': json['organization'],
        'createdByUser': json['createdByUser'],
        'fullName': json['fullName'],
        'email': json['email'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function AuthorsPageEntityItemsInnerToJSON(json: any): AuthorsPageEntityItemsInner {
    return AuthorsPageEntityItemsInnerToJSONTyped(json, false);
}

export function AuthorsPageEntityItemsInnerToJSONTyped(value?: AuthorsPageEntityItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'organization': value['organization'],
        'createdByUser': value['createdByUser'],
        'fullName': value['fullName'],
        'email': value['email'],
        'summary': value['summary'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}

