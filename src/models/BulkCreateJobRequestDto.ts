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
 * @interface BulkCreateJobRequestDto
 */
export interface BulkCreateJobRequestDto {
    /**
     * 
     * @type {string}
     * @memberof BulkCreateJobRequestDto
     */
    fileId: string;
    /**
     * 
     * @type {string}
     * @memberof BulkCreateJobRequestDto
     */
    resource: BulkCreateJobRequestDtoResourceEnum;
    /**
     * 
     * @type {number}
     * @memberof BulkCreateJobRequestDto
     */
    nRows: number;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof BulkCreateJobRequestDto
     */
    channel: BulkCreateJobRequestDtoChannelEnum;
    /**
     * 
     * @type {string}
     * @memberof BulkCreateJobRequestDto
     */
    radarItem?: string;
}


/**
 * @export
 */
export const BulkCreateJobRequestDtoResourceEnum = {
    FinancialRecords: 'FinancialRecords',
    Contacts: 'Contacts',
    BankAccounts: 'BankAccounts',
    BankTransactions: 'BankTransactions',
    InstallmentFinancialRecords: 'InstallmentFinancialRecords',
    RecurringFinancialRecords: 'RecurringFinancialRecords',
    Tags: 'Tags',
    Subcategories: 'Subcategories'
} as const;
export type BulkCreateJobRequestDtoResourceEnum = typeof BulkCreateJobRequestDtoResourceEnum[keyof typeof BulkCreateJobRequestDtoResourceEnum];

/**
 * @export
 */
export const BulkCreateJobRequestDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
} as const;
export type BulkCreateJobRequestDtoChannelEnum = typeof BulkCreateJobRequestDtoChannelEnum[keyof typeof BulkCreateJobRequestDtoChannelEnum];


/**
 * Check if a given object implements the BulkCreateJobRequestDto interface.
 */
export function instanceOfBulkCreateJobRequestDto(value: object): value is BulkCreateJobRequestDto {
    if (!('fileId' in value) || value['fileId'] === undefined) return false;
    if (!('resource' in value) || value['resource'] === undefined) return false;
    if (!('nRows' in value) || value['nRows'] === undefined) return false;
    if (!('channel' in value) || value['channel'] === undefined) return false;
    return true;
}

export function BulkCreateJobRequestDtoFromJSON(json: any): BulkCreateJobRequestDto {
    return BulkCreateJobRequestDtoFromJSONTyped(json, false);
}

export function BulkCreateJobRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkCreateJobRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'fileId': json['fileId'],
        'resource': json['resource'],
        'nRows': json['nRows'],
        'channel': json['channel'],
        'radarItem': json['radarItem'] == null ? undefined : json['radarItem'],
    };
}

export function BulkCreateJobRequestDtoToJSON(json: any): BulkCreateJobRequestDto {
    return BulkCreateJobRequestDtoToJSONTyped(json, false);
}

export function BulkCreateJobRequestDtoToJSONTyped(value?: BulkCreateJobRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileId': value['fileId'],
        'resource': value['resource'],
        'nRows': value['nRows'],
        'channel': value['channel'],
        'radarItem': value['radarItem'],
    };
}

