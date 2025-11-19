# FinancialRecordsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFinancialRecord**](FinancialRecordsApi.md#createfinancialrecord) | **POST** /external/financial-records | Cria um novo lançamento financeiro. |
| [**createManyFinancialRecords**](FinancialRecordsApi.md#createmanyfinancialrecords) | **POST** /external/financial-records/many | Cria múltiplos lançamentos financeiros. |
| [**findAllFinancialRecords**](FinancialRecordsApi.md#findallfinancialrecords) | **GET** /external/financial-records | Busca todos os lançamentos financeiros. |
| [**findByIdFinancialRecord**](FinancialRecordsApi.md#findbyidfinancialrecord) | **GET** /external/financial-records/{id} | Busca um lançamento financeiro pelo identificador. |
| [**partialUpdateFinancialRecord**](FinancialRecordsApi.md#partialupdatefinancialrecord) | **PATCH** /external/financial-records/{id} | Atualiza parcialmente um lançamento financeiro. |
| [**partialUpdateManyFinancialRecords**](FinancialRecordsApi.md#partialupdatemanyfinancialrecords) | **PATCH** /external/financial-records/many | Atualiza parcialmente múltiplos lançamentos financeiros. |
| [**removeFinancialRecord**](FinancialRecordsApi.md#removefinancialrecord) | **DELETE** /external/financial-records/{id} | Remove um lançamento financeiro. |
| [**systemCalculateAndUpdateTextSearchVariationsAndHints**](FinancialRecordsApi.md#systemcalculateandupdatetextsearchvariationsandhints) | **POST** /external/financial-records/calculate-and-update-text-search-variations-and-hints | Calcula e atualiza os campos de variações de busca textual e dicas de busca para múltiplos lançamentos financeiros. |
| [**systemCreateManyFinancialRecords**](FinancialRecordsApi.md#systemcreatemanyfinancialrecords) | **POST** /internal/organizations/{organizationId}/financial-records/many | Cria múltiplos lançamentos financeiros. |
| [**systemFindAllFinancialRecords**](FinancialRecordsApi.md#systemfindallfinancialrecords) | **GET** /internal/financial-records | Busca todos os lançamentos financeiros pelo sistema. |
| [**systemFindByIdFinancialRecord**](FinancialRecordsApi.md#systemfindbyidfinancialrecord) | **GET** /internal/organizations/{organizationId}/financial-records/{financialRecordId} | Busca um lançamento financeiro pelo identificador. |
| [**systemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReport**](FinancialRecordsApi.md#systemgeneratemostcommoncontactsandsubcategoriesforsimilarfinancialrecordreport) | **POST** /internal/financial-records/system-generate-most-common-subcategories-for-similar-financial-record-report | Gera relatório dos contatos e subcategorias mais comuns para lançamentos financeiros similares. |
| [**unlinkAllRadarItemsFromFinancialRecord**](FinancialRecordsApi.md#unlinkallradaritemsfromfinancialrecord) | **POST** /external/financial-records/{id}/unlink-all-radar-items | Desvincula todos os radar items de um lançamento financeiro |



## createFinancialRecord

> FinancialRecordDto createFinancialRecord(createFinancialRecordRequestBodyDto, populate)

Cria um novo lançamento financeiro.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // CreateFinancialRecordRequestBodyDto
    createFinancialRecordRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateFinancialRecordRequest;

  try {
    const data = await api.createFinancialRecord(body);
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
| **createFinancialRecordRequestBodyDto** | [CreateFinancialRecordRequestBodyDto](CreateFinancialRecordRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordDto**](FinancialRecordDto.md)

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


## createManyFinancialRecords

> Array&lt;FinancialRecordDto&gt; createManyFinancialRecords(createManyFinancialRecordsRequestBodyDto)

Cria múltiplos lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateManyFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // CreateManyFinancialRecordsRequestBodyDto
    createManyFinancialRecordsRequestBodyDto: ...,
  } satisfies CreateManyFinancialRecordsRequest;

  try {
    const data = await api.createManyFinancialRecords(body);
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
| **createManyFinancialRecordsRequestBodyDto** | [CreateManyFinancialRecordsRequestBodyDto](CreateManyFinancialRecordsRequestBodyDto.md) |  | |

### Return type

[**Array&lt;FinancialRecordDto&gt;**](FinancialRecordDto.md)

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


## findAllFinancialRecords

> FinancialRecordsPageDto findAllFinancialRecords(filterId, sortOrder, sortBy, recurringFinancialRecord, installmentFinancialRecord, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, finalAmountTo, finalAmountFrom, amountTo, amountFrom, direction, ids, populate, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todos os lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | ID do filtro a ser aplicado. (optional)
    filterId: filterId_example,
    // 'asc' | 'desc' | Ordem de ordenação dos lançamentos financeiros. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'dueDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'competenceDate' | 'cashDate' | 'createdAt' | Campo para ordenação dos lançamentos financeiros. (optional)
    sortBy: sortBy_example,
    // string | ID da recorrência financeira. (optional)
    recurringFinancialRecord: recurringFinancialRecord_example,
    // string | ID do parcelamento financeiro. (optional)
    installmentFinancialRecord: installmentFinancialRecord_example,
    // string | IDs de contas bancárias do lançamento financeiro separados por vírgula. (optional)
    account: account_example,
    // boolean | Indica se o lançamento financeiro foi reconciliado. (optional)
    reconciled: true,
    // boolean | Indica se o lançamento financeiro foi completado. (optional)
    completed: true,
    // string | IDs das tags do lançamento financeiro separados por vírgula. (optional)
    tags: tags_example,
    // string | Data de criação final. (optional)
    createdAtTo: createdAtTo_example,
    // string | Data de criação inicial. (optional)
    createdAtFrom: createdAtFrom_example,
    // string | Data de pagamento final. (optional)
    cashDateTo: cashDateTo_example,
    // string | Data de pagamento inicial. (optional)
    cashDateFrom: cashDateFrom_example,
    // string | Data de competência final. (optional)
    competenceDateTo: competenceDateTo_example,
    // string | Data de competência inicial. (optional)
    competenceDateFrom: competenceDateFrom_example,
    // string | IDs de subcategorias do lançamento financeiro separados por vírgula. (optional)
    subcategory: subcategory_example,
    // string | IDs de contatos do lançamento financeiro separados por vírgula. (optional)
    contact: contact_example,
    // string | Data de vencimento final. (optional)
    dueDateTo: dueDateTo_example,
    // string | Data de vencimento inicial. (optional)
    dueDateFrom: dueDateFrom_example,
    // string | Valor final do lançamento financeiro máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | Valor final do lançamento financeiro mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor do lançamento financeiro máximo. (optional)
    amountTo: amountTo_example,
    // string | Valor do lançamento financeiro mínimo. (optional)
    amountFrom: amountFrom_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro. (optional)
    direction: direction_example,
    // string | Lista de IDs de lançamentos financeiros para filtrar separados por vírgula. (optional)
    ids: ids_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | Termo para busca semântica. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllFinancialRecordsRequest;

  try {
    const data = await api.findAllFinancialRecords(body);
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
| **filterId** | `string` | ID do filtro a ser aplicado. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `direction`, `dueDate`, `contact`, `description`, `subcategory`, `amount`, `competenceDate`, `cashDate`, `createdAt` | Campo para ordenação dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: direction, dueDate, contact, description, subcategory, amount, competenceDate, cashDate, createdAt] |
| **recurringFinancialRecord** | `string` | ID da recorrência financeira. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do parcelamento financeiro. | [Optional] [Defaults to `undefined`] |
| **account** | `string` | IDs de contas bancárias do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **reconciled** | `boolean` | Indica se o lançamento financeiro foi reconciliado. | [Optional] [Defaults to `undefined`] |
| **completed** | `boolean` | Indica se o lançamento financeiro foi completado. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de pagamento final. | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de pagamento inicial. | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final. | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | IDs de subcategorias do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | IDs de contatos do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final. | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento financeiro máximo. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento financeiro mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento financeiro máximo. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento financeiro mínimo. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **ids** | `string` | Lista de IDs de lançamentos financeiros para filtrar separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordsPageDto**](FinancialRecordsPageDto.md)

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


## findByIdFinancialRecord

> FinancialRecordDto findByIdFinancialRecord(id, populate)

Busca um lançamento financeiro pelo identificador.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdFinancialRecordRequest;

  try {
    const data = await api.findByIdFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordDto**](FinancialRecordDto.md)

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


## partialUpdateFinancialRecord

> FinancialRecordDto partialUpdateFinancialRecord(id, partialUpdateFinancialRecordRequestBodyDto, populate)

Atualiza parcialmente um lançamento financeiro.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro.
    id: id_example,
    // PartialUpdateFinancialRecordRequestBodyDto
    partialUpdateFinancialRecordRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateFinancialRecordRequest;

  try {
    const data = await api.partialUpdateFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro. | [Defaults to `undefined`] |
| **partialUpdateFinancialRecordRequestBodyDto** | [PartialUpdateFinancialRecordRequestBodyDto](PartialUpdateFinancialRecordRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordDto**](FinancialRecordDto.md)

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


## partialUpdateManyFinancialRecords

> Array&lt;FinancialRecordDto&gt; partialUpdateManyFinancialRecords(partialUpdateManyFinancialRecordsRequestBodyDto)

Atualiza parcialmente múltiplos lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateManyFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // PartialUpdateManyFinancialRecordsRequestBodyDto
    partialUpdateManyFinancialRecordsRequestBodyDto: ...,
  } satisfies PartialUpdateManyFinancialRecordsRequest;

  try {
    const data = await api.partialUpdateManyFinancialRecords(body);
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
| **partialUpdateManyFinancialRecordsRequestBodyDto** | [PartialUpdateManyFinancialRecordsRequestBodyDto](PartialUpdateManyFinancialRecordsRequestBodyDto.md) |  | |

### Return type

[**Array&lt;FinancialRecordDto&gt;**](FinancialRecordDto.md)

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


## removeFinancialRecord

> removeFinancialRecord(id, removeFinancialRecordRequestBodyDto)

Remove um lançamento financeiro.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro.
    id: id_example,
    // RemoveFinancialRecordRequestBodyDto
    removeFinancialRecordRequestBodyDto: ...,
  } satisfies RemoveFinancialRecordRequest;

  try {
    const data = await api.removeFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro. | [Defaults to `undefined`] |
| **removeFinancialRecordRequestBodyDto** | [RemoveFinancialRecordRequestBodyDto](RemoveFinancialRecordRequestBodyDto.md) |  | |

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
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemCalculateAndUpdateTextSearchVariationsAndHints

> systemCalculateAndUpdateTextSearchVariationsAndHints(systemCalculateSearchVariationsRequestBodyDto)

Calcula e atualiza os campos de variações de busca textual e dicas de busca para múltiplos lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemCalculateAndUpdateTextSearchVariationsAndHintsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // SystemCalculateSearchVariationsRequestBodyDto
    systemCalculateSearchVariationsRequestBodyDto: ...,
  } satisfies SystemCalculateAndUpdateTextSearchVariationsAndHintsRequest;

  try {
    const data = await api.systemCalculateAndUpdateTextSearchVariationsAndHints(body);
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
| **systemCalculateSearchVariationsRequestBodyDto** | [SystemCalculateSearchVariationsRequestBodyDto](SystemCalculateSearchVariationsRequestBodyDto.md) |  | |

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
| **200** | Variations and hints calculated and updated for all financial records. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemCreateManyFinancialRecords

> Array&lt;FinancialRecordDto&gt; systemCreateManyFinancialRecords(organizationId, createManyFinancialRecordsRequestBodyDto)

Cria múltiplos lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemCreateManyFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador da organização.
    organizationId: organizationId_example,
    // CreateManyFinancialRecordsRequestBodyDto
    createManyFinancialRecordsRequestBodyDto: ...,
  } satisfies SystemCreateManyFinancialRecordsRequest;

  try {
    const data = await api.systemCreateManyFinancialRecords(body);
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
| **organizationId** | `string` | Identificador da organização. | [Defaults to `undefined`] |
| **createManyFinancialRecordsRequestBodyDto** | [CreateManyFinancialRecordsRequestBodyDto](CreateManyFinancialRecordsRequestBodyDto.md) |  | |

### Return type

[**Array&lt;FinancialRecordDto&gt;**](FinancialRecordDto.md)

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


## systemFindAllFinancialRecords

> SystemFinancialRecordsPageDto systemFindAllFinancialRecords(ownerOrganizationId, generatePdfListExport, generatePdfTableExport, generateExcelExport, readPreference, sortOrder, sortBy, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, finalAmountTo, finalAmountFrom, amountTo, amountFrom, direction, ids, populate, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todos os lançamentos financeiros pelo sistema.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador da organização proprietária dos lançamentos financeiros.
    ownerOrganizationId: ownerOrganizationId_example,
    // boolean | Se true, gera um export em PDF com layout em lista dos resultados. (optional)
    generatePdfListExport: true,
    // boolean | Se true, gera um export em PDF dos resultados. (optional)
    generatePdfTableExport: true,
    // boolean | Se true, gera um export em Excel dos resultados. (optional)
    generateExcelExport: true,
    // 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest' | Preferência de leitura dos lançamentos financeiros. (optional)
    readPreference: readPreference_example,
    // 'asc' | 'desc' | Ordem de ordenação dos lançamentos financeiros. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'dueDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'competenceDate' | 'cashDate' | 'createdAt' | Campo para ordenação dos lançamentos financeiros. (optional)
    sortBy: sortBy_example,
    // string | IDs de contas bancárias do lançamento financeiro separados por vírgula. (optional)
    account: account_example,
    // boolean | Indica se o lançamento financeiro foi reconciliado. (optional)
    reconciled: true,
    // boolean | Indica se o lançamento financeiro foi completado. (optional)
    completed: true,
    // string | IDs das tags do lançamento financeiro separados por vírgula. (optional)
    tags: tags_example,
    // string | Data de criação final. (optional)
    createdAtTo: createdAtTo_example,
    // string | Data de criação inicial. (optional)
    createdAtFrom: createdAtFrom_example,
    // string | Data de pagamento final. (optional)
    cashDateTo: cashDateTo_example,
    // string | Data de pagamento inicial. (optional)
    cashDateFrom: cashDateFrom_example,
    // string | Data de competência final. (optional)
    competenceDateTo: competenceDateTo_example,
    // string | Data de competência inicial. (optional)
    competenceDateFrom: competenceDateFrom_example,
    // string | IDs de subcategorias do lançamento financeiro separados por vírgula. (optional)
    subcategory: subcategory_example,
    // string | IDs de contatos do lançamento financeiro separados por vírgula. (optional)
    contact: contact_example,
    // string | Data de vencimento final. (optional)
    dueDateTo: dueDateTo_example,
    // string | Data de vencimento inicial. (optional)
    dueDateFrom: dueDateFrom_example,
    // string | Valor final do lançamento financeiro máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | Valor final do lançamento financeiro mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor do lançamento financeiro máximo. (optional)
    amountTo: amountTo_example,
    // string | Valor do lançamento financeiro mínimo. (optional)
    amountFrom: amountFrom_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro. (optional)
    direction: direction_example,
    // string | Lista de IDs de lançamentos financeiros para filtrar separados por vírgula. (optional)
    ids: ids_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | Termo para busca semântica. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllFinancialRecordsRequest;

  try {
    const data = await api.systemFindAllFinancialRecords(body);
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
| **ownerOrganizationId** | `string` | Identificador da organização proprietária dos lançamentos financeiros. | [Defaults to `undefined`] |
| **generatePdfListExport** | `boolean` | Se true, gera um export em PDF com layout em lista dos resultados. | [Optional] [Defaults to `undefined`] |
| **generatePdfTableExport** | `boolean` | Se true, gera um export em PDF dos resultados. | [Optional] [Defaults to `undefined`] |
| **generateExcelExport** | `boolean` | Se true, gera um export em Excel dos resultados. | [Optional] [Defaults to `undefined`] |
| **readPreference** | `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest` | Preferência de leitura dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: primary, primaryPreferred, secondary, secondaryPreferred, nearest] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `direction`, `dueDate`, `contact`, `description`, `subcategory`, `amount`, `competenceDate`, `cashDate`, `createdAt` | Campo para ordenação dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: direction, dueDate, contact, description, subcategory, amount, competenceDate, cashDate, createdAt] |
| **account** | `string` | IDs de contas bancárias do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **reconciled** | `boolean` | Indica se o lançamento financeiro foi reconciliado. | [Optional] [Defaults to `undefined`] |
| **completed** | `boolean` | Indica se o lançamento financeiro foi completado. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de pagamento final. | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de pagamento inicial. | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final. | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | IDs de subcategorias do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | IDs de contatos do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final. | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento financeiro máximo. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento financeiro mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento financeiro máximo. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento financeiro mínimo. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **ids** | `string` | Lista de IDs de lançamentos financeiros para filtrar separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**SystemFinancialRecordsPageDto**](SystemFinancialRecordsPageDto.md)

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


## systemFindByIdFinancialRecord

> FinancialRecordDto systemFindByIdFinancialRecord(organizationId, financialRecordId, populate)

Busca um lançamento financeiro pelo identificador.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindByIdFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador da organização.
    organizationId: organizationId_example,
    // string | Identificador do lançamento financeiro.
    financialRecordId: financialRecordId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies SystemFindByIdFinancialRecordRequest;

  try {
    const data = await api.systemFindByIdFinancialRecord(body);
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
| **organizationId** | `string` | Identificador da organização. | [Defaults to `undefined`] |
| **financialRecordId** | `string` | Identificador do lançamento financeiro. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordDto**](FinancialRecordDto.md)

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


## systemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReport

> SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto systemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReport(nSubcategories, nSimilarFinancialRecordsConsidered, ownerOrganizationId, systemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto, readPreference)

Gera relatório dos contatos e subcategorias mais comuns para lançamentos financeiros similares.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReportRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // number | Número de subcategorias a retornar
    nSubcategories: 8.14,
    // number | Número máximo de lançamentos financeiros similares a considerar
    nSimilarFinancialRecordsConsidered: 8.14,
    // string | Identificador da organização dona do lançamento financeiro
    ownerOrganizationId: ownerOrganizationId_example,
    // SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto
    systemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto: ...,
    // 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest' | Preferência de leitura dos lançamentos financeiros. (optional)
    readPreference: readPreference_example,
  } satisfies SystemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReportRequest;

  try {
    const data = await api.systemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReport(body);
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
| **nSubcategories** | `number` | Número de subcategorias a retornar | [Defaults to `undefined`] |
| **nSimilarFinancialRecordsConsidered** | `number` | Número máximo de lançamentos financeiros similares a considerar | [Defaults to `undefined`] |
| **ownerOrganizationId** | `string` | Identificador da organização dona do lançamento financeiro | [Defaults to `undefined`] |
| **systemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto** | [SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto](SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto.md) |  | |
| **readPreference** | `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest` | Preferência de leitura dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: primary, primaryPreferred, secondary, secondaryPreferred, nearest] |

### Return type

[**SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto**](SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto.md)

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


## unlinkAllRadarItemsFromFinancialRecord

> object unlinkAllRadarItemsFromFinancialRecord(id, unlinkAllRadarItemsRequestBodyDto)

Desvincula todos os radar items de um lançamento financeiro

Remove o vínculo entre um lançamento financeiro e todos os radar items que estão associados a ele.

### Example

```ts
import {
  Configuration,
  FinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { UnlinkAllRadarItemsFromFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro.
    id: id_example,
    // UnlinkAllRadarItemsRequestBodyDto
    unlinkAllRadarItemsRequestBodyDto: ...,
  } satisfies UnlinkAllRadarItemsFromFinancialRecordRequest;

  try {
    const data = await api.unlinkAllRadarItemsFromFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro. | [Defaults to `undefined`] |
| **unlinkAllRadarItemsRequestBodyDto** | [UnlinkAllRadarItemsRequestBodyDto](UnlinkAllRadarItemsRequestBodyDto.md) |  | |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lançamento financeiro com os radar items desvinculados |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

