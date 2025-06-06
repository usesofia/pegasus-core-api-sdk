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
 * @interface ProspectInstallmentFinancialRecordRequestBodyDto
 */
export interface ProspectInstallmentFinancialRecordRequestBodyDto {
    /**
     * Frequência do lançamento.
     * @type {string}
     * @memberof ProspectInstallmentFinancialRecordRequestBodyDto
     */
    frequency: ProspectInstallmentFinancialRecordRequestBodyDtoFrequencyEnum;
    /**
     * Data de vencimento.
     * @type {string}
     * @memberof ProspectInstallmentFinancialRecordRequestBodyDto
     */
    firstInstallmentDate: string;
    /**
     * Valor do lançamento.
     * @type {string}
     * @memberof ProspectInstallmentFinancialRecordRequestBodyDto
     */
    amount: string;
    /**
     * Número de parcelas.
     * @type {number}
     * @memberof ProspectInstallmentFinancialRecordRequestBodyDto
     */
    numberOfInstallments: number;
}


/**
 * @export
 */
export const ProspectInstallmentFinancialRecordRequestBodyDtoFrequencyEnum = {
    Monthly: 'MONTHLY',
    Weekly: 'WEEKLY',
    Yearly: 'YEARLY'
} as const;
export type ProspectInstallmentFinancialRecordRequestBodyDtoFrequencyEnum = typeof ProspectInstallmentFinancialRecordRequestBodyDtoFrequencyEnum[keyof typeof ProspectInstallmentFinancialRecordRequestBodyDtoFrequencyEnum];


/**
 * Check if a given object implements the ProspectInstallmentFinancialRecordRequestBodyDto interface.
 */
export function instanceOfProspectInstallmentFinancialRecordRequestBodyDto(value: object): value is ProspectInstallmentFinancialRecordRequestBodyDto {
    if (!('frequency' in value) || value['frequency'] === undefined) return false;
    if (!('firstInstallmentDate' in value) || value['firstInstallmentDate'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('numberOfInstallments' in value) || value['numberOfInstallments'] === undefined) return false;
    return true;
}

export function ProspectInstallmentFinancialRecordRequestBodyDtoFromJSON(json: any): ProspectInstallmentFinancialRecordRequestBodyDto {
    return ProspectInstallmentFinancialRecordRequestBodyDtoFromJSONTyped(json, false);
}

export function ProspectInstallmentFinancialRecordRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProspectInstallmentFinancialRecordRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'frequency': json['frequency'],
        'firstInstallmentDate': json['firstInstallmentDate'],
        'amount': json['amount'],
        'numberOfInstallments': json['numberOfInstallments'],
    };
}

export function ProspectInstallmentFinancialRecordRequestBodyDtoToJSON(json: any): ProspectInstallmentFinancialRecordRequestBodyDto {
    return ProspectInstallmentFinancialRecordRequestBodyDtoToJSONTyped(json, false);
}

export function ProspectInstallmentFinancialRecordRequestBodyDtoToJSONTyped(value?: ProspectInstallmentFinancialRecordRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'frequency': value['frequency'],
        'firstInstallmentDate': value['firstInstallmentDate'],
        'amount': value['amount'],
        'numberOfInstallments': value['numberOfInstallments'],
    };
}

