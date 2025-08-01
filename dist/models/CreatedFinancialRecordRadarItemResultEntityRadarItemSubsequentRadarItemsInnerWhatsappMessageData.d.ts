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
import type { CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage } from './CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage';
import type { CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner } from './CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner';
/**
 * Dados da mensagem WhatsApp.
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData
 */
export interface CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData {
    /**
     *
     * @type {CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData
     */
    currentMessage: CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage;
    /**
     * Últimas mensagens.
     * @type {Array<CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData
     */
    lastMessages: Array<CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner>;
}
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData interface.
 */
export declare function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData(value: object): value is CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData;
export declare function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData;
export declare function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData;
export declare function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData;
export declare function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData | null, ignoreDiscriminator?: boolean): any;
