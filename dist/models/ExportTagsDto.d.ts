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
/**
 *
 * @export
 * @interface ExportTagsDto
 */
export interface ExportTagsDto {
    /**
     *
     * @type {string}
     * @memberof ExportTagsDto
     */
    id: string;
}
/**
 * Check if a given object implements the ExportTagsDto interface.
 */
export declare function instanceOfExportTagsDto(value: object): value is ExportTagsDto;
export declare function ExportTagsDtoFromJSON(json: any): ExportTagsDto;
export declare function ExportTagsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportTagsDto;
export declare function ExportTagsDtoToJSON(json: any): ExportTagsDto;
export declare function ExportTagsDtoToJSONTyped(value?: ExportTagsDto | null, ignoreDiscriminator?: boolean): any;
