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
import type { ContactsPageEntityPageInfo } from './ContactsPageEntityPageInfo';
import {
    ContactsPageEntityPageInfoFromJSON,
    ContactsPageEntityPageInfoFromJSONTyped,
    ContactsPageEntityPageInfoToJSON,
    ContactsPageEntityPageInfoToJSONTyped,
} from './ContactsPageEntityPageInfo';
import type { SubcategoriesPageEntityItemsInner } from './SubcategoriesPageEntityItemsInner';
import {
    SubcategoriesPageEntityItemsInnerFromJSON,
    SubcategoriesPageEntityItemsInnerFromJSONTyped,
    SubcategoriesPageEntityItemsInnerToJSON,
    SubcategoriesPageEntityItemsInnerToJSONTyped,
} from './SubcategoriesPageEntityItemsInner';

/**
 * 
 * @export
 * @interface SubcategoriesPageEntity
 */
export interface SubcategoriesPageEntity {
    /**
     * 
     * @type {Array<SubcategoriesPageEntityItemsInner>}
     * @memberof SubcategoriesPageEntity
     */
    items: Array<SubcategoriesPageEntityItemsInner>;
    /**
     * 
     * @type {ContactsPageEntityPageInfo}
     * @memberof SubcategoriesPageEntity
     */
    pageInfo: ContactsPageEntityPageInfo;
}

/**
 * Check if a given object implements the SubcategoriesPageEntity interface.
 */
export function instanceOfSubcategoriesPageEntity(value: object): value is SubcategoriesPageEntity {
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('pageInfo' in value) || value['pageInfo'] === undefined) return false;
    return true;
}

export function SubcategoriesPageEntityFromJSON(json: any): SubcategoriesPageEntity {
    return SubcategoriesPageEntityFromJSONTyped(json, false);
}

export function SubcategoriesPageEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubcategoriesPageEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(SubcategoriesPageEntityItemsInnerFromJSON)),
        'pageInfo': ContactsPageEntityPageInfoFromJSON(json['pageInfo']),
    };
}

export function SubcategoriesPageEntityToJSON(json: any): SubcategoriesPageEntity {
    return SubcategoriesPageEntityToJSONTyped(json, false);
}

export function SubcategoriesPageEntityToJSONTyped(value?: SubcategoriesPageEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'items': ((value['items'] as Array<any>).map(SubcategoriesPageEntityItemsInnerToJSON)),
        'pageInfo': ContactsPageEntityPageInfoToJSON(value['pageInfo']),
    };
}
