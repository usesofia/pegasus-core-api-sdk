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
import type { CreateFinancialRecordRequestBodyDtoPopulatedAccount } from './CreateFinancialRecordRequestBodyDtoPopulatedAccount';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedAccountFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedAccountFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedAccountToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedAccountToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedAccount';
import type { CreateFinancialRecordRequestBodyDtoPopulatedTagsInner } from './CreateFinancialRecordRequestBodyDtoPopulatedTagsInner';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedTagsInner';
import type { CreateFinancialRecordRequestBodyDtoPopulatedSubcategory } from './CreateFinancialRecordRequestBodyDtoPopulatedSubcategory';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedSubcategory';
import type { CreateFinancialRecordRequestBodyDtoPopulatedContact } from './CreateFinancialRecordRequestBodyDtoPopulatedContact';
import {
    CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSONTyped,
    CreateFinancialRecordRequestBodyDtoPopulatedContactToJSON,
    CreateFinancialRecordRequestBodyDtoPopulatedContactToJSONTyped,
} from './CreateFinancialRecordRequestBodyDtoPopulatedContact';

/**
 * Dados finais para criar registro financeiro.
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
 */
export interface CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest {
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    direction: CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestDirectionEnum;
    /**
     * Data de vencimento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    dueDate: any | null;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    contact?: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    subcategory: string;
    /**
     * Valor do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    tags?: Array<string>;
    /**
     * Data de competência.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    competenceDate?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    files?: Array<string>;
    /**
     * Chave PIX.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    pixKey?: string | null;
    /**
     * Código do boleto.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    boletoCode?: string | null;
    /**
     * Código PIX para pagamento/recebimento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    pixCode?: string | null;
    /**
     * Número da nota fiscal.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    invoiceNumber?: string | null;
    /**
     * Indica se o lançamento foi concluído.
     * @type {boolean}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    completed?: boolean;
    /**
     * Data de pagamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    cashDate?: any | null;
    /**
     * Identificador da conta.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    account?: string | null;
    /**
     * Valor do desconto.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    discount?: number | null;
    /**
     * Valor de multas e juros.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    finesAndInterest?: number | null;
    /**
     * Identificador da transação bancária vinculada.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    bankTransaction?: string | null;
    /**
     * Identificador do lançamento financeiro parcelado.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    installmentFinancialRecord?: string | null;
    /**
     * Índice da parcela (1, 2, 3, etc.).
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    installmentNumber?: number | null;
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    recurringFinancialRecord?: string | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccount}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    populatedAccount?: CreateFinancialRecordRequestBodyDtoPopulatedAccount | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    searchScore?: number | null;
    /**
     * Valor final do lançamento (calculado automaticamente).
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    finalAmount?: number;
    /**
     * Identificador do item no radar que originou o lançamento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest
     */
    radarItem?: string;
}


/**
 * @export
 */
export const CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestDirectionEnum = {
    In: 'IN',
    Out: 'OUT'
} as const;
export type CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestDirectionEnum = typeof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestDirectionEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestDirectionEnum];


/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest interface.
 */
export function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest(value: object): value is CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest {
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('dueDate' in value) || value['dueDate'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('subcategory' in value) || value['subcategory'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    return true;
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestFromJSONTyped(json, false);
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'direction': json['direction'],
        'dueDate': json['dueDate'],
        'contact': json['contact'] == null ? undefined : json['contact'],
        'description': json['description'],
        'subcategory': json['subcategory'],
        'amount': json['amount'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'competenceDate': json['competenceDate'] == null ? undefined : json['competenceDate'],
        'files': json['files'] == null ? undefined : json['files'],
        'pixKey': json['pixKey'] == null ? undefined : json['pixKey'],
        'boletoCode': json['boletoCode'] == null ? undefined : json['boletoCode'],
        'pixCode': json['pixCode'] == null ? undefined : json['pixCode'],
        'invoiceNumber': json['invoiceNumber'] == null ? undefined : json['invoiceNumber'],
        'completed': json['completed'] == null ? undefined : json['completed'],
        'cashDate': json['cashDate'] == null ? undefined : json['cashDate'],
        'account': json['account'] == null ? undefined : json['account'],
        'discount': json['discount'] == null ? undefined : json['discount'],
        'finesAndInterest': json['finesAndInterest'] == null ? undefined : json['finesAndInterest'],
        'bankTransaction': json['bankTransaction'] == null ? undefined : json['bankTransaction'],
        'installmentFinancialRecord': json['installmentFinancialRecord'] == null ? undefined : json['installmentFinancialRecord'],
        'installmentNumber': json['installmentNumber'] == null ? undefined : json['installmentNumber'],
        'recurringFinancialRecord': json['recurringFinancialRecord'] == null ? undefined : json['recurringFinancialRecord'],
        'populatedFiles': json['populatedFiles'] == null ? undefined : ((json['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerFromJSON)),
        'populatedSubcategory': json['populatedSubcategory'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON(json['populatedSubcategory']),
        'populatedContact': json['populatedContact'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSON(json['populatedContact']),
        'populatedTags': json['populatedTags'] == null ? undefined : ((json['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSON)),
        'populatedAccount': json['populatedAccount'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedAccountFromJSON(json['populatedAccount']),
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
        'finalAmount': json['finalAmount'] == null ? undefined : json['finalAmount'],
        'radarItem': json['radarItem'] == null ? undefined : json['radarItem'],
    };
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestToJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestToJSONTyped(json, false);
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'direction': value['direction'],
        'dueDate': value['dueDate'],
        'contact': value['contact'],
        'description': value['description'],
        'subcategory': value['subcategory'],
        'amount': value['amount'],
        'tags': value['tags'],
        'competenceDate': value['competenceDate'],
        'files': value['files'],
        'pixKey': value['pixKey'],
        'boletoCode': value['boletoCode'],
        'pixCode': value['pixCode'],
        'invoiceNumber': value['invoiceNumber'],
        'completed': value['completed'],
        'cashDate': value['cashDate'],
        'account': value['account'],
        'discount': value['discount'],
        'finesAndInterest': value['finesAndInterest'],
        'bankTransaction': value['bankTransaction'],
        'installmentFinancialRecord': value['installmentFinancialRecord'],
        'installmentNumber': value['installmentNumber'],
        'recurringFinancialRecord': value['recurringFinancialRecord'],
        'populatedFiles': value['populatedFiles'] == null ? undefined : ((value['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerToJSON)),
        'populatedSubcategory': CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON(value['populatedSubcategory']),
        'populatedContact': CreateFinancialRecordRequestBodyDtoPopulatedContactToJSON(value['populatedContact']),
        'populatedTags': value['populatedTags'] == null ? undefined : ((value['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSON)),
        'populatedAccount': CreateFinancialRecordRequestBodyDtoPopulatedAccountToJSON(value['populatedAccount']),
        'searchScore': value['searchScore'],
        'finalAmount': value['finalAmount'],
        'radarItem': value['radarItem'],
    };
}

