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
 * @interface CreateBankAccountRequestBodyDto
 */
export interface CreateBankAccountRequestBodyDto {
    /**
     * Nome da conta bancária.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    name: string;
    /**
     * Tipo da conta bancária.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    type: CreateBankAccountRequestBodyDtoTypeEnum;
    /**
     * Indica se a conta deve ser considerada no cálculo agregado.
     * @type {boolean}
     * @memberof CreateBankAccountRequestBodyDto
     */
    considerInAggregateCalculations?: boolean;
    /**
     * Número da conta ou cartão.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    number: string;
    /**
     * Indica se a conta é automática ou manual.
     * @type {boolean}
     * @memberof CreateBankAccountRequestBodyDto
     */
    isAutomatic: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBankAccountRequestBodyDto
     */
    isDefault?: boolean;
    /**
     * Data do saldo inicial.
     * @type {any}
     * @memberof CreateBankAccountRequestBodyDto
     */
    initialBalanceDate?: any | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    initialBalanceAmount?: string | null;
    /**
     * Instituição financeira.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    institution?: string | null;
    /**
     * Fornecedor da conta bancária.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    provider?: CreateBankAccountRequestBodyDtoProviderEnum | null;
    /**
     * Identificador da conta bancária no fornecedor.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    providerAccountId?: string | null;
    /**
     * Identificador do item de conexão do fornecedor.
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    providerItemId?: string | null;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof CreateBankAccountRequestBodyDto
     */
    channel: CreateBankAccountRequestBodyDtoChannelEnum;
}


/**
 * @export
 */
export const CreateBankAccountRequestBodyDtoTypeEnum = {
    Money: 'MONEY',
    Checking: 'CHECKING',
    Savings: 'SAVINGS',
    CreditCard: 'CREDIT_CARD',
    Application: 'APPLICATION',
    Other: 'OTHER'
} as const;
export type CreateBankAccountRequestBodyDtoTypeEnum = typeof CreateBankAccountRequestBodyDtoTypeEnum[keyof typeof CreateBankAccountRequestBodyDtoTypeEnum];

/**
 * @export
 */
export const CreateBankAccountRequestBodyDtoProviderEnum = {
    Pluggy: 'PLUGGY',
    Ofx: 'OFX',
    Other: 'OTHER'
} as const;
export type CreateBankAccountRequestBodyDtoProviderEnum = typeof CreateBankAccountRequestBodyDtoProviderEnum[keyof typeof CreateBankAccountRequestBodyDtoProviderEnum];

/**
 * @export
 */
export const CreateBankAccountRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM'
} as const;
export type CreateBankAccountRequestBodyDtoChannelEnum = typeof CreateBankAccountRequestBodyDtoChannelEnum[keyof typeof CreateBankAccountRequestBodyDtoChannelEnum];


/**
 * Check if a given object implements the CreateBankAccountRequestBodyDto interface.
 */
export function instanceOfCreateBankAccountRequestBodyDto(value: object): value is CreateBankAccountRequestBodyDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('number' in value) || value['number'] === undefined) return false;
    if (!('isAutomatic' in value) || value['isAutomatic'] === undefined) return false;
    if (!('channel' in value) || value['channel'] === undefined) return false;
    return true;
}

export function CreateBankAccountRequestBodyDtoFromJSON(json: any): CreateBankAccountRequestBodyDto {
    return CreateBankAccountRequestBodyDtoFromJSONTyped(json, false);
}

export function CreateBankAccountRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBankAccountRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'considerInAggregateCalculations': json['considerInAggregateCalculations'] == null ? undefined : json['considerInAggregateCalculations'],
        'number': json['number'],
        'isAutomatic': json['isAutomatic'],
        'isDefault': json['isDefault'] == null ? undefined : json['isDefault'],
        'initialBalanceDate': json['initialBalanceDate'] == null ? undefined : json['initialBalanceDate'],
        'initialBalanceAmount': json['initialBalanceAmount'] == null ? undefined : json['initialBalanceAmount'],
        'institution': json['institution'] == null ? undefined : json['institution'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'providerAccountId': json['providerAccountId'] == null ? undefined : json['providerAccountId'],
        'providerItemId': json['providerItemId'] == null ? undefined : json['providerItemId'],
        'channel': json['channel'],
    };
}

export function CreateBankAccountRequestBodyDtoToJSON(json: any): CreateBankAccountRequestBodyDto {
    return CreateBankAccountRequestBodyDtoToJSONTyped(json, false);
}

export function CreateBankAccountRequestBodyDtoToJSONTyped(value?: CreateBankAccountRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'type': value['type'],
        'considerInAggregateCalculations': value['considerInAggregateCalculations'],
        'number': value['number'],
        'isAutomatic': value['isAutomatic'],
        'isDefault': value['isDefault'],
        'initialBalanceDate': value['initialBalanceDate'],
        'initialBalanceAmount': value['initialBalanceAmount'],
        'institution': value['institution'],
        'provider': value['provider'],
        'providerAccountId': value['providerAccountId'],
        'providerItemId': value['providerItemId'],
        'channel': value['channel'],
    };
}

