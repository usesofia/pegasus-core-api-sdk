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
 * Dados para criar registro financeiro.
 * @export
 * @interface CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
 */
export interface CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest {
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    direction: CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestDirectionEnum;
    /**
     * Data de vencimento.
     * @type {any}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    dueDate: any | null;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    contact?: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    subcategory: string;
    /**
     *
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    amount: string;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    tags?: Array<string>;
    /**
     * Data de competência.
     * @type {any}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    competenceDate?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    files?: Array<string>;
    /**
     * Chave PIX.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    pixKey?: string | null;
    /**
     * Código do boleto.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    boletoCode?: string | null;
    /**
     * Código PIX para pagamento/recebimento.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    pixCode?: string | null;
    /**
     * Número da nota fiscal.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    invoiceNumber?: string | null;
    /**
     * Indica se o lançamento foi concluído.
     * @type {boolean}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    completed?: boolean;
    /**
     * Data de pagamento.
     * @type {any}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    cashDate?: any | null;
    /**
     * Identificador da conta.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    account?: string | null;
    /**
     *
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    discount?: string | null;
    /**
     *
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    finesAndInterest?: string | null;
    /**
     * Identificador da transação bancária vinculada.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    bankTransaction?: string | null;
    /**
     * Identificador do lançamento financeiro parcelado.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    installmentFinancialRecord?: string | null;
    /**
     * Índice da parcela (1, 2, 3, etc.).
     * @type {number}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    installmentNumber?: number | null;
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    recurringFinancialRecord?: string | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccount}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    populatedAccount?: CreateFinancialRecordRequestBodyDtoPopulatedAccount | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    searchScore?: number | null;
    /**
     * Valor final do lançamento (calculado automaticamente).
     * @type {number}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    finalAmount?: number;
    /**
     * Identificador do item no radar que originou o lançamento.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest
     */
    radarItem?: string;
}
/**
 * @export
 */
export declare const CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestDirectionEnum = typeof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestDirectionEnum[keyof typeof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestDirectionEnum];
/**
 * Check if a given object implements the CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest interface.
 */
export declare function instanceOfCreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest(value: object): value is CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestFromJSON(json: any): CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestToJSON(json: any): CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequestToJSONTyped(value?: CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest | null, ignoreDiscriminator?: boolean): any;
