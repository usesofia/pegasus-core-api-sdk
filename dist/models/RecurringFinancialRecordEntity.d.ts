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
import type { CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory } from './CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory';
import type { CreateFinancialRecordRequestBodyDtoPopulatedContact } from './CreateFinancialRecordRequestBodyDtoPopulatedContact';
/**
 *
 * @export
 * @interface RecurringFinancialRecordEntity
 */
export interface RecurringFinancialRecordEntity {
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    direction: RecurringFinancialRecordEntityDirectionEnum;
    /**
     * Data da primeira ocorrência.
     * @type {any}
     * @memberof RecurringFinancialRecordEntity
     */
    firstOccurrenceDate: any | null;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    description: string;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    contact: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    subcategory: string;
    /**
     * Valor do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordEntity
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof RecurringFinancialRecordEntity
     */
    tags?: Array<string>;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof RecurringFinancialRecordEntity
     */
    files?: Array<string>;
    /**
     * Frequência de repetição do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordEntity
     */
    frequency: RecurringFinancialRecordEntityFrequencyEnum;
    /**
     * Dia de repetição do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordEntity
     */
    repetitionDay: number;
    /**
     * Mês de repetição do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordEntity
     */
    repetitionMonth?: number | null;
    /**
     * Indica se o lançamento será apenas em dias úteis.
     * @type {boolean}
     * @memberof RecurringFinancialRecordEntity
     */
    onlyBusinessDays?: boolean;
    /**
     * Indica se o lançamento será completado automaticamente.
     * @type {boolean}
     * @memberof RecurringFinancialRecordEntity
     */
    automaticCompletion?: boolean;
    /**
     * Indica se o lançamento recorrente está ativo.
     * @type {boolean}
     * @memberof RecurringFinancialRecordEntity
     */
    isActive?: boolean;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof RecurringFinancialRecordEntity
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof RecurringFinancialRecordEntity
     */
    updatedAt?: any | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof RecurringFinancialRecordEntity
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof RecurringFinancialRecordEntity
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     *
     * @type {CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof RecurringFinancialRecordEntity
     */
    populatedSubcategory?: CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof RecurringFinancialRecordEntity
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {number}
     * @memberof RecurringFinancialRecordEntity
     */
    searchScore?: number;
}
/**
 * @export
 */
export declare const RecurringFinancialRecordEntityDirectionEnum: {
    readonly Income: "INCOME";
    readonly Outcome: "OUTCOME";
};
export type RecurringFinancialRecordEntityDirectionEnum = typeof RecurringFinancialRecordEntityDirectionEnum[keyof typeof RecurringFinancialRecordEntityDirectionEnum];
/**
 * @export
 */
export declare const RecurringFinancialRecordEntityFrequencyEnum: {
    readonly Weekly: "WEEKLY";
    readonly Monthly: "MONTHLY";
    readonly Yearly: "YEARLY";
};
export type RecurringFinancialRecordEntityFrequencyEnum = typeof RecurringFinancialRecordEntityFrequencyEnum[keyof typeof RecurringFinancialRecordEntityFrequencyEnum];
/**
 * Check if a given object implements the RecurringFinancialRecordEntity interface.
 */
export declare function instanceOfRecurringFinancialRecordEntity(value: object): value is RecurringFinancialRecordEntity;
export declare function RecurringFinancialRecordEntityFromJSON(json: any): RecurringFinancialRecordEntity;
export declare function RecurringFinancialRecordEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringFinancialRecordEntity;
export declare function RecurringFinancialRecordEntityToJSON(json: any): RecurringFinancialRecordEntity;
export declare function RecurringFinancialRecordEntityToJSONTyped(value?: RecurringFinancialRecordEntity | null, ignoreDiscriminator?: boolean): any;
