/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateInviteRequestBodyDto
 */
export interface CreateInviteRequestBodyDto {
    /**
     * 
     * @type {string}
     * @memberof CreateInviteRequestBodyDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateInviteRequestBodyDto
     */
    role: CreateInviteRequestBodyDtoRoleEnum;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof CreateInviteRequestBodyDto
     */
    channel: CreateInviteRequestBodyDtoChannelEnum;
}


/**
 * @export
 */
export const CreateInviteRequestBodyDtoRoleEnum = {
    OrgAdmin: 'org:admin',
    OrgMember: 'org:member'
} as const;
export type CreateInviteRequestBodyDtoRoleEnum = typeof CreateInviteRequestBodyDtoRoleEnum[keyof typeof CreateInviteRequestBodyDtoRoleEnum];

/**
 * @export
 */
export const CreateInviteRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
} as const;
export type CreateInviteRequestBodyDtoChannelEnum = typeof CreateInviteRequestBodyDtoChannelEnum[keyof typeof CreateInviteRequestBodyDtoChannelEnum];


/**
 * Check if a given object implements the CreateInviteRequestBodyDto interface.
 */
export function instanceOfCreateInviteRequestBodyDto(value: object): value is CreateInviteRequestBodyDto {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('channel' in value) || value['channel'] === undefined) return false;
    return true;
}

export function CreateInviteRequestBodyDtoFromJSON(json: any): CreateInviteRequestBodyDto {
    return CreateInviteRequestBodyDtoFromJSONTyped(json, false);
}

export function CreateInviteRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInviteRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'role': json['role'],
        'channel': json['channel'],
    };
}

export function CreateInviteRequestBodyDtoToJSON(json: any): CreateInviteRequestBodyDto {
    return CreateInviteRequestBodyDtoToJSONTyped(json, false);
}

export function CreateInviteRequestBodyDtoToJSONTyped(value?: CreateInviteRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'role': value['role'],
        'channel': value['channel'],
    };
}

