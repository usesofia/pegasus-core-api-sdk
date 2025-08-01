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
 *
 * @export
 * @interface CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
 */
export interface CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData {
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    direction?: CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataDirectionEnum;
    /**
     * Data de vencimento.
     * @type {any}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    dueDate?: any | null;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    contact?: string | null;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    description?: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    subcategory?: string;
    /**
     *
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    amount?: string;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    tags?: Array<string>;
    /**
     * Data de competência.
     * @type {any}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    competenceDate?: any | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    files?: Array<string>;
    /**
     * Chave PIX.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    pixKey?: string | null;
    /**
     * Código do boleto.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    boletoCode?: string | null;
    /**
     * Código PIX para pagamento/recebimento.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    pixCode?: string | null;
    /**
     * Número da nota fiscal.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    invoiceNumber?: string | null;
    /**
     * Indica se o lançamento foi concluído.
     * @type {boolean}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    completed?: boolean;
    /**
     * Data de pagamento.
     * @type {any}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    cashDate?: any | null;
    /**
     * Identificador da conta.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    account?: string | null;
    /**
     *
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    discount?: string;
    /**
     *
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    finesAndInterest?: string;
    /**
     * Indica se foi reconciliado com uma transação bancária.
     * @type {boolean}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    reconciled?: boolean;
    /**
     * Identificador do lançamento financeiro parcelado.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    installmentFinancialRecord?: string | null;
    /**
     * Índice da parcela (1, 2, 3, etc.).
     * @type {number}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    installmentNumber?: number | null;
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    recurringFinancialRecord?: string | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedAccount}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    populatedAccount?: CreateFinancialRecordRequestBodyDtoPopulatedAccount | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    searchScore?: number | null;
    /**
     * Valor final do lançamento (calculado automaticamente).
     * @type {number}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    finalAmount?: number;
    /**
     * Identificador do item no radar que originou a atualização.
     * @type {string}
     * @memberof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData
     */
    radarItem?: string;
}
/**
 * @export
 */
export declare const CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataDirectionEnum = typeof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataDirectionEnum[keyof typeof CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataDirectionEnum];
/**
 * Check if a given object implements the CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData interface.
 */
export declare function instanceOfCreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData(value: object): value is CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataFromJSON(json: any): CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataToJSON(json: any): CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData;
export declare function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestDataToJSONTyped(value?: CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData | null, ignoreDiscriminator?: boolean): any;
