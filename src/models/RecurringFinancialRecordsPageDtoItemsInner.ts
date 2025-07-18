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
 * @interface RecurringFinancialRecordsPageDtoItemsInner
 */
export interface RecurringFinancialRecordsPageDtoItemsInner {
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    direction: RecurringFinancialRecordsPageDtoItemsInnerDirectionEnum;
    /**
     * Data da primeira ocorrência do registro financeiro recorrente. Esta data é obrigatória e deve ser uma string no formato ISO sem hora.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    firstOccurrenceDate: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    description: string;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    contact: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    subcategory: string;
    /**
     * Valor do registro financeiro recorrente. Deve ser uma string representando um número.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    amount: string;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    tags?: Array<string>;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    files?: Array<string>;
    /**
     * Frequência de repetição do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    frequency: RecurringFinancialRecordsPageDtoItemsInnerFrequencyEnum;
    /**
     * Dia de repetição do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    repetitionDay: number;
    /**
     * Mês de repetição do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    repetitionMonth?: number | null;
    /**
     * Indica se o lançamento será apenas em dias úteis.
     * @type {boolean}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    onlyBusinessDays?: boolean;
    /**
     * Indica se o lançamento será completado automaticamente.
     * @type {boolean}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    automaticCompletion?: boolean;
    /**
     * Indica se o lançamento recorrente está ativo.
     * @type {boolean}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    isActive?: boolean;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    updatedAt?: any | null;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     * 
     * @type {CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    populatedSubcategory?: CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     * 
     * @type {number}
     * @memberof RecurringFinancialRecordsPageDtoItemsInner
     */
    searchScore?: number;
}


/**
 * @export
 */
export const RecurringFinancialRecordsPageDtoItemsInnerDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
} as const;
export type RecurringFinancialRecordsPageDtoItemsInnerDirectionEnum = typeof RecurringFinancialRecordsPageDtoItemsInnerDirectionEnum[keyof typeof RecurringFinancialRecordsPageDtoItemsInnerDirectionEnum];

/**
 * @export
 */
export const RecurringFinancialRecordsPageDtoItemsInnerFrequencyEnum = {
    Weekly: 'WEEKLY',
    Monthly: 'MONTHLY',
    Yearly: 'YEARLY'
} as const;
export type RecurringFinancialRecordsPageDtoItemsInnerFrequencyEnum = typeof RecurringFinancialRecordsPageDtoItemsInnerFrequencyEnum[keyof typeof RecurringFinancialRecordsPageDtoItemsInnerFrequencyEnum];


/**
 * Check if a given object implements the RecurringFinancialRecordsPageDtoItemsInner interface.
 */
export function instanceOfRecurringFinancialRecordsPageDtoItemsInner(value: object): value is RecurringFinancialRecordsPageDtoItemsInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('firstOccurrenceDate' in value) || value['firstOccurrenceDate'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('contact' in value) || value['contact'] === undefined) return false;
    if (!('subcategory' in value) || value['subcategory'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('frequency' in value) || value['frequency'] === undefined) return false;
    if (!('repetitionDay' in value) || value['repetitionDay'] === undefined) return false;
    return true;
}

export function RecurringFinancialRecordsPageDtoItemsInnerFromJSON(json: any): RecurringFinancialRecordsPageDtoItemsInner {
    return RecurringFinancialRecordsPageDtoItemsInnerFromJSONTyped(json, false);
}

export function RecurringFinancialRecordsPageDtoItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringFinancialRecordsPageDtoItemsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ownerOrganization': json['ownerOrganization'],
        'direction': json['direction'],
        'firstOccurrenceDate': json['firstOccurrenceDate'],
        'description': json['description'],
        'contact': json['contact'],
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
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'populatedContact': json['populatedContact'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSON(json['populatedContact']),
        'populatedTags': json['populatedTags'] == null ? undefined : ((json['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSON)),
        'populatedSubcategory': json['populatedSubcategory'] == null ? undefined : CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON(json['populatedSubcategory']),
        'populatedFiles': json['populatedFiles'] == null ? undefined : ((json['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerFromJSON)),
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
    };
}

export function RecurringFinancialRecordsPageDtoItemsInnerToJSON(json: any): RecurringFinancialRecordsPageDtoItemsInner {
    return RecurringFinancialRecordsPageDtoItemsInnerToJSONTyped(json, false);
}

export function RecurringFinancialRecordsPageDtoItemsInnerToJSONTyped(value?: RecurringFinancialRecordsPageDtoItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'ownerOrganization': value['ownerOrganization'],
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
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
        'populatedContact': CreateFinancialRecordRequestBodyDtoPopulatedContactToJSON(value['populatedContact']),
        'populatedTags': value['populatedTags'] == null ? undefined : ((value['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSON)),
        'populatedSubcategory': CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON(value['populatedSubcategory']),
        'populatedFiles': value['populatedFiles'] == null ? undefined : ((value['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerToJSON)),
        'searchScore': value['searchScore'],
    };
}

