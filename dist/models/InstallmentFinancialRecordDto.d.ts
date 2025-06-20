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
 * @interface InstallmentFinancialRecordDto
 */
export interface InstallmentFinancialRecordDto {
    /**
     * Identificador do lançamento financeiro.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    direction: InstallmentFinancialRecordDtoDirectionEnum;
    /**
     * Frequência do lançamento.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    frequency: InstallmentFinancialRecordDtoFrequencyEnum;
    /**
     * Data da primeira parcela do lançamento.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    firstInstallmentDate: string;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    contact: string;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    description: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    subcategory: string;
    /**
     *
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    amount?: string | null;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof InstallmentFinancialRecordDto
     */
    tags?: Array<string>;
    /**
     * Data de competência do lançamento.
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    competenceDate?: string | null;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof InstallmentFinancialRecordDto
     */
    files?: Array<string>;
    /**
     * Número de parcelas.
     * @type {number}
     * @memberof InstallmentFinancialRecordDto
     */
    numberOfInstallments: number;
    /**
     * Parcelas do lançamento.
     * @type {Array<CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner>}
     * @memberof InstallmentFinancialRecordDto
     */
    installments: Array<CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner>;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof InstallmentFinancialRecordDto
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof InstallmentFinancialRecordDto
     */
    updatedAt?: any | null;
    /**
     * Pontuação de busca do lançamento.
     * @type {number}
     * @memberof InstallmentFinancialRecordDto
     */
    searchScore?: number | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof InstallmentFinancialRecordDto
     */
    populatedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     *
     * @type {CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof InstallmentFinancialRecordDto
     */
    populatedContact?: CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof InstallmentFinancialRecordDto
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof InstallmentFinancialRecordDto
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    finalAmount?: string | null;
    /**
     *
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    discount?: string | null;
    /**
     *
     * @type {string}
     * @memberof InstallmentFinancialRecordDto
     */
    finesAndInterest?: string | null;
}
/**
 * @export
 */
export declare const InstallmentFinancialRecordDtoDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type InstallmentFinancialRecordDtoDirectionEnum = typeof InstallmentFinancialRecordDtoDirectionEnum[keyof typeof InstallmentFinancialRecordDtoDirectionEnum];
/**
 * @export
 */
export declare const InstallmentFinancialRecordDtoFrequencyEnum: {
    readonly Monthly: "MONTHLY";
    readonly Weekly: "WEEKLY";
    readonly Yearly: "YEARLY";
};
export type InstallmentFinancialRecordDtoFrequencyEnum = typeof InstallmentFinancialRecordDtoFrequencyEnum[keyof typeof InstallmentFinancialRecordDtoFrequencyEnum];
/**
 * Check if a given object implements the InstallmentFinancialRecordDto interface.
 */
export declare function instanceOfInstallmentFinancialRecordDto(value: object): value is InstallmentFinancialRecordDto;
export declare function InstallmentFinancialRecordDtoFromJSON(json: any): InstallmentFinancialRecordDto;
export declare function InstallmentFinancialRecordDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstallmentFinancialRecordDto;
export declare function InstallmentFinancialRecordDtoToJSON(json: any): InstallmentFinancialRecordDto;
export declare function InstallmentFinancialRecordDtoToJSONTyped(value?: InstallmentFinancialRecordDto | null, ignoreDiscriminator?: boolean): any;
