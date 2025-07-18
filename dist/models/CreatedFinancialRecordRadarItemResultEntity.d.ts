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
import type { CreatedFinancialRecordRadarItemResultEntityAutoExecute } from './CreatedFinancialRecordRadarItemResultEntityAutoExecute';
import type { CreatedFinancialRecordRadarItemResultEntityRadarItem } from './CreatedFinancialRecordRadarItemResultEntityRadarItem';
/**
 *
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntity
 */
export interface CreatedFinancialRecordRadarItemResultEntity {
    /**
     *
     * @type {CreatedFinancialRecordRadarItemResultEntityRadarItem}
     * @memberof CreatedFinancialRecordRadarItemResultEntity
     */
    radarItem: CreatedFinancialRecordRadarItemResultEntityRadarItem;
    /**
     * Indica se a criação foi anexada como um registro subsequente ao invés de criar um novo registro principal.
     * @type {boolean}
     * @memberof CreatedFinancialRecordRadarItemResultEntity
     */
    appendedAsSubsequentRadarItem: boolean;
    /**
     *
     * @type {CreatedFinancialRecordRadarItemResultEntityAutoExecute}
     * @memberof CreatedFinancialRecordRadarItemResultEntity
     */
    autoExecute?: CreatedFinancialRecordRadarItemResultEntityAutoExecute;
}
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntity interface.
 */
export declare function instanceOfCreatedFinancialRecordRadarItemResultEntity(value: object): value is CreatedFinancialRecordRadarItemResultEntity;
export declare function CreatedFinancialRecordRadarItemResultEntityFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntity;
export declare function CreatedFinancialRecordRadarItemResultEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntity;
export declare function CreatedFinancialRecordRadarItemResultEntityToJSON(json: any): CreatedFinancialRecordRadarItemResultEntity;
export declare function CreatedFinancialRecordRadarItemResultEntityToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntity | null, ignoreDiscriminator?: boolean): any;
