# BankTransactionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrUpdateBankTransaction**](BankTransactionsApi.md#createorupdatebanktransaction) | **PUT** /internal/bank-transactions | Cria ou atualiza uma movimentação financeira. |
| [**createOrUpdateBankTransactionBestSuggestedAction**](BankTransactionsApi.md#createorupdatebanktransactionbestsuggestedaction) | **PUT** /external/bank-transactions/{bankTransactionId}/best-suggested-action | Cria ou atualiza uma sugestão de melhor ação para uma transação bancária. |
| [**dispatchOfxImport**](BankTransactionsApi.md#dispatchofximport) | **POST** /external/bank-transactions/ofx | Dispara a importação assíncrona de um arquivo OFX. |
| [**findAllBankTransactions**](BankTransactionsApi.md#findallbanktransactions) | **GET** /external/bank-transactions | Busca todas as movimentações financeiras. |
| [**findAllOfxImportJobRequests**](BankTransactionsApi.md#findallofximportjobrequests) | **GET** /external/bank-transactions/ofx/job-requests | Lista todas as solicitações de importação de arquivos OFX com suas execuções. |
| [**findBankTransactionById**](BankTransactionsApi.md#findbanktransactionbyid) | **GET** /external/bank-transactions/{id} | Busca uma movimentação financeira por ID. |
| [**partialUpdateBankTransaction**](BankTransactionsApi.md#partialupdatebanktransaction) | **PATCH** /external/bank-transactions/{id} | Atualiza parcialmente uma movimentação financeira. |
| [**processBankTransactionsCreateOrUpdateBestSuggestionAction**](BankTransactionsApi.md#processbanktransactionscreateorupdatebestsuggestionaction) | **POST** /internal/queues/bank-transactions-create-or-update-best-suggestion-action | Processa a obtenção de sugestões de melhor ação para transações bancárias via AI. |
| [**processBulkBankTransactionsOperation**](BankTransactionsApi.md#processbulkbanktransactionsoperation) | **POST** /internal/queues/bulk-bank-transactions | Processa uma operação em lote para transações bancárias. |
| [**processOfxImport**](BankTransactionsApi.md#processofximport) | **POST** /internal/queues/ofx-import | Processa a importação assíncrona de um arquivo OFX. |
| [**reconcileBankTransaction**](BankTransactionsApi.md#reconcilebanktransaction) | **POST** /external/bank-transactions/{bankTransactionId}/reconcile | Reconcilia uma transação bancária com múltiplos lançamentos financeiros. |
| [**scheduleBulkBankTransactionsOperation**](BankTransactionsApi.md#schedulebulkbanktransactionsoperation) | **POST** /external/bank-transactions/bulk-operations | Agenda uma operação em lote para transações bancárias. |
| [**shouldAiSuggestAction**](BankTransactionsApi.md#shouldaisuggestaction) | **POST** /internal/bank-transactions/should-ai-suggest-action | Verifica se a AI deve sugerir uma ação para uma transação bancária. |
| [**systemFindAllBankTransactions**](BankTransactionsApi.md#systemfindallbanktransactions) | **GET** /internal/bank-transactions | Busca todas as movimentações financeiras pelo sistema. |
| [**systemFindBankTransactionById**](BankTransactionsApi.md#systemfindbanktransactionbyid) | **GET** /internal/bank-transactions/{id} | Busca uma movimentação financeira por ID. |
| [**systemOrganizationFindAllBankTransactions**](BankTransactionsApi.md#systemorganizationfindallbanktransactions) | **GET** /internal/organizations/{organizationId}/bank-transactions | Busca todas as movimentações financeiras pelo sistema (por organização). |
| [**unreconcileBankTransaction**](BankTransactionsApi.md#unreconcilebanktransaction) | **POST** /external/bank-transactions/{bankTransactionId}/unreconcile | Desfaz a reconciliação de uma transação bancária. |



## createOrUpdateBankTransaction

> BankTransactionEntity createOrUpdateBankTransaction(createOrUpdateBankTransactionRequestBodyDto, populate)

Cria ou atualiza uma movimentação financeira.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateOrUpdateBankTransactionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // CreateOrUpdateBankTransactionRequestBodyDto
    createOrUpdateBankTransactionRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateOrUpdateBankTransactionRequest;

  try {
    const data = await api.createOrUpdateBankTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createOrUpdateBankTransactionRequestBodyDto** | [CreateOrUpdateBankTransactionRequestBodyDto](CreateOrUpdateBankTransactionRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrUpdateBankTransactionBestSuggestedAction

> BankTransactionEntity createOrUpdateBankTransactionBestSuggestedAction(bankTransactionId)

Cria ou atualiza uma sugestão de melhor ação para uma transação bancária.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateOrUpdateBankTransactionBestSuggestedActionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da transação bancária para obter sugestões de melhor ação.
    bankTransactionId: bankTransactionId_example,
  } satisfies CreateOrUpdateBankTransactionBestSuggestedActionRequest;

  try {
    const data = await api.createOrUpdateBankTransactionBestSuggestedAction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bankTransactionId** | `string` | ID da transação bancária para obter sugestões de melhor ação. | [Defaults to `undefined`] |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dispatchOfxImport

> OfxImportJobRequestEntity dispatchOfxImport(ofxImportRequestBodyDto)

Dispara a importação assíncrona de um arquivo OFX.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { DispatchOfxImportRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // OfxImportRequestBodyDto
    ofxImportRequestBodyDto: ...,
  } satisfies DispatchOfxImportRequest;

  try {
    const data = await api.dispatchOfxImport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ofxImportRequestBodyDto** | [OfxImportRequestBodyDto](OfxImportRequestBodyDto.md) |  | |

### Return type

[**OfxImportJobRequestEntity**](OfxImportJobRequestEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllBankTransactions

> BankTransactionsPageDto findAllBankTransactions(populate, sortOrder, sortBy, ignored, origin, reconciled, type, dateTo, dateFrom, bankAccount, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as movimentações financeiras.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllBankTransactionsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // 'asc' | 'desc' | Ordem da ordenação. Valores possíveis: \'asc\', \'desc\'. (optional)
    sortOrder: sortOrder_example,
    // 'date' | 'amountInBrl' | 'description' | 'createdAt' | 'reconciled' | Campo para ordenação (optional)
    sortBy: sortBy_example,
    // boolean | Filtrar por transações ignoradas/arquivadas. (true/false) (optional)
    ignored: true,
    // 'AUTOMATIC_INTEGRATION' | 'MANUAL_OFX_IMPORT' | Filtrar pela origem da transação. (optional)
    origin: origin_example,
    // boolean | Filtrar por transações reconciliadas. (true/false) (optional)
    reconciled: true,
    // 'DEBIT' | 'CREDIT' | Tipo da movimentação. (optional)
    type: type_example,
    // Date | Data final para filtrar. (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // Date | Data inicial para filtrar. (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // string | IDs das contas bancárias separadas por vírgula para filtrar. (optional)
    bankAccount: bankAccount_example,
    // string | Termo para busca semântica em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllBankTransactionsRequest;

  try {
    const data = await api.findAllBankTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. Valores possíveis: \&#39;asc\&#39;, \&#39;desc\&#39;. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `date`, `amountInBrl`, `description`, `createdAt`, `reconciled` | Campo para ordenação | [Optional] [Defaults to `undefined`] [Enum: date, amountInBrl, description, createdAt, reconciled] |
| **ignored** | `boolean` | Filtrar por transações ignoradas/arquivadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **origin** | `AUTOMATIC_INTEGRATION`, `MANUAL_OFX_IMPORT` | Filtrar pela origem da transação. | [Optional] [Defaults to `undefined`] [Enum: AUTOMATIC_INTEGRATION, MANUAL_OFX_IMPORT] |
| **reconciled** | `boolean` | Filtrar por transações reconciliadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **type** | `DEBIT`, `CREDIT` | Tipo da movimentação. | [Optional] [Defaults to `undefined`] [Enum: DEBIT, CREDIT] |
| **dateTo** | `Date` | Data final para filtrar. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Data inicial para filtrar. | [Optional] [Defaults to `undefined`] |
| **bankAccount** | `string` | IDs das contas bancárias separadas por vírgula para filtrar. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionsPageDto**](BankTransactionsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllOfxImportJobRequests

> OfxImportJobRequestsPageDto findAllOfxImportJobRequests(sortOrder, sortBy, pageSize, pageIndex)

Lista todas as solicitações de importação de arquivos OFX com suas execuções.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllOfxImportJobRequestsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // 'asc' | 'desc' | Ordem da ordenação. Valores possíveis: \'asc\', \'desc\'. (optional)
    sortOrder: sortOrder_example,
    // 'createdAt' | 'fileName' | 'bankAccountName' | Campo para ordenação. Valores possíveis: \'createdAt\', \'fileName\', \'bankAccountName\'. (optional)
    sortBy: sortBy_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllOfxImportJobRequestsRequest;

  try {
    const data = await api.findAllOfxImportJobRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. Valores possíveis: \&#39;asc\&#39;, \&#39;desc\&#39;. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `createdAt`, `fileName`, `bankAccountName` | Campo para ordenação. Valores possíveis: \&#39;createdAt\&#39;, \&#39;fileName\&#39;, \&#39;bankAccountName\&#39;. | [Optional] [Defaults to `undefined`] [Enum: createdAt, fileName, bankAccountName] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**OfxImportJobRequestsPageDto**](OfxImportJobRequestsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findBankTransactionById

> BankTransactionEntity findBankTransactionById(id, populate)

Busca uma movimentação financeira por ID.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindBankTransactionByIdRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da movimentação financeira.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindBankTransactionByIdRequest;

  try {
    const data = await api.findBankTransactionById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID da movimentação financeira. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateBankTransaction

> BankTransactionEntity partialUpdateBankTransaction(id, partialUpdateBankTransactionRequestBodyDto, populate)

Atualiza parcialmente uma movimentação financeira.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateBankTransactionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da movimentação financeira.
    id: id_example,
    // PartialUpdateBankTransactionRequestBodyDto
    partialUpdateBankTransactionRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateBankTransactionRequest;

  try {
    const data = await api.partialUpdateBankTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID da movimentação financeira. | [Defaults to `undefined`] |
| **partialUpdateBankTransactionRequestBodyDto** | [PartialUpdateBankTransactionRequestBodyDto](PartialUpdateBankTransactionRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## processBankTransactionsCreateOrUpdateBestSuggestionAction

> processBankTransactionsCreateOrUpdateBestSuggestionAction(executeBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto)

Processa a obtenção de sugestões de melhor ação para transações bancárias via AI.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessBankTransactionsCreateOrUpdateBestSuggestionActionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // ExecuteBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto
    executeBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto: ...,
  } satisfies ProcessBankTransactionsCreateOrUpdateBestSuggestionActionRequest;

  try {
    const data = await api.processBankTransactionsCreateOrUpdateBestSuggestionAction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executeBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto** | [ExecuteBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto](ExecuteBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## processBulkBankTransactionsOperation

> processBulkBankTransactionsOperation(executeBulkBankTransactionsJobRequestBodyDto)

Processa uma operação em lote para transações bancárias.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessBulkBankTransactionsOperationRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // ExecuteBulkBankTransactionsJobRequestBodyDto
    executeBulkBankTransactionsJobRequestBodyDto: ...,
  } satisfies ProcessBulkBankTransactionsOperationRequest;

  try {
    const data = await api.processBulkBankTransactionsOperation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executeBulkBankTransactionsJobRequestBodyDto** | [ExecuteBulkBankTransactionsJobRequestBodyDto](ExecuteBulkBankTransactionsJobRequestBodyDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## processOfxImport

> processOfxImport(executeOfxImportJobRequestBodyDto)

Processa a importação assíncrona de um arquivo OFX.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessOfxImportRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // ExecuteOfxImportJobRequestBodyDto
    executeOfxImportJobRequestBodyDto: ...,
  } satisfies ProcessOfxImportRequest;

  try {
    const data = await api.processOfxImport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executeOfxImportJobRequestBodyDto** | [ExecuteOfxImportJobRequestBodyDto](ExecuteOfxImportJobRequestBodyDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reconcileBankTransaction

> BankTransactionEntity reconcileBankTransaction(bankTransactionId, reconcileBankTransactionRequestBodyDto)

Reconcilia uma transação bancária com múltiplos lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ReconcileBankTransactionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da transação bancária a ser reconciliada.
    bankTransactionId: bankTransactionId_example,
    // ReconcileBankTransactionRequestBodyDto
    reconcileBankTransactionRequestBodyDto: ...,
  } satisfies ReconcileBankTransactionRequest;

  try {
    const data = await api.reconcileBankTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bankTransactionId** | `string` | ID da transação bancária a ser reconciliada. | [Defaults to `undefined`] |
| **reconcileBankTransactionRequestBodyDto** | [ReconcileBankTransactionRequestBodyDto](ReconcileBankTransactionRequestBodyDto.md) |  | |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A transação bancária reconciliada. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleBulkBankTransactionsOperation

> BulkBankTransactionsJobRequestEntity scheduleBulkBankTransactionsOperation(bulkBankTransactionsJobRequestDto)

Agenda uma operação em lote para transações bancárias.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ScheduleBulkBankTransactionsOperationRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // BulkBankTransactionsJobRequestDto
    bulkBankTransactionsJobRequestDto: ...,
  } satisfies ScheduleBulkBankTransactionsOperationRequest;

  try {
    const data = await api.scheduleBulkBankTransactionsOperation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bulkBankTransactionsJobRequestDto** | [BulkBankTransactionsJobRequestDto](BulkBankTransactionsJobRequestDto.md) |  | |

### Return type

[**BulkBankTransactionsJobRequestEntity**](BulkBankTransactionsJobRequestEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## shouldAiSuggestAction

> ShouldAiSuggestActionResponseDto shouldAiSuggestAction(shouldAiSuggestActionRequestBodyDto)

Verifica se a AI deve sugerir uma ação para uma transação bancária.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ShouldAiSuggestActionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // ShouldAiSuggestActionRequestBodyDto
    shouldAiSuggestActionRequestBodyDto: ...,
  } satisfies ShouldAiSuggestActionRequest;

  try {
    const data = await api.shouldAiSuggestAction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **shouldAiSuggestActionRequestBodyDto** | [ShouldAiSuggestActionRequestBodyDto](ShouldAiSuggestActionRequestBodyDto.md) |  | |

### Return type

[**ShouldAiSuggestActionResponseDto**](ShouldAiSuggestActionResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemFindAllBankTransactions

> BankTransactionsPageDto systemFindAllBankTransactions(ownerOrganizationId, populate, sortOrder, sortBy, ignored, origin, reconciled, type, dateTo, dateFrom, bankAccount, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as movimentações financeiras pelo sistema.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllBankTransactionsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | Identificador da organização proprietária das movimentações financeiras.
    ownerOrganizationId: ownerOrganizationId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // 'asc' | 'desc' | Ordem da ordenação. Valores possíveis: \'asc\', \'desc\'. (optional)
    sortOrder: sortOrder_example,
    // 'date' | 'amountInBrl' | 'description' | 'createdAt' | 'reconciled' | Campo para ordenação (optional)
    sortBy: sortBy_example,
    // boolean | Filtrar por transações ignoradas/arquivadas. (true/false) (optional)
    ignored: true,
    // 'AUTOMATIC_INTEGRATION' | 'MANUAL_OFX_IMPORT' | Filtrar pela origem da transação. (optional)
    origin: origin_example,
    // boolean | Filtrar por transações reconciliadas. (true/false) (optional)
    reconciled: true,
    // 'DEBIT' | 'CREDIT' | Tipo da movimentação. (optional)
    type: type_example,
    // Date | Data final para filtrar. (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // Date | Data inicial para filtrar. (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // string | ID da conta bancária para filtrar. (optional)
    bankAccount: bankAccount_example,
    // string | Termo para busca semântica em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllBankTransactionsRequest;

  try {
    const data = await api.systemFindAllBankTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ownerOrganizationId** | `string` | Identificador da organização proprietária das movimentações financeiras. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. Valores possíveis: \&#39;asc\&#39;, \&#39;desc\&#39;. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `date`, `amountInBrl`, `description`, `createdAt`, `reconciled` | Campo para ordenação | [Optional] [Defaults to `undefined`] [Enum: date, amountInBrl, description, createdAt, reconciled] |
| **ignored** | `boolean` | Filtrar por transações ignoradas/arquivadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **origin** | `AUTOMATIC_INTEGRATION`, `MANUAL_OFX_IMPORT` | Filtrar pela origem da transação. | [Optional] [Defaults to `undefined`] [Enum: AUTOMATIC_INTEGRATION, MANUAL_OFX_IMPORT] |
| **reconciled** | `boolean` | Filtrar por transações reconciliadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **type** | `DEBIT`, `CREDIT` | Tipo da movimentação. | [Optional] [Defaults to `undefined`] [Enum: DEBIT, CREDIT] |
| **dateTo** | `Date` | Data final para filtrar. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Data inicial para filtrar. | [Optional] [Defaults to `undefined`] |
| **bankAccount** | `string` | ID da conta bancária para filtrar. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionsPageDto**](BankTransactionsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemFindBankTransactionById

> BankTransactionEntity systemFindBankTransactionById(id, populate)

Busca uma movimentação financeira por ID.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindBankTransactionByIdRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da movimentação financeira.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies SystemFindBankTransactionByIdRequest;

  try {
    const data = await api.systemFindBankTransactionById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID da movimentação financeira. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemOrganizationFindAllBankTransactions

> BankTransactionsPageDto systemOrganizationFindAllBankTransactions(organizationId, populate, sortOrder, sortBy, ignored, origin, reconciled, type, dateTo, dateFrom, bankAccount, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as movimentações financeiras pelo sistema (por organização).

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemOrganizationFindAllBankTransactionsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | Identificador da organização
    organizationId: organizationId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // 'asc' | 'desc' | Ordem da ordenação. Valores possíveis: \'asc\', \'desc\'. (optional)
    sortOrder: sortOrder_example,
    // 'date' | 'amountInBrl' | 'description' | 'createdAt' | 'reconciled' | Campo para ordenação (optional)
    sortBy: sortBy_example,
    // boolean | Filtrar por transações ignoradas/arquivadas. (true/false) (optional)
    ignored: true,
    // 'AUTOMATIC_INTEGRATION' | 'MANUAL_OFX_IMPORT' | Filtrar pela origem da transação. (optional)
    origin: origin_example,
    // boolean | Filtrar por transações reconciliadas. (true/false) (optional)
    reconciled: true,
    // 'DEBIT' | 'CREDIT' | Tipo da movimentação. (optional)
    type: type_example,
    // Date | Data final para filtrar. (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // Date | Data inicial para filtrar. (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // string | ID da conta bancária para filtrar. (optional)
    bankAccount: bankAccount_example,
    // string | Termo para busca semântica em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemOrganizationFindAllBankTransactionsRequest;

  try {
    const data = await api.systemOrganizationFindAllBankTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | `string` | Identificador da organização | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. Valores possíveis: \&#39;asc\&#39;, \&#39;desc\&#39;. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `date`, `amountInBrl`, `description`, `createdAt`, `reconciled` | Campo para ordenação | [Optional] [Defaults to `undefined`] [Enum: date, amountInBrl, description, createdAt, reconciled] |
| **ignored** | `boolean` | Filtrar por transações ignoradas/arquivadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **origin** | `AUTOMATIC_INTEGRATION`, `MANUAL_OFX_IMPORT` | Filtrar pela origem da transação. | [Optional] [Defaults to `undefined`] [Enum: AUTOMATIC_INTEGRATION, MANUAL_OFX_IMPORT] |
| **reconciled** | `boolean` | Filtrar por transações reconciliadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **type** | `DEBIT`, `CREDIT` | Tipo da movimentação. | [Optional] [Defaults to `undefined`] [Enum: DEBIT, CREDIT] |
| **dateTo** | `Date` | Data final para filtrar. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Data inicial para filtrar. | [Optional] [Defaults to `undefined`] |
| **bankAccount** | `string` | ID da conta bancária para filtrar. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankTransactionsPageDto**](BankTransactionsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unreconcileBankTransaction

> BankTransactionEntity unreconcileBankTransaction(bankTransactionId)

Desfaz a reconciliação de uma transação bancária.

### Example

```ts
import {
  Configuration,
  BankTransactionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { UnreconcileBankTransactionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsApi();

  const body = {
    // string | ID da transação bancária para desfazer a reconciliação.
    bankTransactionId: bankTransactionId_example,
  } satisfies UnreconcileBankTransactionRequest;

  try {
    const data = await api.unreconcileBankTransaction(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bankTransactionId** | `string` | ID da transação bancária para desfazer a reconciliação. | [Defaults to `undefined`] |

### Return type

[**BankTransactionEntity**](BankTransactionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A transação bancária com a reconciliação desfeita. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

