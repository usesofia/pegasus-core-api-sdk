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
import type { CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner } from './CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner';
import {
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerFromJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerFromJSONTyped,
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerToJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerToJSONTyped,
} from './CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner';

/**
 * Mensagem citada.
 * @export
 * @interface CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted
 */
export interface CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted {
    /**
     * Timestamp da mensagem citada.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted
     */
    timestamp: string;
    /**
     * Telefone da mensagem citada.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted
     */
    phone: string;
    /**
     * Nome da mensagem citada.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted
     */
    name?: string | null;
    /**
     * Conteúdo da mensagem citada.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted
     */
    content: string;
    /**
     * Arquivos da mensagem citada.
     * @type {Array<CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted
     */
    files?: Array<CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner> | null;
}

/**
 * Check if a given object implements the CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted interface.
 */
export function instanceOfCreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted(value: object): value is CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted {
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('phone' in value) || value['phone'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuotedFromJSON(json: any): CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted {
    return CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuotedFromJSONTyped(json, false);
}

export function CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuotedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'phone': json['phone'],
        'name': json['name'] == null ? undefined : json['name'],
        'content': json['content'],
        'files': json['files'] == null ? undefined : ((json['files'] as Array<any>).map(CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerFromJSON)),
    };
}

export function CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuotedToJSON(json: any): CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted {
    return CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuotedToJSONTyped(json, false);
}

export function CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuotedToJSONTyped(value?: CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'timestamp': value['timestamp'],
        'phone': value['phone'],
        'name': value['name'],
        'content': value['content'],
        'files': value['files'] == null ? undefined : ((value['files'] as Array<any>).map(CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerToJSON)),
    };
}

