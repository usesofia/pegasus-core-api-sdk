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
 * @interface FileEntity
 */
export interface FileEntity {
    /**
     * Identificador do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    id: string;
    /**
     * Identificador da organização dona do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    ownerOrganization: string;
    /**
     * Nome original do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    originalFileName: string;
    /**
     * Tipo MIME do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    mimeType: string;
    /**
     * Tamanho do arquivo em bytes.
     * @type {number}
     * @memberof FileEntity
     */
    size: number;
    /**
     * Tipo do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    fileType: FileEntityFileTypeEnum;
    /**
     * Nome do objeto no storage.
     * @type {string}
     * @memberof FileEntity
     */
    objectName: string;
    /**
     * Status do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    status: FileEntityStatusEnum;
    /**
     * Legenda do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    caption?: string | null;
    /**
     * Data de criação do arquivo.
     * @type {any}
     * @memberof FileEntity
     */
    createdAt: any | null;
    /**
     * Data de atualização do arquivo.
     * @type {any}
     * @memberof FileEntity
     */
    updatedAt: any | null;
    /**
     * Data de exclusão do arquivo.
     * @type {any}
     * @memberof FileEntity
     */
    deletedAt?: any | null;
    /**
     * URL do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    url: string;
    /**
     * URL assinada do arquivo.
     * @type {string}
     * @memberof FileEntity
     */
    signedUrl: string;
}
/**
 * @export
 */
export declare const FileEntityFileTypeEnum: {
    readonly Default: "DEFAULT";
    readonly FinancialRecord: "FINANCIAL_RECORD";
    readonly Export: "EXPORT";
    readonly InstallmentFinancialRecord: "INSTALLMENT_FINANCIAL_RECORD";
    readonly RecurringFinancialRecord: "RECURRING_FINANCIAL_RECORD";
    readonly Ofx: "OFX";
    readonly ExtractFinancialRecordFromFile: "EXTRACT_FINANCIAL_RECORD_FROM_FILE";
    readonly ExtractContactFromFile: "EXTRACT_CONTACT_FROM_FILE";
    readonly FinancialRecordsBulkCreate: "FINANCIAL_RECORDS_BULK_CREATE";
    readonly ContactsBulkCreate: "CONTACTS_BULK_CREATE";
    readonly FinancialRecordsBulkCreateExtractionInput: "FINANCIAL_RECORDS_BULK_CREATE_EXTRACTION_INPUT";
    readonly FinancialRecordsBulkCreateExtractionOutput: "FINANCIAL_RECORDS_BULK_CREATE_EXTRACTION_OUTPUT";
    readonly ContactsBulkCreateExtractionInput: "CONTACTS_BULK_CREATE_EXTRACTION_INPUT";
    readonly ContactsBulkCreateExtractionOutput: "CONTACTS_BULK_CREATE_EXTRACTION_OUTPUT";
    readonly SevenDaysTempFile: "SEVEN_DAYS_TEMP_FILE";
    readonly WhatsappMessageFile: "WHATSAPP_MESSAGE_FILE";
    readonly EmailForwardingIntegration: "EMAIL_FORWARDING_INTEGRATION";
};
export type FileEntityFileTypeEnum = typeof FileEntityFileTypeEnum[keyof typeof FileEntityFileTypeEnum];
/**
 * @export
 */
export declare const FileEntityStatusEnum: {
    readonly Pending: "PENDING";
    readonly Completed: "COMPLETED";
    readonly Failed: "FAILED";
    readonly Deleted: "DELETED";
};
export type FileEntityStatusEnum = typeof FileEntityStatusEnum[keyof typeof FileEntityStatusEnum];
/**
 * Check if a given object implements the FileEntity interface.
 */
export declare function instanceOfFileEntity(value: object): value is FileEntity;
export declare function FileEntityFromJSON(json: any): FileEntity;
export declare function FileEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileEntity;
export declare function FileEntityToJSON(json: any): FileEntity;
export declare function FileEntityToJSONTyped(value?: FileEntity | null, ignoreDiscriminator?: boolean): any;
