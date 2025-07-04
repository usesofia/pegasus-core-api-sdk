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
import * as runtime from '../runtime';
import type { CreateInstallmentFinancialRecordRequestBodyDto, InstallmentFinancialRecordDto, InstallmentFinancialRecordsPageDto, PartialUpdateInstallmentFinancialRecordRequestBodyDto, RemoveInstallmentFinancialRecordRequestBodyDto } from '../models/index';
export interface CreateInstallmentFinancialRecordRequest {
    createInstallmentFinancialRecordRequestBodyDto: CreateInstallmentFinancialRecordRequestBodyDto;
    populate?: string;
}
export interface FindAllInstallmentFinancialRecordsRequest {
    completed?: boolean;
    frequency?: FindAllInstallmentFinancialRecordsFrequencyEnum;
    competenceDateTo?: Date;
    competenceDateFrom?: Date;
    tags?: Array<any>;
    subcategory?: string;
    contact?: string;
    firstInstallmentDateTo?: Date;
    firstInstallmentDateFrom?: Date;
    direction?: FindAllInstallmentFinancialRecordsDirectionEnum;
    sortOrder?: FindAllInstallmentFinancialRecordsSortOrderEnum;
    sortBy?: FindAllInstallmentFinancialRecordsSortByEnum;
    populate?: string;
    textSearchTerm?: string;
    pageSize?: number;
    pageIndex?: number;
}
export interface FindByIdInstallmentFinancialRecordRequest {
    id: string;
    populate?: string;
}
export interface PartialUpdateInstallmentFinancialRecordRequest {
    id: string;
    partialUpdateInstallmentFinancialRecordRequestBodyDto: PartialUpdateInstallmentFinancialRecordRequestBodyDto;
    populate?: string;
}
export interface RemoveInstallmentFinancialRecordRequest {
    id: string;
    removeInstallmentFinancialRecordRequestBodyDto: RemoveInstallmentFinancialRecordRequestBodyDto;
}
/**
 * InstallmentFinancialRecordsApi - interface
 *
 * @export
 * @interface InstallmentFinancialRecordsApiInterface
 */
export interface InstallmentFinancialRecordsApiInterface {
    /**
     *
     * @summary Cria um novo lançamento financeiro parcelado.
     * @param {CreateInstallmentFinancialRecordRequestBodyDto} createInstallmentFinancialRecordRequestBodyDto
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallmentFinancialRecordsApiInterface
     */
    createInstallmentFinancialRecordRaw(requestParameters: CreateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordDto>>;
    /**
     * Cria um novo lançamento financeiro parcelado.
     */
    createInstallmentFinancialRecord(requestParameters: CreateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordDto>;
    /**
     *
     * @summary Busca todos os lançamentos financeiros parcelados.
     * @param {boolean} [completed] Indica se o lançamento parcelado está completo (todas as parcelas pagas/recebidas).
     * @param {'MONTHLY' | 'WEEKLY' | 'YEARLY'} [frequency] Frequência do lançamento parcelado.
     * @param {Date} [competenceDateTo] Data de competência final (formato ISO YYYY-MM-DD).
     * @param {Date} [competenceDateFrom] Data de competência inicial (formato ISO YYYY-MM-DD).
     * @param {Array<any>} [tags] Identificadores das tags.
     * @param {string} [subcategory] Identificador da subcategoria.
     * @param {string} [contact] Identificador do contato.
     * @param {Date} [firstInstallmentDateTo] Data final da primeira parcela (formato ISO YYYY-MM-DD).
     * @param {Date} [firstInstallmentDateFrom] Data inicial da primeira parcela (formato ISO YYYY-MM-DD).
     * @param {'IN' | 'OUT'} [direction] Direção do lançamento (entrada/saída).
     * @param {'asc' | 'desc'} [sortOrder] Ordem da ordenação.
     * @param {'direction' | 'firstInstallmentDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'tags' | 'competenceDate' | 'frequency' | 'createdAt'} [sortBy] Campo para ordenação.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {string} [textSearchTerm] Termo para busca por descrição do lançamento parcelado.
     * @param {number} [pageSize] Quantidade de itens por página.
     * @param {number} [pageIndex] Índice da página.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallmentFinancialRecordsApiInterface
     */
    findAllInstallmentFinancialRecordsRaw(requestParameters: FindAllInstallmentFinancialRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordsPageDto>>;
    /**
     * Busca todos os lançamentos financeiros parcelados.
     */
    findAllInstallmentFinancialRecords(requestParameters: FindAllInstallmentFinancialRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordsPageDto>;
    /**
     *
     * @summary Busca um lançamento financeiro parcelado pelo identificador.
     * @param {string} id Identificador do lançamento financeiro parcelado.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallmentFinancialRecordsApiInterface
     */
    findByIdInstallmentFinancialRecordRaw(requestParameters: FindByIdInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordDto>>;
    /**
     * Busca um lançamento financeiro parcelado pelo identificador.
     */
    findByIdInstallmentFinancialRecord(requestParameters: FindByIdInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordDto>;
    /**
     *
     * @summary Atualiza parcialmente um lançamento financeiro parcelado.
     * @param {string} id Identificador do lançamento financeiro parcelado.
     * @param {PartialUpdateInstallmentFinancialRecordRequestBodyDto} partialUpdateInstallmentFinancialRecordRequestBodyDto
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallmentFinancialRecordsApiInterface
     */
    partialUpdateInstallmentFinancialRecordRaw(requestParameters: PartialUpdateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordDto>>;
    /**
     * Atualiza parcialmente um lançamento financeiro parcelado.
     */
    partialUpdateInstallmentFinancialRecord(requestParameters: PartialUpdateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordDto>;
    /**
     * Remove um lançamento financeiro parcelado com opções para remoção de lançamentos financeiros relacionados.
     * @summary Remove um lançamento financeiro parcelado.
     * @param {string} id Identificador do lançamento financeiro parcelado.
     * @param {RemoveInstallmentFinancialRecordRequestBodyDto} removeInstallmentFinancialRecordRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstallmentFinancialRecordsApiInterface
     */
    removeInstallmentFinancialRecordRaw(requestParameters: RemoveInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove um lançamento financeiro parcelado com opções para remoção de lançamentos financeiros relacionados.
     * Remove um lançamento financeiro parcelado.
     */
    removeInstallmentFinancialRecord(requestParameters: RemoveInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class InstallmentFinancialRecordsApi extends runtime.BaseAPI implements InstallmentFinancialRecordsApiInterface {
    /**
     * Cria um novo lançamento financeiro parcelado.
     */
    createInstallmentFinancialRecordRaw(requestParameters: CreateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordDto>>;
    /**
     * Cria um novo lançamento financeiro parcelado.
     */
    createInstallmentFinancialRecord(requestParameters: CreateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordDto>;
    /**
     * Busca todos os lançamentos financeiros parcelados.
     */
    findAllInstallmentFinancialRecordsRaw(requestParameters: FindAllInstallmentFinancialRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordsPageDto>>;
    /**
     * Busca todos os lançamentos financeiros parcelados.
     */
    findAllInstallmentFinancialRecords(requestParameters?: FindAllInstallmentFinancialRecordsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordsPageDto>;
    /**
     * Busca um lançamento financeiro parcelado pelo identificador.
     */
    findByIdInstallmentFinancialRecordRaw(requestParameters: FindByIdInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordDto>>;
    /**
     * Busca um lançamento financeiro parcelado pelo identificador.
     */
    findByIdInstallmentFinancialRecord(requestParameters: FindByIdInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordDto>;
    /**
     * Atualiza parcialmente um lançamento financeiro parcelado.
     */
    partialUpdateInstallmentFinancialRecordRaw(requestParameters: PartialUpdateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstallmentFinancialRecordDto>>;
    /**
     * Atualiza parcialmente um lançamento financeiro parcelado.
     */
    partialUpdateInstallmentFinancialRecord(requestParameters: PartialUpdateInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstallmentFinancialRecordDto>;
    /**
     * Remove um lançamento financeiro parcelado com opções para remoção de lançamentos financeiros relacionados.
     * Remove um lançamento financeiro parcelado.
     */
    removeInstallmentFinancialRecordRaw(requestParameters: RemoveInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove um lançamento financeiro parcelado com opções para remoção de lançamentos financeiros relacionados.
     * Remove um lançamento financeiro parcelado.
     */
    removeInstallmentFinancialRecord(requestParameters: RemoveInstallmentFinancialRecordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 * @export
 */
export declare const FindAllInstallmentFinancialRecordsFrequencyEnum: {
    readonly Monthly: "MONTHLY";
    readonly Weekly: "WEEKLY";
    readonly Yearly: "YEARLY";
};
export type FindAllInstallmentFinancialRecordsFrequencyEnum = typeof FindAllInstallmentFinancialRecordsFrequencyEnum[keyof typeof FindAllInstallmentFinancialRecordsFrequencyEnum];
/**
 * @export
 */
export declare const FindAllInstallmentFinancialRecordsDirectionEnum: {
    readonly In: "IN";
    readonly Out: "OUT";
};
export type FindAllInstallmentFinancialRecordsDirectionEnum = typeof FindAllInstallmentFinancialRecordsDirectionEnum[keyof typeof FindAllInstallmentFinancialRecordsDirectionEnum];
/**
 * @export
 */
export declare const FindAllInstallmentFinancialRecordsSortOrderEnum: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type FindAllInstallmentFinancialRecordsSortOrderEnum = typeof FindAllInstallmentFinancialRecordsSortOrderEnum[keyof typeof FindAllInstallmentFinancialRecordsSortOrderEnum];
/**
 * @export
 */
export declare const FindAllInstallmentFinancialRecordsSortByEnum: {
    readonly Direction: "direction";
    readonly FirstInstallmentDate: "firstInstallmentDate";
    readonly Contact: "contact";
    readonly Description: "description";
    readonly Subcategory: "subcategory";
    readonly Amount: "amount";
    readonly Tags: "tags";
    readonly CompetenceDate: "competenceDate";
    readonly Frequency: "frequency";
    readonly CreatedAt: "createdAt";
};
export type FindAllInstallmentFinancialRecordsSortByEnum = typeof FindAllInstallmentFinancialRecordsSortByEnum[keyof typeof FindAllInstallmentFinancialRecordsSortByEnum];
