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
import type { CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata } from './CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata';
import {
    CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadataFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadataFromJSONTyped,
    CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadataToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadataToJSONTyped,
} from './CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata';
import type { CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion } from './CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion';
import {
    CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionFromJSONTyped,
    CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionToJSONTyped,
} from './CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion';
import type { CreateOrUpdateBankTransactionRequestBodyDtoMerchant } from './CreateOrUpdateBankTransactionRequestBodyDtoMerchant';
import {
    CreateOrUpdateBankTransactionRequestBodyDtoMerchantFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoMerchantFromJSONTyped,
    CreateOrUpdateBankTransactionRequestBodyDtoMerchantToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoMerchantToJSONTyped,
} from './CreateOrUpdateBankTransactionRequestBodyDtoMerchant';
import type { BankTransactionEntityPopulatedBankAccount } from './BankTransactionEntityPopulatedBankAccount';
import {
    BankTransactionEntityPopulatedBankAccountFromJSON,
    BankTransactionEntityPopulatedBankAccountFromJSONTyped,
    BankTransactionEntityPopulatedBankAccountToJSON,
    BankTransactionEntityPopulatedBankAccountToJSONTyped,
} from './BankTransactionEntityPopulatedBankAccount';
import type { CreateOrUpdateBankTransactionRequestBodyDtoPaymentData } from './CreateOrUpdateBankTransactionRequestBodyDtoPaymentData';
import {
    CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataFromJSONTyped,
    CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataToJSONTyped,
} from './CreateOrUpdateBankTransactionRequestBodyDtoPaymentData';

/**
 * 
 * @export
 * @interface BankTransactionsPageDtoItemsInner
 */
export interface BankTransactionsPageDtoItemsInner {
    /**
     * Identificador da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    id: string;
    /**
     * Identificador da organização dona da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    ownerOrganization: string;
    /**
     * Identificador da conta bancária da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    bankAccount: string;
    /**
     * Nome da conta bancária da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    bankAccountName: string;
    /**
     * Número da conta bancária da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    bankAccountNumber: string;
    /**
     * Nome da instituição bancária da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    bankAccountInstitutionName: string;
    /**
     * 
     * @type {BankTransactionEntityPopulatedBankAccount}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    populatedBankAccount?: BankTransactionEntityPopulatedBankAccount | null;
    /**
     * Provedor da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    provider: BankTransactionsPageDtoItemsInnerProviderEnum;
    /**
     * Identificador da movimentação financeira no provedor.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    providerTransactionId: string;
    /**
     * Valor da movimentação financeira em centavos.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    amountInBrl: string;
    /**
     * Variações do valor da movimentação financeira em centavos.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    amountInBrlVariations: string;
    /**
     * Data da movimentação financeira.
     * @type {any}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    date: any | null;
    /**
     * Variações da data da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    dateVariations: string;
    /**
     * Tipo da movimentação financeira (entrada ou saída).
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    type: BankTransactionsPageDtoItemsInnerTypeEnum;
    /**
     * Variações do tipo da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    typeVariations: string;
    /**
     * Descrição da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    description?: string | null;
    /**
     * Status da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    status: BankTransactionsPageDtoItemsInnerStatusEnum;
    /**
     * Indica se a movimentação financeira deve ser ignorada.
     * @type {boolean}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    ignored: boolean;
    /**
     * Indica se a transação foi conciliada com lançamentos financeiros.
     * @type {boolean}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    reconciled?: boolean;
    /**
     * IDs dos lançamentos financeiros vinculados a esta transação bancária.
     * @type {Array<string>}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    financialRecords?: Array<string>;
    /**
     * 
     * @type {CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    aiSuggestion?: CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion | null;
    /**
     * Identificador da solicitação de importação OFX relacionada.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    ofxJobRequestId?: string | null;
    /**
     * Identificador da execução de importação OFX relacionada.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    ofxJobExecutionId?: string | null;
    /**
     * Identificador da solicitação de importação Pluggy relacionada.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    pluggyJobRequestId?: string | null;
    /**
     * Identificador da execução de importação Pluggy relacionada.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    pluggyJobExecutionId?: string | null;
    /**
     * Identificador externo da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    externalId?: string | null;
    /**
     * Valor da movimentação financeira.
     * @type {number}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    amount?: number | null;
    /**
     * Valor da movimentação financeira na moeda da conta.
     * @type {number}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    amountInAccountCurrency?: number | null;
    /**
     * Saldo após a movimentação financeira.
     * @type {number}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    balance?: number | null;
    /**
     * Código da moeda da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    currencyCode?: string | null;
    /**
     * Categoria da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    category?: string | null;
    /**
     * Código do provedor da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    providerCode?: string | null;
    /**
     * 
     * @type {CreateOrUpdateBankTransactionRequestBodyDtoPaymentData}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    paymentData?: CreateOrUpdateBankTransactionRequestBodyDtoPaymentData | null;
    /**
     * 
     * @type {CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    creditCardMetadata?: CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata | null;
    /**
     * 
     * @type {CreateOrUpdateBankTransactionRequestBodyDtoMerchant}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    merchant?: CreateOrUpdateBankTransactionRequestBodyDtoMerchant | null;
    /**
     * Identificador da categoria da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    categoryId?: string | null;
    /**
     * Tipo de operação da movimentação financeira.
     * @type {string}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    operationType?: string | null;
    /**
     * Pontuação de busca da movimentação financeira.
     * @type {number}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    searchScore?: number | null;
    /**
     * Data de criação da movimentação financeira.
     * @type {any}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    createdAt: any | null;
    /**
     * Data de atualização da movimentação financeira.
     * @type {any}
     * @memberof BankTransactionsPageDtoItemsInner
     */
    updatedAt: any | null;
}


/**
 * @export
 */
export const BankTransactionsPageDtoItemsInnerProviderEnum = {
    Pluggy: 'PLUGGY',
    Ofx: 'OFX',
    Other: 'OTHER'
} as const;
export type BankTransactionsPageDtoItemsInnerProviderEnum = typeof BankTransactionsPageDtoItemsInnerProviderEnum[keyof typeof BankTransactionsPageDtoItemsInnerProviderEnum];

/**
 * @export
 */
export const BankTransactionsPageDtoItemsInnerTypeEnum = {
    Debit: 'DEBIT',
    Credit: 'CREDIT'
} as const;
export type BankTransactionsPageDtoItemsInnerTypeEnum = typeof BankTransactionsPageDtoItemsInnerTypeEnum[keyof typeof BankTransactionsPageDtoItemsInnerTypeEnum];

/**
 * @export
 */
export const BankTransactionsPageDtoItemsInnerStatusEnum = {
    Pending: 'PENDING',
    Posted: 'POSTED'
} as const;
export type BankTransactionsPageDtoItemsInnerStatusEnum = typeof BankTransactionsPageDtoItemsInnerStatusEnum[keyof typeof BankTransactionsPageDtoItemsInnerStatusEnum];


/**
 * Check if a given object implements the BankTransactionsPageDtoItemsInner interface.
 */
export function instanceOfBankTransactionsPageDtoItemsInner(value: object): value is BankTransactionsPageDtoItemsInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined) return false;
    if (!('bankAccount' in value) || value['bankAccount'] === undefined) return false;
    if (!('bankAccountName' in value) || value['bankAccountName'] === undefined) return false;
    if (!('bankAccountNumber' in value) || value['bankAccountNumber'] === undefined) return false;
    if (!('bankAccountInstitutionName' in value) || value['bankAccountInstitutionName'] === undefined) return false;
    if (!('provider' in value) || value['provider'] === undefined) return false;
    if (!('providerTransactionId' in value) || value['providerTransactionId'] === undefined) return false;
    if (!('amountInBrl' in value) || value['amountInBrl'] === undefined) return false;
    if (!('amountInBrlVariations' in value) || value['amountInBrlVariations'] === undefined) return false;
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('dateVariations' in value) || value['dateVariations'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('typeVariations' in value) || value['typeVariations'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('ignored' in value) || value['ignored'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function BankTransactionsPageDtoItemsInnerFromJSON(json: any): BankTransactionsPageDtoItemsInner {
    return BankTransactionsPageDtoItemsInnerFromJSONTyped(json, false);
}

export function BankTransactionsPageDtoItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransactionsPageDtoItemsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ownerOrganization': json['ownerOrganization'],
        'bankAccount': json['bankAccount'],
        'bankAccountName': json['bankAccountName'],
        'bankAccountNumber': json['bankAccountNumber'],
        'bankAccountInstitutionName': json['bankAccountInstitutionName'],
        'populatedBankAccount': json['populatedBankAccount'] == null ? undefined : BankTransactionEntityPopulatedBankAccountFromJSON(json['populatedBankAccount']),
        'provider': json['provider'],
        'providerTransactionId': json['providerTransactionId'],
        'amountInBrl': json['amountInBrl'],
        'amountInBrlVariations': json['amountInBrlVariations'],
        'date': json['date'],
        'dateVariations': json['dateVariations'],
        'type': json['type'],
        'typeVariations': json['typeVariations'],
        'description': json['description'] == null ? undefined : json['description'],
        'status': json['status'],
        'ignored': json['ignored'],
        'reconciled': json['reconciled'] == null ? undefined : json['reconciled'],
        'financialRecords': json['financialRecords'] == null ? undefined : json['financialRecords'],
        'aiSuggestion': json['aiSuggestion'] == null ? undefined : CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionFromJSON(json['aiSuggestion']),
        'ofxJobRequestId': json['ofxJobRequestId'] == null ? undefined : json['ofxJobRequestId'],
        'ofxJobExecutionId': json['ofxJobExecutionId'] == null ? undefined : json['ofxJobExecutionId'],
        'pluggyJobRequestId': json['pluggyJobRequestId'] == null ? undefined : json['pluggyJobRequestId'],
        'pluggyJobExecutionId': json['pluggyJobExecutionId'] == null ? undefined : json['pluggyJobExecutionId'],
        'externalId': json['externalId'] == null ? undefined : json['externalId'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'amountInAccountCurrency': json['amountInAccountCurrency'] == null ? undefined : json['amountInAccountCurrency'],
        'balance': json['balance'] == null ? undefined : json['balance'],
        'currencyCode': json['currencyCode'] == null ? undefined : json['currencyCode'],
        'category': json['category'] == null ? undefined : json['category'],
        'providerCode': json['providerCode'] == null ? undefined : json['providerCode'],
        'paymentData': json['paymentData'] == null ? undefined : CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataFromJSON(json['paymentData']),
        'creditCardMetadata': json['creditCardMetadata'] == null ? undefined : CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadataFromJSON(json['creditCardMetadata']),
        'merchant': json['merchant'] == null ? undefined : CreateOrUpdateBankTransactionRequestBodyDtoMerchantFromJSON(json['merchant']),
        'categoryId': json['categoryId'] == null ? undefined : json['categoryId'],
        'operationType': json['operationType'] == null ? undefined : json['operationType'],
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function BankTransactionsPageDtoItemsInnerToJSON(json: any): BankTransactionsPageDtoItemsInner {
    return BankTransactionsPageDtoItemsInnerToJSONTyped(json, false);
}

export function BankTransactionsPageDtoItemsInnerToJSONTyped(value?: BankTransactionsPageDtoItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'ownerOrganization': value['ownerOrganization'],
        'bankAccount': value['bankAccount'],
        'bankAccountName': value['bankAccountName'],
        'bankAccountNumber': value['bankAccountNumber'],
        'bankAccountInstitutionName': value['bankAccountInstitutionName'],
        'populatedBankAccount': BankTransactionEntityPopulatedBankAccountToJSON(value['populatedBankAccount']),
        'provider': value['provider'],
        'providerTransactionId': value['providerTransactionId'],
        'amountInBrl': value['amountInBrl'],
        'amountInBrlVariations': value['amountInBrlVariations'],
        'date': value['date'],
        'dateVariations': value['dateVariations'],
        'type': value['type'],
        'typeVariations': value['typeVariations'],
        'description': value['description'],
        'status': value['status'],
        'ignored': value['ignored'],
        'reconciled': value['reconciled'],
        'financialRecords': value['financialRecords'],
        'aiSuggestion': CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionToJSON(value['aiSuggestion']),
        'ofxJobRequestId': value['ofxJobRequestId'],
        'ofxJobExecutionId': value['ofxJobExecutionId'],
        'pluggyJobRequestId': value['pluggyJobRequestId'],
        'pluggyJobExecutionId': value['pluggyJobExecutionId'],
        'externalId': value['externalId'],
        'amount': value['amount'],
        'amountInAccountCurrency': value['amountInAccountCurrency'],
        'balance': value['balance'],
        'currencyCode': value['currencyCode'],
        'category': value['category'],
        'providerCode': value['providerCode'],
        'paymentData': CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataToJSON(value['paymentData']),
        'creditCardMetadata': CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadataToJSON(value['creditCardMetadata']),
        'merchant': CreateOrUpdateBankTransactionRequestBodyDtoMerchantToJSON(value['merchant']),
        'categoryId': value['categoryId'],
        'operationType': value['operationType'],
        'searchScore': value['searchScore'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

