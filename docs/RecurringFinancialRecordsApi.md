# RecurringFinancialRecordsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createManyRecurringFinancialRecords**](RecurringFinancialRecordsApi.md#createmanyrecurringfinancialrecords) | **POST** /external/recurring-financial-records/many | Cria múltiplos lançamentos financeiros recorrentes. |
| [**createRecurringFinancialRecord**](RecurringFinancialRecordsApi.md#createrecurringfinancialrecord) | **POST** /external/recurring-financial-records | Cria um novo lançamento financeiro recorrente. |
| [**findAllRecurringFinancialRecords**](RecurringFinancialRecordsApi.md#findallrecurringfinancialrecords) | **GET** /external/recurring-financial-records | Busca todos os lançamentos financeiros recorrentes. |
| [**findByIdRecurringFinancialRecord**](RecurringFinancialRecordsApi.md#findbyidrecurringfinancialrecord) | **GET** /external/recurring-financial-records/{id} | Busca um lançamento financeiro recorrente pelo ID. |
| [**partialUpdateRecurringFinancialRecord**](RecurringFinancialRecordsApi.md#partialupdaterecurringfinancialrecord) | **PATCH** /external/recurring-financial-records/{id} | Atualiza parcialmente um lançamento financeiro recorrente. |
| [**removeRecurringFinancialRecord**](RecurringFinancialRecordsApi.md#removerecurringfinancialrecord) | **DELETE** /external/recurring-financial-records/{id} | Remove um lançamento financeiro recorrente. |
| [**scheduleRecurringFinancialRecordsSeeding**](RecurringFinancialRecordsApi.md#schedulerecurringfinancialrecordsseeding) | **POST** /internal/recurring-financial-records/seed | Agenda o seeder de lançamentos financeiros recorrentes. |
| [**startRecurringFinancialRecordsSeeder**](RecurringFinancialRecordsApi.md#startrecurringfinancialrecordsseeder) | **POST** /internal/queues/recurring-financial-records-2 | Inicia o seeder de lançamentos financeiros recorrentes. |



## createManyRecurringFinancialRecords

> Array&lt;RecurringFinancialRecordDto&gt; createManyRecurringFinancialRecords(createManyRecurringFinancialRecordsRequestBodyDto)

Cria múltiplos lançamentos financeiros recorrentes.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateManyRecurringFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // CreateManyRecurringFinancialRecordsRequestBodyDto
    createManyRecurringFinancialRecordsRequestBodyDto: ...,
  } satisfies CreateManyRecurringFinancialRecordsRequest;

  try {
    const data = await api.createManyRecurringFinancialRecords(body);
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
| **createManyRecurringFinancialRecordsRequestBodyDto** | [CreateManyRecurringFinancialRecordsRequestBodyDto](CreateManyRecurringFinancialRecordsRequestBodyDto.md) |  | |

### Return type

[**Array&lt;RecurringFinancialRecordDto&gt;**](RecurringFinancialRecordDto.md)

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


## createRecurringFinancialRecord

> RecurringFinancialRecordDto createRecurringFinancialRecord(createRecurringFinancialRecordRequestBodyDto, populate)

Cria um novo lançamento financeiro recorrente.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateRecurringFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // CreateRecurringFinancialRecordRequestBodyDto
    createRecurringFinancialRecordRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateRecurringFinancialRecordRequest;

  try {
    const data = await api.createRecurringFinancialRecord(body);
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
| **createRecurringFinancialRecordRequestBodyDto** | [CreateRecurringFinancialRecordRequestBodyDto](CreateRecurringFinancialRecordRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**RecurringFinancialRecordDto**](RecurringFinancialRecordDto.md)

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


## findAllRecurringFinancialRecords

> RecurringFinancialRecordsPageDto findAllRecurringFinancialRecords(frequency, isActive, automaticCompletion, onlyBusinessDays, repetitionMonth, repetitionDay, tags, amountTo, amountFrom, subcategory, contact, firstOccurrenceDateTo, firstOccurrenceDateFrom, direction, sortOrder, sortBy, populate, textSearchTerm, pageSize, pageIndex)

Busca todos os lançamentos financeiros recorrentes.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllRecurringFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // 'WEEKLY' | 'MONTHLY' | 'YEARLY' | Frequência de repetição do lançamento. (optional)
    frequency: frequency_example,
    // boolean | Indica se o lançamento recorrente está ativo. (optional)
    isActive: true,
    // boolean | Indica se o lançamento será completado automaticamente. (optional)
    automaticCompletion: true,
    // boolean | Indica se o lançamento será apenas em dias úteis. (optional)
    onlyBusinessDays: true,
    // number | Mês de repetição do lançamento. (optional)
    repetitionMonth: 8.14,
    // number | Dia de repetição do lançamento. (optional)
    repetitionDay: 8.14,
    // Array<any> | IDs das tags. (optional)
    tags: ...,
    // string | Valor máximo do lançamento. (optional)
    amountTo: amountTo_example,
    // string | Valor mínimo do lançamento. (optional)
    amountFrom: amountFrom_example,
    // string | ID da subcategoria. (optional)
    subcategory: subcategory_example,
    // string | ID do contato. (optional)
    contact: contact_example,
    // Date | Data final da primeira ocorrência (formato ISO YYYY-MM-DD). (optional)
    firstOccurrenceDateTo: 2013-10-20,
    // Date | Data inicial da primeira ocorrência (formato ISO YYYY-MM-DD). (optional)
    firstOccurrenceDateFrom: 2013-10-20,
    // 'IN' | 'OUT' | Direção do lançamento (entrada/saída). (optional)
    direction: direction_example,
    // 'asc' | 'desc' | Ordem da ordenação. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'firstOccurrenceDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'frequency' | 'isActive' | 'createdAt' | Campo para ordenação. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | Termo para busca por descrição do lançamento. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllRecurringFinancialRecordsRequest;

  try {
    const data = await api.findAllRecurringFinancialRecords(body);
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
| **frequency** | `WEEKLY`, `MONTHLY`, `YEARLY` | Frequência de repetição do lançamento. | [Optional] [Defaults to `undefined`] [Enum: WEEKLY, MONTHLY, YEARLY] |
| **isActive** | `boolean` | Indica se o lançamento recorrente está ativo. | [Optional] [Defaults to `undefined`] |
| **automaticCompletion** | `boolean` | Indica se o lançamento será completado automaticamente. | [Optional] [Defaults to `undefined`] |
| **onlyBusinessDays** | `boolean` | Indica se o lançamento será apenas em dias úteis. | [Optional] [Defaults to `undefined`] |
| **repetitionMonth** | `number` | Mês de repetição do lançamento. | [Optional] [Defaults to `undefined`] |
| **repetitionDay** | `number` | Dia de repetição do lançamento. | [Optional] [Defaults to `undefined`] |
| **tags** | `Array<any>` | IDs das tags. | [Optional] |
| **amountTo** | `string` | Valor máximo do lançamento. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor mínimo do lançamento. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato. | [Optional] [Defaults to `undefined`] |
| **firstOccurrenceDateTo** | `Date` | Data final da primeira ocorrência (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **firstOccurrenceDateFrom** | `Date` | Data inicial da primeira ocorrência (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento (entrada/saída). | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `direction`, `firstOccurrenceDate`, `contact`, `description`, `subcategory`, `amount`, `frequency`, `isActive`, `createdAt` | Campo para ordenação. | [Optional] [Defaults to `undefined`] [Enum: direction, firstOccurrenceDate, contact, description, subcategory, amount, frequency, isActive, createdAt] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca por descrição do lançamento. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**RecurringFinancialRecordsPageDto**](RecurringFinancialRecordsPageDto.md)

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


## findByIdRecurringFinancialRecord

> RecurringFinancialRecordDto findByIdRecurringFinancialRecord(id, populate)

Busca um lançamento financeiro recorrente pelo ID.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdRecurringFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // string | ID do lançamento financeiro recorrente.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdRecurringFinancialRecordRequest;

  try {
    const data = await api.findByIdRecurringFinancialRecord(body);
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
| **id** | `string` | ID do lançamento financeiro recorrente. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**RecurringFinancialRecordDto**](RecurringFinancialRecordDto.md)

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


## partialUpdateRecurringFinancialRecord

> RecurringFinancialRecordDto partialUpdateRecurringFinancialRecord(id, partialUpdateRecurringFinancialRecordRequestBodyDto, populate)

Atualiza parcialmente um lançamento financeiro recorrente.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateRecurringFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // string | ID do lançamento financeiro recorrente.
    id: id_example,
    // PartialUpdateRecurringFinancialRecordRequestBodyDto
    partialUpdateRecurringFinancialRecordRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateRecurringFinancialRecordRequest;

  try {
    const data = await api.partialUpdateRecurringFinancialRecord(body);
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
| **id** | `string` | ID do lançamento financeiro recorrente. | [Defaults to `undefined`] |
| **partialUpdateRecurringFinancialRecordRequestBodyDto** | [PartialUpdateRecurringFinancialRecordRequestBodyDto](PartialUpdateRecurringFinancialRecordRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**RecurringFinancialRecordDto**](RecurringFinancialRecordDto.md)

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


## removeRecurringFinancialRecord

> removeRecurringFinancialRecord(id, removeRecurringFinancialRecordRequestBodyDto)

Remove um lançamento financeiro recorrente.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveRecurringFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // string | ID do lançamento financeiro recorrente.
    id: id_example,
    // RemoveRecurringFinancialRecordRequestBodyDto
    removeRecurringFinancialRecordRequestBodyDto: ...,
  } satisfies RemoveRecurringFinancialRecordRequest;

  try {
    const data = await api.removeRecurringFinancialRecord(body);
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
| **id** | `string` | ID do lançamento financeiro recorrente. | [Defaults to `undefined`] |
| **removeRecurringFinancialRecordRequestBodyDto** | [RemoveRecurringFinancialRecordRequestBodyDto](RemoveRecurringFinancialRecordRequestBodyDto.md) |  | |

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


## scheduleRecurringFinancialRecordsSeeding

> scheduleRecurringFinancialRecordsSeeding(scheduleRecurringFinancialRecordsSeedingRequestBodyDto)

Agenda o seeder de lançamentos financeiros recorrentes.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ScheduleRecurringFinancialRecordsSeedingRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // ScheduleRecurringFinancialRecordsSeedingRequestBodyDto
    scheduleRecurringFinancialRecordsSeedingRequestBodyDto: ...,
  } satisfies ScheduleRecurringFinancialRecordsSeedingRequest;

  try {
    const data = await api.scheduleRecurringFinancialRecordsSeeding(body);
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
| **scheduleRecurringFinancialRecordsSeedingRequestBodyDto** | [ScheduleRecurringFinancialRecordsSeedingRequestBodyDto](ScheduleRecurringFinancialRecordsSeedingRequestBodyDto.md) |  | |

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


## startRecurringFinancialRecordsSeeder

> startRecurringFinancialRecordsSeeder(seedRecurringFinancialRecordsRequestBodyDto)

Inicia o seeder de lançamentos financeiros recorrentes.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { StartRecurringFinancialRecordsSeederRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsApi();

  const body = {
    // SeedRecurringFinancialRecordsRequestBodyDto
    seedRecurringFinancialRecordsRequestBodyDto: ...,
  } satisfies StartRecurringFinancialRecordsSeederRequest;

  try {
    const data = await api.startRecurringFinancialRecordsSeeder(body);
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
| **seedRecurringFinancialRecordsRequestBodyDto** | [SeedRecurringFinancialRecordsRequestBodyDto](SeedRecurringFinancialRecordsRequestBodyDto.md) |  | |

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

