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
import type { ContactsPageDtoPageInfo } from './ContactsPageDtoPageInfo';
import {
    ContactsPageDtoPageInfoFromJSON,
    ContactsPageDtoPageInfoFromJSONTyped,
    ContactsPageDtoPageInfoToJSON,
    ContactsPageDtoPageInfoToJSONTyped,
} from './ContactsPageDtoPageInfo';
import type { OfxImportJobRequestsPageDtoItemsInner } from './OfxImportJobRequestsPageDtoItemsInner';
import {
    OfxImportJobRequestsPageDtoItemsInnerFromJSON,
    OfxImportJobRequestsPageDtoItemsInnerFromJSONTyped,
    OfxImportJobRequestsPageDtoItemsInnerToJSON,
    OfxImportJobRequestsPageDtoItemsInnerToJSONTyped,
} from './OfxImportJobRequestsPageDtoItemsInner';

/**
 * 
 * @export
 * @interface OfxImportJobRequestsPageDto
 */
export interface OfxImportJobRequestsPageDto {
    /**
     * 
     * @type {Array<OfxImportJobRequestsPageDtoItemsInner>}
     * @memberof OfxImportJobRequestsPageDto
     */
    items: Array<OfxImportJobRequestsPageDtoItemsInner>;
    /**
     * 
     * @type {ContactsPageDtoPageInfo}
     * @memberof OfxImportJobRequestsPageDto
     */
    pageInfo: ContactsPageDtoPageInfo;
}

/**
 * Check if a given object implements the OfxImportJobRequestsPageDto interface.
 */
export function instanceOfOfxImportJobRequestsPageDto(value: object): value is OfxImportJobRequestsPageDto {
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('pageInfo' in value) || value['pageInfo'] === undefined) return false;
    return true;
}

export function OfxImportJobRequestsPageDtoFromJSON(json: any): OfxImportJobRequestsPageDto {
    return OfxImportJobRequestsPageDtoFromJSONTyped(json, false);
}

export function OfxImportJobRequestsPageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfxImportJobRequestsPageDto {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(OfxImportJobRequestsPageDtoItemsInnerFromJSON)),
        'pageInfo': ContactsPageDtoPageInfoFromJSON(json['pageInfo']),
    };
}

export function OfxImportJobRequestsPageDtoToJSON(json: any): OfxImportJobRequestsPageDto {
    return OfxImportJobRequestsPageDtoToJSONTyped(json, false);
}

export function OfxImportJobRequestsPageDtoToJSONTyped(value?: OfxImportJobRequestsPageDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'items': ((value['items'] as Array<any>).map(OfxImportJobRequestsPageDtoItemsInnerToJSON)),
        'pageInfo': ContactsPageDtoPageInfoToJSON(value['pageInfo']),
    };
}

