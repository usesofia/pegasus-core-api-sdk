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
 * Categoria da subcategoria.
 * @export
 * @interface NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
 */
export interface NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory {
    /**
     * Identificador da categoria.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    id: string;
    /**
     * Direção da categoria (IN ou OUT).
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    direction: NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryDirectionEnum;
    /**
     * Índice da categoria.
     * @type {number}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    index: number;
    /**
     * Nome da categoria.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    name: string;
    /**
     * Slug da categoria.
     * @type {string}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    slug: string;
    /**
     * Data de criação da categoria.
     * @type {Date}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    createdAt: Date;
    /**
     * Data de atualização da categoria.
     * @type {Date}
     * @memberof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory
     */
    updatedAt: Date;
}


/**
 * @export
 */
export const NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
} as const;
export type NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryDirectionEnum = typeof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryDirectionEnum[keyof typeof NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryDirectionEnum];


/**
 * Check if a given object implements the NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory interface.
 */
export function instanceOfNormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory(value: object): value is NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('index' in value) || value['index'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryFromJSON(json: any): NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory {
    return NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryFromJSONTyped(json, false);
}

export function NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'direction': json['direction'],
        'index': json['index'],
        'name': json['name'],
        'slug': json['slug'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryToJSON(json: any): NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory {
    return NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryToJSONTyped(json, false);
}

export function NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryToJSONTyped(value?: NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'direction': value['direction'],
        'index': value['index'],
        'name': value['name'],
        'slug': value['slug'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}
