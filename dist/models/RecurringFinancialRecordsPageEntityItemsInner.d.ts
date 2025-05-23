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
 * @interface RecurringFinancialRecordsPageEntityItemsInner
 */
export interface RecurringFinancialRecordsPageEntityItemsInner {
    /**
     * Identificador do lançamento financeiro recorrente.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    id: string;
    /**
     * Identificador da organização dona do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    ownerOrganization: string;
    /**
     * Direção do lançamento (entrada/saída).
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    direction: RecurringFinancialRecordsPageEntityItemsInnerDirectionEnum;
    /**
     * Data da primeira ocorrência.
     * @type {any}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    firstOccurrenceDate: any | null;
    /**
     * Descrição do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    description: string;
    /**
     * Identificador do contato relacionado.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    contact: string;
    /**
     * Identificador da subcategoria.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    subcategory: string;
    /**
     * Valor do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    amount: number;
    /**
     * Tags relacionadas.
     * @type {Array<string>}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    tags?: Array<string>;
    /**
     * Arquivos anexados.
     * @type {Array<string>}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    files?: Array<string>;
    /**
     * Frequência de repetição do lançamento.
     * @type {string}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    frequency: RecurringFinancialRecordsPageEntityItemsInnerFrequencyEnum;
    /**
     * Dia de repetição do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    repetitionDay: number;
    /**
     * Mês de repetição do lançamento.
     * @type {number}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    repetitionMonth?: number | null;
    /**
     * Indica se o lançamento será apenas em dias úteis.
     * @type {boolean}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    onlyBusinessDays?: boolean;
    /**
     * Indica se o lançamento será completado automaticamente.
     * @type {boolean}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    automaticCompletion?: boolean;
    /**
     * Indica se o lançamento recorrente está ativo.
     * @type {boolean}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    isActive?: boolean;
    /**
     * Data de criação do lançamento.
     * @type {any}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    createdAt?: any | null;
    /**
     * Data de atualização do lançamento.
     * @type {any}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    updatedAt?: any | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedContact}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    populatedContact?: CreateFinancialRecordRequestBodyDtoPopulatedContact | null;
    /**
     * Tags relacionadas.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner>}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    populatedTags?: Array<CreateFinancialRecordRequestBodyDtoPopulatedTagsInner> | null;
    /**
     *
     * @type {CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    populatedSubcategory?: CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory | null;
    /**
     * Arquivos anexados.
     * @type {Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    populatedFiles?: Array<CreateFinancialRecordRequestBodyDtoPopulatedFilesInner>;
    /**
     *
     * @type {number}
     * @memberof RecurringFinancialRecordsPageEntityItemsInner
     */
    searchScore?: number;
}
/**
 * @export
 */
export declare const RecurringFinancialRecordsPageEntityItemsInnerDirectionEnum: {
    readonly Income: "INCOME";
    readonly Outcome: "OUTCOME";
};
export type RecurringFinancialRecordsPageEntityItemsInnerDirectionEnum = typeof RecurringFinancialRecordsPageEntityItemsInnerDirectionEnum[keyof typeof RecurringFinancialRecordsPageEntityItemsInnerDirectionEnum];
/**
 * @export
 */
export declare const RecurringFinancialRecordsPageEntityItemsInnerFrequencyEnum: {
    readonly Weekly: "WEEKLY";
    readonly Monthly: "MONTHLY";
    readonly Yearly: "YEARLY";
};
export type RecurringFinancialRecordsPageEntityItemsInnerFrequencyEnum = typeof RecurringFinancialRecordsPageEntityItemsInnerFrequencyEnum[keyof typeof RecurringFinancialRecordsPageEntityItemsInnerFrequencyEnum];
/**
 * Check if a given object implements the RecurringFinancialRecordsPageEntityItemsInner interface.
 */
export declare function instanceOfRecurringFinancialRecordsPageEntityItemsInner(value: object): value is RecurringFinancialRecordsPageEntityItemsInner;
export declare function RecurringFinancialRecordsPageEntityItemsInnerFromJSON(json: any): RecurringFinancialRecordsPageEntityItemsInner;
export declare function RecurringFinancialRecordsPageEntityItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringFinancialRecordsPageEntityItemsInner;
export declare function RecurringFinancialRecordsPageEntityItemsInnerToJSON(json: any): RecurringFinancialRecordsPageEntityItemsInner;
export declare function RecurringFinancialRecordsPageEntityItemsInnerToJSONTyped(value?: RecurringFinancialRecordsPageEntityItemsInner | null, ignoreDiscriminator?: boolean): any;
