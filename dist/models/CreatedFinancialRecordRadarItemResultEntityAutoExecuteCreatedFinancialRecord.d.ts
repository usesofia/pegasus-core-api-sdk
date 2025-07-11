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
 * Registro financeiro criado pelo auto-execute.
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
 */
export interface CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord {
    /**
     * Identificador do lançamento financeiro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    direction: CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordDirectionEnum;
    /**
     * Data de vencimento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    dueDate: any | null;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    contact: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    subcategory: string;
    /**
     * Valor do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    tags?: Array<string>;
    /**
     * Data de competência.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    competenceDate?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    files?: Array<string>;
    /**
     * Ids de itens no radar relacionados.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    radarItems?: Array<string>;
    /**
     * Chave PIX.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    pixKey?: string | null;
    /**
     * Código do boleto.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    boletoCode?: string | null;
    /**
     * Código PIX para pagamento/recebimento.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    pixCode?: string | null;
    /**
     * Número da nota fiscal.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    invoiceNumber?: string | null;
    /**
     * Indica se o lançamento foi concluído.
     * @type {boolean}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    completed?: boolean;
    /**
     * Data de pagamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    cashDate?: any | null;
    /**
     * Identificador da conta.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    account?: string | null;
    /**
     * Valor do desconto.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    discount?: number | null;
    /**
     * Valor de multas e juros.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    finesAndInterest?: number | null;
    /**
     * Valor final do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    finalAmount: number;
    /**
     * Indica se foi reconciliado com uma transação bancária.
     * @type {boolean}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    reconciled?: boolean;
    /**
     * Identificador da transação bancária vinculada.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    bankTransaction?: string | null;
    /**
     * Identificador do lançamento financeiro parcelado.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    installmentFinancialRecord?: string | null;
    /**
     * Índice da parcela (1, 2, 3, etc.).
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    installmentNumber?: number | null;
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    recurringFinancialRecord?: string | null;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    updatedAt?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccount}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    populatedAccount?: CreateFinancialRecordRequestBodyDtoPopulatedAccount | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord
     */
    searchScore?: number | null;
}
/**
 * @export
 */
export declare const CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordDirectionEnum = typeof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordDirectionEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordDirectionEnum];
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord interface.
 */
export declare function instanceOfCreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord(value: object): value is CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordToJSON(json: any): CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord;
export declare function CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecordToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord | null, ignoreDiscriminator?: boolean): any;
