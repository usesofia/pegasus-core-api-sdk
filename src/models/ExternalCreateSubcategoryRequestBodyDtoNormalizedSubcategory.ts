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

import type { NormalizedSubcategoriesPageEntityItemsInner } from './NormalizedSubcategoriesPageEntityItemsInner';
import {
    instanceOfNormalizedSubcategoriesPageEntityItemsInner,
    NormalizedSubcategoriesPageEntityItemsInnerFromJSON,
    NormalizedSubcategoriesPageEntityItemsInnerFromJSONTyped,
    NormalizedSubcategoriesPageEntityItemsInnerToJSON,
} from './NormalizedSubcategoriesPageEntityItemsInner';
import type { string } from './string';
import {
    instanceOfstring,
    stringFromJSON,
    stringFromJSONTyped,
    stringToJSON,
} from './string';

/**
 * @type ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategory
 * Subcategoria normalizada.
 * @export
 */
export type ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategory = NormalizedSubcategoriesPageEntityItemsInner | string;

export function ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategoryFromJSON(json: any): ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategory {
    return ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategoryFromJSONTyped(json, false);
}

export function ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategory {
    if (json == null) {
        return json;
    }
    if (instanceOfNormalizedSubcategoriesPageEntityItemsInner(json)) {
        return NormalizedSubcategoriesPageEntityItemsInnerFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategoryToJSON(json: any): any {
    return ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategoryToJSONTyped(json, false);
}

export function ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategoryToJSONTyped(value?: ExternalCreateSubcategoryRequestBodyDtoNormalizedSubcategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfNormalizedSubcategoriesPageEntityItemsInner(value)) {
        return NormalizedSubcategoriesPageEntityItemsInnerToJSON(value as NormalizedSubcategoriesPageEntityItemsInner);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
