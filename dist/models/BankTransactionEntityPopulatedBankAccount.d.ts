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
import type { CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution } from './CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution';
/**
 * Conta bancária da movimentação financeira.
 * @export
 * @interface BankTransactionEntityPopulatedBankAccount
 */
export interface BankTransactionEntityPopulatedBankAccount {
    /**
     * Identificador da conta bancária.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    id: string;
    /**
     * Identificador da organização dona da conta bancária.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    ownerOrganization: string;
    /**
     * Nome da conta bancária.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    name: string;
    /**
     * Tipo da conta bancária.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    type: BankTransactionEntityPopulatedBankAccountTypeEnum;
    /**
     * Número da conta ou cartão.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    number: string;
    /**
     * Indica se a conta deve ser considerada nos cálculos de fluxo de caixa.
     * @type {boolean}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    considerInCashFlow: boolean;
    /**
     * Indica se a conta é automática ou manual.
     * @type {boolean}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    isAutomatic: boolean;
    /**
     * Indica se a conta é a padrão.
     * @type {boolean}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    isDefault: boolean;
    /**
     * Data do saldo inicial da conta bancária.
     * @type {any}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    initialBalanceDate?: any | null;
    /**
     * Valor do saldo inicial.
     * @type {number}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    initialBalanceAmount?: number | null;
    /**
     * Instituição financeira.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    institution?: string | null;
    /**
     * Nome da instituição financeira.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    institutionName?: string | null;
    /**
     * Indica se a conta está ativa.
     * @type {boolean}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    active: boolean;
    /**
     * Fornecedor da conta bancária.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    provider?: BankTransactionEntityPopulatedBankAccountProviderEnum | null;
    /**
     * Identificador da conta bancária no fornecedor.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    providerAccountId?: string | null;
    /**
     * Identificador do item de conexão do fornecedor.
     * @type {string}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    providerItemId?: string | null;
    /**
     * Pontuação de busca.
     * @type {number}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    searchScore?: number | null;
    /**
     * Data de criação da conta bancária.
     * @type {any}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    createdAt: any | null;
    /**
     * Data de atualização da conta bancária.
     * @type {any}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    updatedAt: any | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution}
     * @memberof BankTransactionEntityPopulatedBankAccount
     */
    populatedInstitution?: CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution | null;
}
/**
 * @export
 */
export declare const BankTransactionEntityPopulatedBankAccountTypeEnum: {
    readonly Money: "MONEY";
    readonly Checking: "CHECKING";
    readonly Savings: "SAVINGS";
    readonly CreditCard: "CREDIT_CARD";
    readonly Application: "APPLICATION";
    readonly Other: "OTHER";
};
export type BankTransactionEntityPopulatedBankAccountTypeEnum = typeof BankTransactionEntityPopulatedBankAccountTypeEnum[keyof typeof BankTransactionEntityPopulatedBankAccountTypeEnum];
/**
 * @export
 */
export declare const BankTransactionEntityPopulatedBankAccountProviderEnum: {
    readonly Pluggy: "PLUGGY";
    readonly Ofx: "OFX";
    readonly Other: "OTHER";
};
export type BankTransactionEntityPopulatedBankAccountProviderEnum = typeof BankTransactionEntityPopulatedBankAccountProviderEnum[keyof typeof BankTransactionEntityPopulatedBankAccountProviderEnum];
/**
 * Check if a given object implements the BankTransactionEntityPopulatedBankAccount interface.
 */
export declare function instanceOfBankTransactionEntityPopulatedBankAccount(value: object): value is BankTransactionEntityPopulatedBankAccount;
export declare function BankTransactionEntityPopulatedBankAccountFromJSON(json: any): BankTransactionEntityPopulatedBankAccount;
export declare function BankTransactionEntityPopulatedBankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransactionEntityPopulatedBankAccount;
export declare function BankTransactionEntityPopulatedBankAccountToJSON(json: any): BankTransactionEntityPopulatedBankAccount;
export declare function BankTransactionEntityPopulatedBankAccountToJSONTyped(value?: BankTransactionEntityPopulatedBankAccount | null, ignoreDiscriminator?: boolean): any;
