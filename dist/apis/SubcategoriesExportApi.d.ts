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
import type { ExportSubcategoriesDto } from '../models/index';
export interface ExportSubcategoriesRequest {
    format?: ExportSubcategoriesFormatEnum;
}
/**
 * SubcategoriesExportApi - interface
 *
 * @export
 * @interface SubcategoriesExportApiInterface
 */
export interface SubcategoriesExportApiInterface {
    /**
     *
     * @summary Solicita a exportação das subcategorias.
     * @param {'csv' | 'xlsx'} [format] Formato de exportação dos dados.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubcategoriesExportApiInterface
     */
    exportSubcategoriesRaw(requestParameters: ExportSubcategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSubcategoriesDto>>;
    /**
     * Solicita a exportação das subcategorias.
     */
    exportSubcategories(requestParameters: ExportSubcategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSubcategoriesDto>;
}
/**
 *
 */
export declare class SubcategoriesExportApi extends runtime.BaseAPI implements SubcategoriesExportApiInterface {
    /**
     * Solicita a exportação das subcategorias.
     */
    exportSubcategoriesRaw(requestParameters: ExportSubcategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSubcategoriesDto>>;
    /**
     * Solicita a exportação das subcategorias.
     */
    exportSubcategories(requestParameters?: ExportSubcategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSubcategoriesDto>;
}
/**
 * @export
 */
export declare const ExportSubcategoriesFormatEnum: {
    readonly Csv: "csv";
    readonly Xlsx: "xlsx";
};
export type ExportSubcategoriesFormatEnum = typeof ExportSubcategoriesFormatEnum[keyof typeof ExportSubcategoriesFormatEnum];
