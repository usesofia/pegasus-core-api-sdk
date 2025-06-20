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
import type { CreateFinancialRecordRequestBodyDtoPopulatedTagsInner } from './CreateFinancialRecordRequestBodyDtoPopulatedTagsInner';
import type { CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner } from './CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner';
import type { CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact } from './CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact';
import type { CreateFinancialRecordRequestBodyDtoPopulatedSubcategory } from './CreateFinancialRecordRequestBodyDtoPopulatedSubcategory';
/**
 *
 * @export
 * @interface CreateInstallmentFinancialRecordRequestBodyDto
 */
export interface CreateInstallmentFinancialRecordRequestBodyDto {
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    direction: CreateInstallmentFinancialRecordRequestBodyDtoDirectionEnum;
    /**
     * Frequência do lançamento.
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    frequency: CreateInstallmentFinancialRecordRequestBodyDtoFrequencyEnum;
    /**
     * Data da primeira parcela do lançamento.
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    firstInstallmentDate: string;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    contact?: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    subcategory: string;
    /**
     *
     * @type {number}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    tags?: Array<string>;
    /**
     * Data de competência do lançamento.
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    competenceDate?: string | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    files?: Array<string>;
    /**
     * Número de parcelas.
     * @type {number}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    numberOfInstallments: number;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    searchScore?: number | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     *
     * @type {CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    populatedContact?: CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     * Parcelas do lançamento.
     * @type {Array<CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner>}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    installments?: Array<CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner>;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof CreateInstallmentFinancialRecordRequestBodyDto
     */
    channel: CreateInstallmentFinancialRecordRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const CreateInstallmentFinancialRecordRequestBodyDtoDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type CreateInstallmentFinancialRecordRequestBodyDtoDirectionEnum = typeof CreateInstallmentFinancialRecordRequestBodyDtoDirectionEnum[keyof typeof CreateInstallmentFinancialRecordRequestBodyDtoDirectionEnum];
/**
 * @export
 */
export declare const CreateInstallmentFinancialRecordRequestBodyDtoFrequencyEnum: {
    readonly Monthly: "MONTHLY";
    readonly Weekly: "WEEKLY";
    readonly Yearly: "YEARLY";
};
export type CreateInstallmentFinancialRecordRequestBodyDtoFrequencyEnum = typeof CreateInstallmentFinancialRecordRequestBodyDtoFrequencyEnum[keyof typeof CreateInstallmentFinancialRecordRequestBodyDtoFrequencyEnum];
/**
 * @export
 */
export declare const CreateInstallmentFinancialRecordRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type CreateInstallmentFinancialRecordRequestBodyDtoChannelEnum = typeof CreateInstallmentFinancialRecordRequestBodyDtoChannelEnum[keyof typeof CreateInstallmentFinancialRecordRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the CreateInstallmentFinancialRecordRequestBodyDto interface.
 */
export declare function instanceOfCreateInstallmentFinancialRecordRequestBodyDto(value: object): value is CreateInstallmentFinancialRecordRequestBodyDto;
export declare function CreateInstallmentFinancialRecordRequestBodyDtoFromJSON(json: any): CreateInstallmentFinancialRecordRequestBodyDto;
export declare function CreateInstallmentFinancialRecordRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInstallmentFinancialRecordRequestBodyDto;
export declare function CreateInstallmentFinancialRecordRequestBodyDtoToJSON(json: any): CreateInstallmentFinancialRecordRequestBodyDto;
export declare function CreateInstallmentFinancialRecordRequestBodyDtoToJSONTyped(value?: CreateInstallmentFinancialRecordRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
