/**
 * Sofia Pegasus core-api
 * Api principal do sistema Pegasus para gerenciamento financeiro de pequenas e médias empresas.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { HealthResponseDto } from '../models/index';
/**
 * HealthApi - interface
 *
 * @export
 * @interface HealthApiInterface
 */
export interface HealthApiInterface {
    /**
     *
     * @summary Gera um erro de teste.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiInterface
     */
    errorRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Gera um erro de teste.
     */
    error(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *
     * @summary Verifica o status do serviço.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiInterface
     */
    healthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponseDto>>;
    /**
     * Verifica o status do serviço.
     */
    health(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponseDto>;
    /**
     *
     * @summary Verifica o status do serviço.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiInterface
     */
    healthPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponseDto>>;
    /**
     * Verifica o status do serviço.
     */
    healthPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponseDto>;
}
/**
 *
 */
export declare class HealthApi extends runtime.BaseAPI implements HealthApiInterface {
    /**
     * Gera um erro de teste.
     */
    errorRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Gera um erro de teste.
     */
    error(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Verifica o status do serviço.
     */
    healthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponseDto>>;
    /**
     * Verifica o status do serviço.
     */
    health(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponseDto>;
    /**
     * Verifica o status do serviço.
     */
    healthPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthResponseDto>>;
    /**
     * Verifica o status do serviço.
     */
    healthPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthResponseDto>;
}