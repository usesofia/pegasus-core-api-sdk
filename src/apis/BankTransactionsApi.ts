/* tslint:disable */
/* eslint-disable */
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
import type {
  BankTransactionEntity,
  BankTransactionsPageDto,
  CreateOrUpdateBankTransactionRequestBodyDto,
  DispatchOfxImport201Response,
  ExceptionResponseEntity,
  ExecuteOfxImportJobRequestBodyDto,
  OfxImportRequestBodyDto,
  PartialUpdateBankTransactionRequestBodyDto,
} from '../models/index';
import {
    BankTransactionEntityFromJSON,
    BankTransactionEntityToJSON,
    BankTransactionsPageDtoFromJSON,
    BankTransactionsPageDtoToJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoFromJSON,
    CreateOrUpdateBankTransactionRequestBodyDtoToJSON,
    DispatchOfxImport201ResponseFromJSON,
    DispatchOfxImport201ResponseToJSON,
    ExceptionResponseEntityFromJSON,
    ExceptionResponseEntityToJSON,
    ExecuteOfxImportJobRequestBodyDtoFromJSON,
    ExecuteOfxImportJobRequestBodyDtoToJSON,
    OfxImportRequestBodyDtoFromJSON,
    OfxImportRequestBodyDtoToJSON,
    PartialUpdateBankTransactionRequestBodyDtoFromJSON,
    PartialUpdateBankTransactionRequestBodyDtoToJSON,
} from '../models/index';

export interface CreateOrUpdateBankTransactionRequest {
    createOrUpdateBankTransactionRequestBodyDto: CreateOrUpdateBankTransactionRequestBodyDto;
    populate?: string;
}

export interface DispatchOfxImportRequest {
    ofxImportRequestBodyDto: OfxImportRequestBodyDto;
}

export interface FindAllBankTransactionsRequest {
    populate?: string;
    type?: FindAllBankTransactionsTypeEnum;
    dateTo?: Date;
    dateFrom?: Date;
    bankAccount?: string;
    semanticSearchTermInBase64?: string;
    textSearchTerm?: string;
    pageSize?: number;
    pageIndex?: number;
}

export interface FindBankTransactionByIdRequest {
    id: string;
    populate?: string;
}

export interface PartialUpdateBankTransactionRequest {
    id: string;
    partialUpdateBankTransactionRequestBodyDto: PartialUpdateBankTransactionRequestBodyDto;
    populate?: string;
}

export interface ProcessOfxImportRequest {
    executeOfxImportJobRequestBodyDto: ExecuteOfxImportJobRequestBodyDto;
}

export interface SystemFindAllBankTransactionsRequest {
    ownerOrganizationId: string;
    sortOrder?: string;
    sortBy?: string;
    populate?: string;
    type?: SystemFindAllBankTransactionsTypeEnum;
    dateTo?: Date;
    dateFrom?: Date;
    bankAccount?: string;
    semanticSearchTermInBase64?: string;
    textSearchTerm?: string;
    pageSize?: number;
    pageIndex?: number;
}

/**
 * BankTransactionsApi - interface
 * 
 * @export
 * @interface BankTransactionsApiInterface
 */
export interface BankTransactionsApiInterface {
    /**
     * 
     * @summary Cria ou atualiza uma movimentação financeira.
     * @param {CreateOrUpdateBankTransactionRequestBodyDto} createOrUpdateBankTransactionRequestBodyDto 
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    createOrUpdateBankTransactionRaw(requestParameters: CreateOrUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionEntity>>;

    /**
     * Cria ou atualiza uma movimentação financeira.
     */
    createOrUpdateBankTransaction(requestParameters: CreateOrUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionEntity>;

    /**
     * 
     * @summary Dispara a importação assíncrona de um arquivo OFX.
     * @param {OfxImportRequestBodyDto} ofxImportRequestBodyDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    dispatchOfxImportRaw(requestParameters: DispatchOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DispatchOfxImport201Response>>;

    /**
     * Dispara a importação assíncrona de um arquivo OFX.
     */
    dispatchOfxImport(requestParameters: DispatchOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DispatchOfxImport201Response>;

    /**
     * 
     * @summary Busca todas as movimentações financeiras.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {'DEBIT' | 'CREDIT'} [type] Tipo da movimentação.
     * @param {Date} [dateTo] Data final para filtrar.
     * @param {Date} [dateFrom] Data inicial para filtrar.
     * @param {string} [bankAccount] ID da conta bancária para filtrar.
     * @param {string} [semanticSearchTermInBase64] Termo para busca semântica em base64.
     * @param {string} [textSearchTerm] Termo para busca textual.
     * @param {number} [pageSize] Quantidade de itens por página.
     * @param {number} [pageIndex] Índice da página.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    findAllBankTransactionsRaw(requestParameters: FindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionsPageDto>>;

    /**
     * Busca todas as movimentações financeiras.
     */
    findAllBankTransactions(requestParameters: FindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionsPageDto>;

    /**
     * 
     * @summary Busca uma movimentação financeira por ID.
     * @param {string} id ID da movimentação financeira.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    findBankTransactionByIdRaw(requestParameters: FindBankTransactionByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionEntity>>;

    /**
     * Busca uma movimentação financeira por ID.
     */
    findBankTransactionById(requestParameters: FindBankTransactionByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionEntity>;

    /**
     * 
     * @summary Atualiza parcialmente uma movimentação financeira.
     * @param {string} id ID da movimentação financeira.
     * @param {PartialUpdateBankTransactionRequestBodyDto} partialUpdateBankTransactionRequestBodyDto 
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    partialUpdateBankTransactionRaw(requestParameters: PartialUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionEntity>>;

    /**
     * Atualiza parcialmente uma movimentação financeira.
     */
    partialUpdateBankTransaction(requestParameters: PartialUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionEntity>;

    /**
     * 
     * @summary Processa a importação assíncrona de um arquivo OFX.
     * @param {ExecuteOfxImportJobRequestBodyDto} executeOfxImportJobRequestBodyDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    processOfxImportRaw(requestParameters: ProcessOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Processa a importação assíncrona de um arquivo OFX.
     */
    processOfxImport(requestParameters: ProcessOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Busca todas as movimentações financeiras pelo sistema.
     * @param {string} ownerOrganizationId Identificador da organização proprietária das movimentações financeiras.
     * @param {string} [sortOrder] Ordem de ordenação das movimentações financeiras.
     * @param {string} [sortBy] Campo para ordenação das movimentações financeiras.
     * @param {string} [populate] Campos relacionados a serem populados separados por vírgula.
     * @param {'DEBIT' | 'CREDIT'} [type] Tipo da movimentação.
     * @param {Date} [dateTo] Data final para filtrar.
     * @param {Date} [dateFrom] Data inicial para filtrar.
     * @param {string} [bankAccount] ID da conta bancária para filtrar.
     * @param {string} [semanticSearchTermInBase64] Termo para busca semântica em base64.
     * @param {string} [textSearchTerm] Termo para busca textual.
     * @param {number} [pageSize] Quantidade de itens por página.
     * @param {number} [pageIndex] Índice da página.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionsApiInterface
     */
    systemFindAllBankTransactionsRaw(requestParameters: SystemFindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionsPageDto>>;

    /**
     * Busca todas as movimentações financeiras pelo sistema.
     */
    systemFindAllBankTransactions(requestParameters: SystemFindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionsPageDto>;

}

/**
 * 
 */
export class BankTransactionsApi extends runtime.BaseAPI implements BankTransactionsApiInterface {

    /**
     * Cria ou atualiza uma movimentação financeira.
     */
    async createOrUpdateBankTransactionRaw(requestParameters: CreateOrUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionEntity>> {
        if (requestParameters['createOrUpdateBankTransactionRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'createOrUpdateBankTransactionRequestBodyDto',
                'Required parameter "createOrUpdateBankTransactionRequestBodyDto" was null or undefined when calling createOrUpdateBankTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/internal/bank-transactions`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrUpdateBankTransactionRequestBodyDtoToJSON(requestParameters['createOrUpdateBankTransactionRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankTransactionEntityFromJSON(jsonValue));
    }

    /**
     * Cria ou atualiza uma movimentação financeira.
     */
    async createOrUpdateBankTransaction(requestParameters: CreateOrUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionEntity> {
        const response = await this.createOrUpdateBankTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Dispara a importação assíncrona de um arquivo OFX.
     */
    async dispatchOfxImportRaw(requestParameters: DispatchOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DispatchOfxImport201Response>> {
        if (requestParameters['ofxImportRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'ofxImportRequestBodyDto',
                'Required parameter "ofxImportRequestBodyDto" was null or undefined when calling dispatchOfxImport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/external/bank-transactions/ofx`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OfxImportRequestBodyDtoToJSON(requestParameters['ofxImportRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DispatchOfxImport201ResponseFromJSON(jsonValue));
    }

    /**
     * Dispara a importação assíncrona de um arquivo OFX.
     */
    async dispatchOfxImport(requestParameters: DispatchOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DispatchOfxImport201Response> {
        const response = await this.dispatchOfxImportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Busca todas as movimentações financeiras.
     */
    async findAllBankTransactionsRaw(requestParameters: FindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionsPageDto>> {
        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['dateTo'] != null) {
            queryParameters['dateTo'] = (requestParameters['dateTo'] as any).toISOString();
        }

        if (requestParameters['dateFrom'] != null) {
            queryParameters['dateFrom'] = (requestParameters['dateFrom'] as any).toISOString();
        }

        if (requestParameters['bankAccount'] != null) {
            queryParameters['bankAccount'] = requestParameters['bankAccount'];
        }

        if (requestParameters['semanticSearchTermInBase64'] != null) {
            queryParameters['semanticSearchTermInBase64'] = requestParameters['semanticSearchTermInBase64'];
        }

        if (requestParameters['textSearchTerm'] != null) {
            queryParameters['textSearchTerm'] = requestParameters['textSearchTerm'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/external/bank-transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankTransactionsPageDtoFromJSON(jsonValue));
    }

    /**
     * Busca todas as movimentações financeiras.
     */
    async findAllBankTransactions(requestParameters: FindAllBankTransactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionsPageDto> {
        const response = await this.findAllBankTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Busca uma movimentação financeira por ID.
     */
    async findBankTransactionByIdRaw(requestParameters: FindBankTransactionByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling findBankTransactionById().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/external/bank-transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankTransactionEntityFromJSON(jsonValue));
    }

    /**
     * Busca uma movimentação financeira por ID.
     */
    async findBankTransactionById(requestParameters: FindBankTransactionByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionEntity> {
        const response = await this.findBankTransactionByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Atualiza parcialmente uma movimentação financeira.
     */
    async partialUpdateBankTransactionRaw(requestParameters: PartialUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling partialUpdateBankTransaction().'
            );
        }

        if (requestParameters['partialUpdateBankTransactionRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'partialUpdateBankTransactionRequestBodyDto',
                'Required parameter "partialUpdateBankTransactionRequestBodyDto" was null or undefined when calling partialUpdateBankTransaction().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/external/bank-transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PartialUpdateBankTransactionRequestBodyDtoToJSON(requestParameters['partialUpdateBankTransactionRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankTransactionEntityFromJSON(jsonValue));
    }

    /**
     * Atualiza parcialmente uma movimentação financeira.
     */
    async partialUpdateBankTransaction(requestParameters: PartialUpdateBankTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionEntity> {
        const response = await this.partialUpdateBankTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Processa a importação assíncrona de um arquivo OFX.
     */
    async processOfxImportRaw(requestParameters: ProcessOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['executeOfxImportJobRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'executeOfxImportJobRequestBodyDto',
                'Required parameter "executeOfxImportJobRequestBodyDto" was null or undefined when calling processOfxImport().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/internal/queues/ofx-import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExecuteOfxImportJobRequestBodyDtoToJSON(requestParameters['executeOfxImportJobRequestBodyDto']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Processa a importação assíncrona de um arquivo OFX.
     */
    async processOfxImport(requestParameters: ProcessOfxImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.processOfxImportRaw(requestParameters, initOverrides);
    }

    /**
     * Busca todas as movimentações financeiras pelo sistema.
     */
    async systemFindAllBankTransactionsRaw(requestParameters: SystemFindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankTransactionsPageDto>> {
        if (requestParameters['ownerOrganizationId'] == null) {
            throw new runtime.RequiredError(
                'ownerOrganizationId',
                'Required parameter "ownerOrganizationId" was null or undefined when calling systemFindAllBankTransactions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sortOrder'] != null) {
            queryParameters['sortOrder'] = requestParameters['sortOrder'];
        }

        if (requestParameters['sortBy'] != null) {
            queryParameters['sortBy'] = requestParameters['sortBy'];
        }

        if (requestParameters['ownerOrganizationId'] != null) {
            queryParameters['ownerOrganizationId'] = requestParameters['ownerOrganizationId'];
        }

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['dateTo'] != null) {
            queryParameters['dateTo'] = (requestParameters['dateTo'] as any).toISOString();
        }

        if (requestParameters['dateFrom'] != null) {
            queryParameters['dateFrom'] = (requestParameters['dateFrom'] as any).toISOString();
        }

        if (requestParameters['bankAccount'] != null) {
            queryParameters['bankAccount'] = requestParameters['bankAccount'];
        }

        if (requestParameters['semanticSearchTermInBase64'] != null) {
            queryParameters['semanticSearchTermInBase64'] = requestParameters['semanticSearchTermInBase64'];
        }

        if (requestParameters['textSearchTerm'] != null) {
            queryParameters['textSearchTerm'] = requestParameters['textSearchTerm'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internal/bank-transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankTransactionsPageDtoFromJSON(jsonValue));
    }

    /**
     * Busca todas as movimentações financeiras pelo sistema.
     */
    async systemFindAllBankTransactions(requestParameters: SystemFindAllBankTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankTransactionsPageDto> {
        const response = await this.systemFindAllBankTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const FindAllBankTransactionsTypeEnum = {
    Debit: 'DEBIT',
    Credit: 'CREDIT'
} as const;
export type FindAllBankTransactionsTypeEnum = typeof FindAllBankTransactionsTypeEnum[keyof typeof FindAllBankTransactionsTypeEnum];
/**
 * @export
 */
export const SystemFindAllBankTransactionsTypeEnum = {
    Debit: 'DEBIT',
    Credit: 'CREDIT'
} as const;
export type SystemFindAllBankTransactionsTypeEnum = typeof SystemFindAllBankTransactionsTypeEnum[keyof typeof SystemFindAllBankTransactionsTypeEnum];
