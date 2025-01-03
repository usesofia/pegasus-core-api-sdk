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
 * @interface CreatePostTagRequestBodyDto
 */
export interface CreatePostTagRequestBodyDto {
    /**
     * Nome da tag.
     * @type {string}
     * @memberof CreatePostTagRequestBodyDto
     */
    name: string;
}

/**
 * Check if a given object implements the CreatePostTagRequestBodyDto interface.
 */
export function instanceOfCreatePostTagRequestBodyDto(value: object): value is CreatePostTagRequestBodyDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreatePostTagRequestBodyDtoFromJSON(json: any): CreatePostTagRequestBodyDto {
    return CreatePostTagRequestBodyDtoFromJSONTyped(json, false);
}

export function CreatePostTagRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePostTagRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CreatePostTagRequestBodyDtoToJSON(json: any): CreatePostTagRequestBodyDto {
    return CreatePostTagRequestBodyDtoToJSONTyped(json, false);
}

export function CreatePostTagRequestBodyDtoToJSONTyped(value?: CreatePostTagRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

