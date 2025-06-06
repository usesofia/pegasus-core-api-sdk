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
 * Registro financeiro criado pelo auto-execute.
 * @export
 * @interface InboxRecordEntityAutoExecuteCreatedFinancialRecord
 */
export interface InboxRecordEntityAutoExecuteCreatedFinancialRecord {
    /**
     * Identificador do lançamento financeiro.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    direction: InboxRecordEntityAutoExecuteCreatedFinancialRecordDirectionEnum;
    /**
     * Data de vencimento.
     * @type {any}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    dueDate: any | null;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    contact: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    subcategory: string;
    /**
     * Valor do lançamento.
     * @type {number}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    tags?: Array<string>;
    /**
     * Data de competência.
     * @type {any}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    competenceDate?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    files?: Array<string>;
    /**
     * Ids de registros de inbox relacionados.
     * @type {Array<string>}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    inboxRecords?: Array<string>;
    /**
     * Chave PIX.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    pixKey?: string | null;
    /**
     * Código do boleto.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    boletoCode?: string | null;
    /**
     * Código PIX para pagamento/recebimento.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    pixCode?: string | null;
    /**
     * Número da nota fiscal.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    invoiceNumber?: string | null;
    /**
     * Indica se o lançamento foi concluído.
     * @type {boolean}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    completed?: boolean;
    /**
     * Data de pagamento.
     * @type {any}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    cashDate?: any | null;
    /**
     * Identificador da conta.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    account?: string | null;
    /**
     * Valor do desconto.
     * @type {number}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    discount?: number | null;
    /**
     * Valor de multas e juros.
     * @type {number}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    finesAndInterest?: number | null;
    /**
     * Valor final do lançamento.
     * @type {number}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    finalAmount: number;
    /**
     * Indica se foi reconciliado.
     * @type {boolean}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    reconciled?: boolean;
    /**
     * Identificador do extrato bancário.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    bankStatement?: string | null;
    /**
     * Identificador do lançamento financeiro parcelado.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    installmentFinancialRecord?: string | null;
    /**
     * Índice da parcela (1, 2, 3, etc.).
     * @type {number}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    installmentNumber?: number | null;
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    recurringFinancialRecord?: string | null;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    updatedAt?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     * 
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccount}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    populatedAccount?: CreateFinancialRecordRequestBodyDtoPopulatedAccount | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof InboxRecordEntityAutoExecuteCreatedFinancialRecord
     */
    searchScore?: number | null;
}


/**
 * @export
 */
export const InboxRecordEntityAutoExecuteCreatedFinancialRecordDirectionEnum = {
    Income: 'INCOME',
    Outcome: 'OUTCOME'
} as const;
export type InboxRecordEntityAutoExecuteCreatedFinancialRecordDirectionEnum = typeof InboxRecordEntityAutoExecuteCreatedFinancialRecordDirectionEnum[keyof typeof InboxRecordEntityAutoExecuteCreatedFinancialRecordDirectionEnum];


/**
 * Check if a given object implements the InboxRecordEntityAutoExecuteCreatedFinancialRecord interface.
 */
export function instanceOfInboxRecordEntityAutoExecuteCreatedFinancialRecord(value: object): value is InboxRecordEntityAutoExecuteCreatedFinancialRecord {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('dueDate' in value) || value['dueDate'] === undefined) return false;
    if (!('contact' in value) || value['contact'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('subcategory' in value) || value['subcategory'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('finalAmount' in value) || value['finalAmount'] === undefined) return false;
    return true;
}

export function InboxRecordEntityAutoExecuteCreatedFinancialRecordFromJSON(json: any): InboxRecordEntityAutoExecuteCreatedFinancialRecord {
    return InboxRecordEntityAutoExecuteCreatedFinancialRecordFromJSONTyped(json, false);
}

export function InboxRecordEntityAutoExecuteCreatedFinancialRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxRecordEntityAutoExecuteCreatedFinancialRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ownerOrganization': json['ownerOrganization'],
        'direction': json['direction'],
        'dueDate': json['dueDate'],
        'contact': json['contact'],
        'description': json['description'],
        'subcategory': json['subcategory'],
        'amount': json['amount'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'competenceDate': json['competenceDate'] == null ? undefined : json['competenceDate'],
        'files': json['files'] == null ? undefined : json['files'],
        'inboxRecords': json['inboxRecords'] == null ? undefined : json['inboxRecords'],
        'pixKey': json['pixKey'] == null ? undefined : json['pixKey'],
        'boletoCode': json['boletoCode'] == null ? undefined : json['boletoCode'],
        'pixCode': json['pixCode'] == null ? undefined : json['pixCode'],
        'invoiceNumber': json['invoiceNumber'] == null ? undefined : json['invoiceNumber'],
        'completed': json['completed'] == null ? undefined : json['completed'],
        'cashDate': json['cashDate'] == null ? undefined : json['cashDate'],
        'account': json['account'] == null ? undefined : json['account'],
        'discount': json['discount'] == null ? undefined : json['discount'],
        'finesAndInterest': json['finesAndInterest'] == null ? undefined : json['finesAndInterest'],
        'finalAmount': json['finalAmount'],
        'reconciled': json['reconciled'] == null ? undefined : json['reconciled'],
        'bankStatement': json['bankStatement'] == null ? undefined : json['bankStatement'],
        'installmentFinancialRecord': json['installmentFinancialRecord'] == null ? undefined : json['installmentFinancialRecord'],
        'installmentNumber': json['installmentNumber'] == null ? undefined : json['installmentNumber'],
        'recurringFinancialRecord': json['recurringFinancialRecord'] == null ? undefined : json['recurringFinancialRecord'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'populatedFiles': json['populatedFiles'] == null ? undefined : ((json['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerFromJSON)),
        'populatedSubcategory': json['populatedSubcategory'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON(json['populatedSubcategory']),
        'populatedContact': json['populatedContact'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedContactFromJSON(json['populatedContact']),
        'populatedTags': json['populatedTags'] == null ? undefined : ((json['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerFromJSON)),
        'populatedAccount': json['populatedAccount'] == null ? undefined : CreateFinancialRecordRequestBodyDtoPopulatedAccountFromJSON(json['populatedAccount']),
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
    };
}

export function InboxRecordEntityAutoExecuteCreatedFinancialRecordToJSON(json: any): InboxRecordEntityAutoExecuteCreatedFinancialRecord {
    return InboxRecordEntityAutoExecuteCreatedFinancialRecordToJSONTyped(json, false);
}

export function InboxRecordEntityAutoExecuteCreatedFinancialRecordToJSONTyped(value?: InboxRecordEntityAutoExecuteCreatedFinancialRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'ownerOrganization': value['ownerOrganization'],
        'direction': value['direction'],
        'dueDate': value['dueDate'],
        'contact': value['contact'],
        'description': value['description'],
        'subcategory': value['subcategory'],
        'amount': value['amount'],
        'tags': value['tags'],
        'competenceDate': value['competenceDate'],
        'files': value['files'],
        'inboxRecords': value['inboxRecords'],
        'pixKey': value['pixKey'],
        'boletoCode': value['boletoCode'],
        'pixCode': value['pixCode'],
        'invoiceNumber': value['invoiceNumber'],
        'completed': value['completed'],
        'cashDate': value['cashDate'],
        'account': value['account'],
        'discount': value['discount'],
        'finesAndInterest': value['finesAndInterest'],
        'finalAmount': value['finalAmount'],
        'reconciled': value['reconciled'],
        'bankStatement': value['bankStatement'],
        'installmentFinancialRecord': value['installmentFinancialRecord'],
        'installmentNumber': value['installmentNumber'],
        'recurringFinancialRecord': value['recurringFinancialRecord'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
        'populatedFiles': value['populatedFiles'] == null ? undefined : ((value['populatedFiles'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedFilesInnerToJSON)),
        'populatedSubcategory': CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON(value['populatedSubcategory']),
        'populatedContact': CreateFinancialRecordRequestBodyDtoPopulatedContactToJSON(value['populatedContact']),
        'populatedTags': value['populatedTags'] == null ? undefined : ((value['populatedTags'] as Array<any>).map(CreateFinancialRecordRequestBodyDtoPopulatedTagsInnerToJSON)),
        'populatedAccount': CreateFinancialRecordRequestBodyDtoPopulatedAccountToJSON(value['populatedAccount']),
        'searchScore': value['searchScore'],
    };
}

