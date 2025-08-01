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
import type { CreateFinancialRecordRequestBodyDtoPopulatedFilesInner } from './CreateFinancialRecordRequestBodyDtoPopulatedFilesInner';
import type { CreateFinancialRecordRequestBodyDtoPopulatedAccount } from './CreateFinancialRecordRequestBodyDtoPopulatedAccount';
import type { CreateFinancialRecordRequestBodyDtoPopulatedTagsInner } from './CreateFinancialRecordRequestBodyDtoPopulatedTagsInner';
import type { CreateFinancialRecordRequestBodyDtoPopulatedSubcategory } from './CreateFinancialRecordRequestBodyDtoPopulatedSubcategory';
import type { CreateFinancialRecordRequestBodyDtoPopulatedContact } from './CreateFinancialRecordRequestBodyDtoPopulatedContact';
/**
 * Registro financeiro vinculado pelo auto-execute.
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
 */
export interface CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord {
    /**
     * Identificador do lançamento financeiro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    direction: CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordDirectionEnum;
    /**
     * Data de vencimento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    dueDate: any | null;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    contact: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    subcategory: string;
    /**
     * Valor do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    tags?: Array<string>;
    /**
     * Data de competência.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    competenceDate?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    files?: Array<string>;
    /**
     * Ids de itens no radar relacionados.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    radarItems?: Array<string>;
    /**
     * Chave PIX.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    pixKey?: string | null;
    /**
     * Código do boleto.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    boletoCode?: string | null;
    /**
     * Código PIX para pagamento/recebimento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    pixCode?: string | null;
    /**
     * Número da nota fiscal.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    invoiceNumber?: string | null;
    /**
     * Indica se o lançamento foi concluído.
     * @type {boolean}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    completed?: boolean;
    /**
     * Data de pagamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    cashDate?: any | null;
    /**
     * Identificador da conta.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    account?: string | null;
    /**
     * Valor do desconto.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    discount?: number | null;
    /**
     * Valor de multas e juros.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    finesAndInterest?: number | null;
    /**
     * Valor final do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    finalAmount: number;
    /**
     * Indica se foi reconciliado com uma transação bancária.
     * @type {boolean}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    reconciled?: boolean;
    /**
     * Identificador da transação bancária vinculada.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    bankTransaction?: string | null;
    /**
     * Identificador do lançamento financeiro parcelado.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    installmentFinancialRecord?: string | null;
    /**
     * Índice da parcela (1, 2, 3, etc.).
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    installmentNumber?: number | null;
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    recurringFinancialRecord?: string | null;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    updatedAt?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccount}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    populatedAccount?: CreateFinancialRecordRequestBodyDtoPopulatedAccount | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord
     */
    searchScore?: number | null;
}
/**
 * @export
 */
export declare const CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordDirectionEnum = typeof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordDirectionEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordDirectionEnum];
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord interface.
 */
export declare function instanceOfCreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord(value: object): value is CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordToJSON(json: any): CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecordToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord | null, ignoreDiscriminator?: boolean): any;
