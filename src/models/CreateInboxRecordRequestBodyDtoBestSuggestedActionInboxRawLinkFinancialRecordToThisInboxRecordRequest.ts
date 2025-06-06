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
 * Dados para vincular registro financeiro ao inbox record.
 * @export
 * @interface CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest
 */
export interface CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest {
    /**
     * ID do registro financeiro a ser vinculado.
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest
     */
    financialRecord: string;
}

/**
 * Check if a given object implements the CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest interface.
 */
export function instanceOfCreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest(value: object): value is CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest {
    if (!('financialRecord' in value) || value['financialRecord'] === undefined) return false;
    return true;
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequestFromJSON(json: any): CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest {
    return CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequestFromJSONTyped(json, false);
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'financialRecord': json['financialRecord'],
    };
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequestToJSON(json: any): CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest {
    return CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequestToJSONTyped(json, false);
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequestToJSONTyped(value?: CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawLinkFinancialRecordToThisInboxRecordRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'financialRecord': value['financialRecord'],
    };
}

