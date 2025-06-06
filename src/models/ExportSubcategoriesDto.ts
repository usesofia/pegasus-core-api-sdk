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
 * @interface ExportSubcategoriesDto
 */
export interface ExportSubcategoriesDto {
    /**
     * 
     * @type {string}
     * @memberof ExportSubcategoriesDto
     */
    id: string;
}

/**
 * Check if a given object implements the ExportSubcategoriesDto interface.
 */
export function instanceOfExportSubcategoriesDto(value: object): value is ExportSubcategoriesDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ExportSubcategoriesDtoFromJSON(json: any): ExportSubcategoriesDto {
    return ExportSubcategoriesDtoFromJSONTyped(json, false);
}

export function ExportSubcategoriesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportSubcategoriesDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function ExportSubcategoriesDtoToJSON(json: any): ExportSubcategoriesDto {
    return ExportSubcategoriesDtoToJSONTyped(json, false);
}

export function ExportSubcategoriesDtoToJSONTyped(value?: ExportSubcategoriesDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

