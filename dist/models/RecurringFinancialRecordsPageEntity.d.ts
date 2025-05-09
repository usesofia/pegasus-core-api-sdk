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
import type { RecurringFinancialRecordsPageEntityItemsInner } from './RecurringFinancialRecordsPageEntityItemsInner';
import type { ContactsPageEntityPageInfo } from './ContactsPageEntityPageInfo';
/**
 *
 * @export
 * @interface RecurringFinancialRecordsPageEntity
 */
export interface RecurringFinancialRecordsPageEntity {
    /**
     *
     * @type {Array<RecurringFinancialRecordsPageEntityItemsInner>}
     * @memberof RecurringFinancialRecordsPageEntity
     */
    items: Array<RecurringFinancialRecordsPageEntityItemsInner>;
    /**
     *
     * @type {ContactsPageEntityPageInfo}
     * @memberof RecurringFinancialRecordsPageEntity
     */
    pageInfo: ContactsPageEntityPageInfo;
}
/**
 * Check if a given object implements the RecurringFinancialRecordsPageEntity interface.
 */
export declare function instanceOfRecurringFinancialRecordsPageEntity(value: object): value is RecurringFinancialRecordsPageEntity;
export declare function RecurringFinancialRecordsPageEntityFromJSON(json: any): RecurringFinancialRecordsPageEntity;
export declare function RecurringFinancialRecordsPageEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringFinancialRecordsPageEntity;
export declare function RecurringFinancialRecordsPageEntityToJSON(json: any): RecurringFinancialRecordsPageEntity;
export declare function RecurringFinancialRecordsPageEntityToJSONTyped(value?: RecurringFinancialRecordsPageEntity | null, ignoreDiscriminator?: boolean): any;
