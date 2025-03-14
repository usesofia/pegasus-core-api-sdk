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
import type { CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner } from './CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner';
import {
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerFromJSONTyped,
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerToJSONTyped,
} from './CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner';
import type { CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent } from './CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent';
import {
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentFromJSONTyped,
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentToJSONTyped,
} from './CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent';

/**
 * 
 * @export
 * @interface CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
 */
export interface CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization {
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
     */
    role: CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
     */
    type: CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum;
    /**
     * 
     * @type {CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
     */
    parent?: CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent | null;
    /**
     * 
     * @type {Array<CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner>}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization
     */
    children?: Array<CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner> | null;
}


/**
 * @export
 */
export const CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum = {
    OrgAdmin: 'org:admin',
    OrgMember: 'org:member'
} as const;
export type CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum = typeof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum[keyof typeof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum];

/**
 * @export
 */
export const CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum = {
    Leaf: 'LEAF',
    Group: 'GROUP'
} as const;
export type CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum = typeof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum[keyof typeof CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum];


/**
 * Check if a given object implements the CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization interface.
 */
export function instanceOfCreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization(value: object): value is CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSON(json: any): CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization {
    return CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSONTyped(json, false);
}

export function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'role': json['role'],
        'type': json['type'],
        'parent': json['parent'] == null ? undefined : CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentFromJSON(json['parent']),
        'children': json['children'] == null ? undefined : ((json['children'] as Array<any>).map(CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerFromJSON)),
    };
}

export function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSON(json: any): CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization {
    return CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSONTyped(json, false);
}

export function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSONTyped(value?: CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'role': value['role'],
        'type': value['type'],
        'parent': CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentToJSON(value['parent']),
        'children': value['children'] == null ? undefined : ((value['children'] as Array<any>).map(CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerToJSON)),
    };
}

