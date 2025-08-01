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
 * @interface CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData
 */
export interface CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData {
    /**
     *
     * @type {string}
     * @memberof CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData
     */
    financialRecordId: string;
}
/**
 * Check if a given object implements the CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData interface.
 */
export declare function instanceOfCreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData(value: object): value is CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData;
export declare function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSON(json: any): CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData;
export declare function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData;
export declare function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSON(json: any): CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData;
export declare function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSONTyped(value?: CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData | null, ignoreDiscriminator?: boolean): any;
