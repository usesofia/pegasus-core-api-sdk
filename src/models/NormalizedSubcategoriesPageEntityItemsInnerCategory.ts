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

import type { CategoriesPageEntityItemsInner } from './CategoriesPageEntityItemsInner';
import {
    instanceOfCategoriesPageEntityItemsInner,
    CategoriesPageEntityItemsInnerFromJSON,
    CategoriesPageEntityItemsInnerFromJSONTyped,
    CategoriesPageEntityItemsInnerToJSON,
} from './CategoriesPageEntityItemsInner';
import type { string } from './string';
import {
    instanceOfstring,
    stringFromJSON,
    stringFromJSONTyped,
    stringToJSON,
} from './string';

/**
 * @type NormalizedSubcategoriesPageEntityItemsInnerCategory
 * Categoria da subcategoria.
 * @export
 */
export type NormalizedSubcategoriesPageEntityItemsInnerCategory = CategoriesPageEntityItemsInner | string;

export function NormalizedSubcategoriesPageEntityItemsInnerCategoryFromJSON(json: any): NormalizedSubcategoriesPageEntityItemsInnerCategory {
    return NormalizedSubcategoriesPageEntityItemsInnerCategoryFromJSONTyped(json, false);
}

export function NormalizedSubcategoriesPageEntityItemsInnerCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedSubcategoriesPageEntityItemsInnerCategory {
    if (json == null) {
        return json;
    }
    if (instanceOfCategoriesPageEntityItemsInner(json)) {
        return CategoriesPageEntityItemsInnerFromJSONTyped(json, true);
    }
    if (instanceOfstring(json)) {
        return stringFromJSONTyped(json, true);
    }

    return {} as any;
}

export function NormalizedSubcategoriesPageEntityItemsInnerCategoryToJSON(json: any): any {
    return NormalizedSubcategoriesPageEntityItemsInnerCategoryToJSONTyped(json, false);
}

export function NormalizedSubcategoriesPageEntityItemsInnerCategoryToJSONTyped(value?: NormalizedSubcategoriesPageEntityItemsInnerCategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfCategoriesPageEntityItemsInner(value)) {
        return CategoriesPageEntityItemsInnerToJSON(value as CategoriesPageEntityItemsInner);
    }
    if (instanceOfstring(value)) {
        return stringToJSON(value as string);
    }

    return {};
}
