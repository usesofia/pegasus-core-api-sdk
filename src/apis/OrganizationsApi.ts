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
  CreateOrganizationRequestBodyDto,
  ExceptionResponseEntity,
  OrganizationEntity,
  PartialUpdateOrganizationRequestBodyDto,
} from '../models/index';
import {
    CreateOrganizationRequestBodyDtoFromJSON,
    CreateOrganizationRequestBodyDtoToJSON,
    ExceptionResponseEntityFromJSON,
    ExceptionResponseEntityToJSON,
    OrganizationEntityFromJSON,
    OrganizationEntityToJSON,
    PartialUpdateOrganizationRequestBodyDtoFromJSON,
    PartialUpdateOrganizationRequestBodyDtoToJSON,
} from '../models/index';

export interface CreateOrganizationRequest {
    createOrganizationRequestBodyDto: CreateOrganizationRequestBodyDto;
    populate?: string;
}

export interface ExternalHardRemoveOrganizationRequest {
    organizationId: string;
}

export interface FindOrganizationByIdRequest {
    organizationId: string;
}

export interface HardRemoveOrganizationInternalRequest {
    organizationId: string;
}

export interface PartialUpdateOrganizationRequest {
    id: string;
    partialUpdateOrganizationRequestBodyDto: PartialUpdateOrganizationRequestBodyDto;
}

/**
 * OrganizationsApi - interface
 * 
 * @export
 * @interface OrganizationsApiInterface
 */
export interface OrganizationsApiInterface {
    /**
     * 
     * @summary Create a new organization.
     * @param {CreateOrganizationRequestBodyDto} createOrganizationRequestBodyDto 
     * @param {string} [populate] Related fields to be populated, separated by commas.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    createOrganizationRaw(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>>;

    /**
     * Create a new organization.
     */
    createOrganization(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity>;

    /**
     * 
     * @summary Hard remove an organization and all its data.
     * @param {string} organizationId Organization ID to be removed.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    externalHardRemoveOrganizationRaw(requestParameters: ExternalHardRemoveOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Hard remove an organization and all its data.
     */
    externalHardRemoveOrganization(requestParameters: ExternalHardRemoveOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Find my organizations of type group where I am admin.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    findMyAdminGroupOrganizationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrganizationEntity>>>;

    /**
     * Find my organizations of type group where I am admin.
     */
    findMyAdminGroupOrganizations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrganizationEntity>>;

    /**
     * 
     * @summary Find my organization.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    findMyOrganizationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>>;

    /**
     * Find my organization.
     */
    findMyOrganization(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity>;

    /**
     * 
     * @summary Find an organization by ID.
     * @param {string} organizationId Organization ID to be found.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    findOrganizationByIdRaw(requestParameters: FindOrganizationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>>;

    /**
     * Find an organization by ID.
     */
    findOrganizationById(requestParameters: FindOrganizationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity>;

    /**
     * 
     * @summary Hard remove an organization and all its data (internal endpoint).
     * @param {string} organizationId Organization ID to be removed.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    hardRemoveOrganizationInternalRaw(requestParameters: HardRemoveOrganizationInternalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Hard remove an organization and all its data (internal endpoint).
     */
    hardRemoveOrganizationInternal(requestParameters: HardRemoveOrganizationInternalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Atualiza parcialmente uma organização.
     * @param {string} id Identificador da organização.
     * @param {PartialUpdateOrganizationRequestBodyDto} partialUpdateOrganizationRequestBodyDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiInterface
     */
    partialUpdateOrganizationRaw(requestParameters: PartialUpdateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>>;

    /**
     * Atualiza parcialmente uma organização.
     */
    partialUpdateOrganization(requestParameters: PartialUpdateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity>;

}

/**
 * 
 */
export class OrganizationsApi extends runtime.BaseAPI implements OrganizationsApiInterface {

    /**
     * Create a new organization.
     */
    async createOrganizationRaw(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>> {
        if (requestParameters['createOrganizationRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'createOrganizationRequestBodyDto',
                'Required parameter "createOrganizationRequestBodyDto" was null or undefined when calling createOrganization().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['populate'] != null) {
            queryParameters['populate'] = requestParameters['populate'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        let urlPath = `/external/organizations`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrganizationRequestBodyDtoToJSON(requestParameters['createOrganizationRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationEntityFromJSON(jsonValue));
    }

    /**
     * Create a new organization.
     */
    async createOrganization(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity> {
        const response = await this.createOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Hard remove an organization and all its data.
     */
    async externalHardRemoveOrganizationRaw(requestParameters: ExternalHardRemoveOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError(
                'organizationId',
                'Required parameter "organizationId" was null or undefined when calling externalHardRemoveOrganization().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/external/organizations/{organizationId}/hard`;
        urlPath = urlPath.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters['organizationId'])));

        const response = await this.request({
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Hard remove an organization and all its data.
     */
    async externalHardRemoveOrganization(requestParameters: ExternalHardRemoveOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.externalHardRemoveOrganizationRaw(requestParameters, initOverrides);
    }

    /**
     * Find my organizations of type group where I am admin.
     */
    async findMyAdminGroupOrganizationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<OrganizationEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/external/organizations/my/admin/type/group`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrganizationEntityFromJSON));
    }

    /**
     * Find my organizations of type group where I am admin.
     */
    async findMyAdminGroupOrganizations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<OrganizationEntity>> {
        const response = await this.findMyAdminGroupOrganizationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Find my organization.
     */
    async findMyOrganizationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/external/organizations/my`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationEntityFromJSON(jsonValue));
    }

    /**
     * Find my organization.
     */
    async findMyOrganization(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity> {
        const response = await this.findMyOrganizationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Find an organization by ID.
     */
    async findOrganizationByIdRaw(requestParameters: FindOrganizationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>> {
        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError(
                'organizationId',
                'Required parameter "organizationId" was null or undefined when calling findOrganizationById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/external/organizations/{organizationId}`;
        urlPath = urlPath.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters['organizationId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationEntityFromJSON(jsonValue));
    }

    /**
     * Find an organization by ID.
     */
    async findOrganizationById(requestParameters: FindOrganizationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity> {
        const response = await this.findOrganizationByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Hard remove an organization and all its data (internal endpoint).
     */
    async hardRemoveOrganizationInternalRaw(requestParameters: HardRemoveOrganizationInternalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError(
                'organizationId',
                'Required parameter "organizationId" was null or undefined when calling hardRemoveOrganizationInternal().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/internal/organizations/{organizationId}/hard`;
        urlPath = urlPath.replace(`{${"organizationId"}}`, encodeURIComponent(String(requestParameters['organizationId'])));

        const response = await this.request({
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Hard remove an organization and all its data (internal endpoint).
     */
    async hardRemoveOrganizationInternal(requestParameters: HardRemoveOrganizationInternalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.hardRemoveOrganizationInternalRaw(requestParameters, initOverrides);
    }

    /**
     * Atualiza parcialmente uma organização.
     */
    async partialUpdateOrganizationRaw(requestParameters: PartialUpdateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrganizationEntity>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling partialUpdateOrganization().'
            );
        }

        if (requestParameters['partialUpdateOrganizationRequestBodyDto'] == null) {
            throw new runtime.RequiredError(
                'partialUpdateOrganizationRequestBodyDto',
                'Required parameter "partialUpdateOrganizationRequestBodyDto" was null or undefined when calling partialUpdateOrganization().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        let urlPath = `/external/organizations/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));

        const response = await this.request({
            path: urlPath,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PartialUpdateOrganizationRequestBodyDtoToJSON(requestParameters['partialUpdateOrganizationRequestBodyDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationEntityFromJSON(jsonValue));
    }

    /**
     * Atualiza parcialmente uma organização.
     */
    async partialUpdateOrganization(requestParameters: PartialUpdateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrganizationEntity> {
        const response = await this.partialUpdateOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
