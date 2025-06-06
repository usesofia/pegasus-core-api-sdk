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
 * @interface CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId
 */
export interface CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId {
    /**
     * 
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId
     */
    type: CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdTypeEnum;
    /**
     * ID do registro financeiro ou inbox record.
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId
     */
    value: string;
}


/**
 * @export
 */
export const CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdTypeEnum = {
    SpecificResource: 'SPECIFIC_RESOURCE',
    InboxRecord: 'INBOX_RECORD'
} as const;
export type CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdTypeEnum = typeof CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdTypeEnum[keyof typeof CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdTypeEnum];


/**
 * Check if a given object implements the CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId interface.
 */
export function instanceOfCreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId(value: object): value is CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdFromJSON(json: any): CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId {
    return CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdFromJSONTyped(json, false);
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdToJSON(json: any): CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId {
    return CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdToJSONTyped(json, false);
}

export function CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestIdToJSONTyped(value?: CreateInboxRecordRequestBodyDtoBestSuggestedActionInboxRawPartialUpdateFinancialRecordRequestId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'value': value['value'],
    };
}

