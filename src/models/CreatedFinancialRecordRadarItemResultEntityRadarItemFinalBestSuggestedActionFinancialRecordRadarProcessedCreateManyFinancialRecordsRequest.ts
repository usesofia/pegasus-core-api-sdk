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
 * Dados finais para criar múltiplos registros financeiros.
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest
 */
export interface CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest
     */
    fileId: string;
    /**
     * Número de linhas a serem criadas.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest
     */
    nRows: number;
}

/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest interface.
 */
export function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest(value: object): value is CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest {
    if (!('fileId' in value) || value['fileId'] === undefined) return false;
    if (!('nRows' in value) || value['nRows'] === undefined) return false;
    return true;
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestFromJSONTyped(json, false);
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'fileId': json['fileId'],
        'nRows': json['nRows'],
    };
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestToJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestToJSONTyped(json, false);
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileId': value['fileId'],
        'nRows': value['nRows'],
    };
}

