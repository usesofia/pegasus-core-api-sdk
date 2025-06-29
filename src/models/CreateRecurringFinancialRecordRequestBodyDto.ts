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
import type { CreateFinancialRecordRequestBodyDtoPopulatedFilesInner } from './CreateFinancialRecordRequestBodyDtoPopulatedFilesInner';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedFilesInner';
import type { CreateFinancialRecordRequestBodyDtoPopulatedTagsInner } from './CreateFinancialRecordRequestBodyDtoPopulatedTagsInner';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedTagsInner';
import type { CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory } from './CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory';
import {
    CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON,
    CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSONTyped,
    CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON,
    CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSONTyped,
} from './CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory';
import type { CreateFinancialRecordRequestBodyDtoPopulatedContact } from './CreateFinancialRecordRequestBodyDtoPopulatedContact';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedContactToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedContactToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedContact';

/**
 * 
 * @export
 * @interface CreateRecurringFinancialRecordRequestBodyDto
 */
export interface CreateRecurringFinancialRecordRequestBodyDto {
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    direction: CreateRecurringFinancialRecordRequestBodyDtoDirectionEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    firstOccurrenceDate: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    description: string;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    contact?: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    subcategory: string;
    /**
     * 
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    amount: string;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    tags?: Array<string>;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    files?: Array<string>;
    /**
     * Frequência de repetição do lançamento.
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    frequency: CreateRecurringFinancialRecordRequestBodyDtoFrequencyEnum;
    /**
     * Dia de repetição do lançamento.
     * @type {number}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    repetitionDay: number;
    /**
     * Mês de repetição do lançamento.
     * @type {number}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    repetitionMonth?: number | null;
    /**
     * Indica se o lançamento será apenas em dias úteis.
     * @type {boolean}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    onlyBusinessDays?: boolean;
    /**
     * Indica se o lançamento será completado automaticamente.
     * @type {boolean}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    automaticCompletion?: boolean;
    /**
     * Indica se o lançamento recorrente está ativo.
     * @type {boolean}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    isActive?: boolean;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     * 
     * @type {CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    populatedSubcategory?: CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     * 
     * @type {number}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    searchScore?: number;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof CreateRecurringFinancialRecordRequestBodyDto
     */
    channel: CreateRecurringFinancialRecordRequestBodyDtoChannelEnum;
}


/**
 * @export
 */
export const CreateRecurringFinancialRecordRequestBodyDtoDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
} as const;
export type CreateRecurringFinancialRecordRequestBodyDtoDirectionEnum = typeof CreateRecurringFinancialRecordRequestBodyDtoDirectionEnum[keyof typeof CreateRecurringFinancialRecordRequestBodyDtoDirectionEnum];

/**
 * @export
 */
export const CreateRecurringFinancialRecordRequestBodyDtoFrequencyEnum = {
    Weekly: 'WEEKLY',
    Monthly: 'MONTHLY',
    Yearly: 'YEARLY'
} as const;
export type CreateRecurringFinancialRecordRequestBodyDtoFrequencyEnum = typeof CreateRecurringFinancialRecordRequestBodyDtoFrequencyEnum[keyof typeof CreateRecurringFinancialRecordRequestBodyDtoFrequencyEnum];

/**
 * @export
 */
export const CreateRecurringFinancialRecordRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
} as const;
export type CreateRecurringFinancialRecordRequestBodyDtoChannelEnum = typeof CreateRecurringFinancialRecordRequestBodyDtoChannelEnum[keyof typeof CreateRecurringFinancialRecordRequestBodyDtoChannelEnum];


/**
 * Check if a given object implements the CreateRecurringFinancialRecordRequestBodyDto interface.
 */
export function instanceOfCreateRecurringFinancialRecordRequestBodyDto(value: object): value is CreateRecurringFinancialRecordRequestBodyDto {
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('firstOccurrenceDate' in value) || value['firstOccurrenceDate'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('subcategory' in value) || value['subcategory'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('frequency' in value) || value['frequency'] === undefined) return false;
    if (!('repetitionDay' in value) || value['repetitionDay'] === undefined) return false;
    if (!('channel' in value) || value['channel'] === undefined) return false;
    return true;
}

export function CreateRecurringFinancialRecordRequestBodyDtoFromJSON(json: any): CreateRecurringFinancialRecordRequestBodyDto {
    return CreateRecurringFinancialRecordRequestBodyDtoFromJSONTyped(json, false);
}

export function CreateRecurringFinancialRecordRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRecurringFinancialRecordRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'direction': json['direction'],
        'firstOccurrenceDate': json['firstOccurrenceDate'],
        'description': json['description'],
        'contact': json['contact'] == null ? undefined : json['contact'],
        'subcategory': json['subcategory'],
        'amount': json['amount'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'files': json['files'] == null ? undefined : json['files'],
        'frequency': json['frequency'],
        'repetitionDay': json['repetitionDay'],
        'repetitionMonth': json['repetitionMonth'] == null ? undefined : json['repetitionMonth'],
        'onlyBusinessDays': json['onlyBusinessDays'] == null ? undefined : json['onlyBusinessDays'],
        'automaticCompletion': json['automaticCompletion'] == null ? undefined : json['automaticCompletion'],
        'isActive': json['isActive'] == null ? undefined : json['isActive'],
        'populatedContact': json['populatedContact'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSON(json['populatedContact']),
        'populatedTags': json['populatedTags'] == null ? undefined : ((json['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSON)),
        'populatedSubcategory': json['populatedSubcategory'] == null ? undefined : CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON(json['populatedSubcategory']),
        'populatedFiles': json['populatedFiles'] == null ? undefined : ((json['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerFromJSON)),
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
        'channel': json['channel'],
    };
}

export function CreateRecurringFinancialRecordRequestBodyDtoToJSON(json: any): CreateRecurringFinancialRecordRequestBodyDto {
    return CreateRecurringFinancialRecordRequestBodyDtoToJSONTyped(json, false);
}

export function CreateRecurringFinancialRecordRequestBodyDtoToJSONTyped(value?: CreateRecurringFinancialRecordRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'direction': value['direction'],
        'firstOccurrenceDate': value['firstOccurrenceDate'],
        'description': value['description'],
        'contact': value['contact'],
        'subcategory': value['subcategory'],
        'amount': value['amount'],
        'tags': value['tags'],
        'files': value['files'],
        'frequency': value['frequency'],
        'repetitionDay': value['repetitionDay'],
        'repetitionMonth': value['repetitionMonth'],
        'onlyBusinessDays': value['onlyBusinessDays'],
        'automaticCompletion': value['automaticCompletion'],
        'isActive': value['isActive'],
        'populatedContact': CreateFinancialRecordRequestBodyDtoPopulatedContactToJSON(value['populatedContact']),
        'populatedTags': value['populatedTags'] == null ? undefined : ((value['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSON)),
        'populatedSubcategory': CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON(value['populatedSubcategory']),
        'populatedFiles': value['populatedFiles'] == null ? undefined : ((value['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerToJSON)),
        'searchScore': value['searchScore'],
        'channel': value['channel'],
    };
}

