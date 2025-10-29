# InstallmentFinancialRecordsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInstallmentFinancialRecord**](InstallmentFinancialRecordsApi.md#createinstallmentfinancialrecord) | **POST** /external/installment-financial-records | Cria um novo lançamento financeiro parcelado. |
| [**findAllInstallmentFinancialRecords**](InstallmentFinancialRecordsApi.md#findallinstallmentfinancialrecords) | **GET** /external/installment-financial-records | Busca todos os lançamentos financeiros parcelados. |
| [**findByIdInstallmentFinancialRecord**](InstallmentFinancialRecordsApi.md#findbyidinstallmentfinancialrecord) | **GET** /external/installment-financial-records/{id} | Busca um lançamento financeiro parcelado pelo identificador. |
| [**partialUpdateInstallmentFinancialRecord**](InstallmentFinancialRecordsApi.md#partialupdateinstallmentfinancialrecord) | **PATCH** /external/installment-financial-records/{id} | Atualiza parcialmente um lançamento financeiro parcelado. |
| [**removeInstallmentFinancialRecord**](InstallmentFinancialRecordsApi.md#removeinstallmentfinancialrecord) | **DELETE** /external/installment-financial-records/{id} | Remove um lançamento financeiro parcelado. |



## createInstallmentFinancialRecord

> InstallmentFinancialRecordDto createInstallmentFinancialRecord(createInstallmentFinancialRecordRequestBodyDto, populate)

Cria um novo lançamento financeiro parcelado.

### Example

```ts
import {
  Configuration,
  InstallmentFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateInstallmentFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new InstallmentFinancialRecordsApi();

  const body = {
    // CreateInstallmentFinancialRecordRequestBodyDto
    createInstallmentFinancialRecordRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateInstallmentFinancialRecordRequest;

  try {
    const data = await api.createInstallmentFinancialRecord(body);
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
| **createInstallmentFinancialRecordRequestBodyDto** | [CreateInstallmentFinancialRecordRequestBodyDto](CreateInstallmentFinancialRecordRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**InstallmentFinancialRecordDto**](InstallmentFinancialRecordDto.md)

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


## findAllInstallmentFinancialRecords

> InstallmentFinancialRecordsPageDto findAllInstallmentFinancialRecords(completed, frequency, competenceDateTo, competenceDateFrom, tags, subcategory, contact, firstInstallmentDateTo, firstInstallmentDateFrom, direction, sortOrder, sortBy, populate, textSearchTerm, pageSize, pageIndex)

Busca todos os lançamentos financeiros parcelados.

### Example

```ts
import {
  Configuration,
  InstallmentFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllInstallmentFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new InstallmentFinancialRecordsApi();

  const body = {
    // boolean | Indica se o lançamento parcelado está completo (todas as parcelas pagas/recebidas). (optional)
    completed: true,
    // 'MONTHLY' | 'WEEKLY' | 'YEARLY' | Frequência do lançamento parcelado. (optional)
    frequency: frequency_example,
    // Date | Data de competência final (formato ISO YYYY-MM-DD). (optional)
    competenceDateTo: 2013-10-20,
    // Date | Data de competência inicial (formato ISO YYYY-MM-DD). (optional)
    competenceDateFrom: 2013-10-20,
    // Array<any> | Identificadores das tags. (optional)
    tags: ...,
    // string | Identificador da subcategoria. (optional)
    subcategory: subcategory_example,
    // string | Identificador do contato. (optional)
    contact: contact_example,
    // Date | Data final da primeira parcela (formato ISO YYYY-MM-DD). (optional)
    firstInstallmentDateTo: 2013-10-20,
    // Date | Data inicial da primeira parcela (formato ISO YYYY-MM-DD). (optional)
    firstInstallmentDateFrom: 2013-10-20,
    // 'IN' | 'OUT' | Direção do lançamento (entrada/saída). (optional)
    direction: direction_example,
    // 'asc' | 'desc' | Ordem da ordenação. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'firstInstallmentDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'tags' | 'competenceDate' | 'frequency' | 'createdAt' | Campo para ordenação. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | Termo para busca por descrição do lançamento parcelado. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllInstallmentFinancialRecordsRequest;

  try {
    const data = await api.findAllInstallmentFinancialRecords(body);
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
| **completed** | `boolean` | Indica se o lançamento parcelado está completo (todas as parcelas pagas/recebidas). | [Optional] [Defaults to `undefined`] |
| **frequency** | `MONTHLY`, `WEEKLY`, `YEARLY` | Frequência do lançamento parcelado. | [Optional] [Defaults to `undefined`] [Enum: MONTHLY, WEEKLY, YEARLY] |
| **competenceDateTo** | `Date` | Data de competência final (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `Date` | Data de competência inicial (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **tags** | `Array<any>` | Identificadores das tags. | [Optional] |
| **subcategory** | `string` | Identificador da subcategoria. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Identificador do contato. | [Optional] [Defaults to `undefined`] |
| **firstInstallmentDateTo** | `Date` | Data final da primeira parcela (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **firstInstallmentDateFrom** | `Date` | Data inicial da primeira parcela (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento (entrada/saída). | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `direction`, `firstInstallmentDate`, `contact`, `description`, `subcategory`, `amount`, `tags`, `competenceDate`, `frequency`, `createdAt` | Campo para ordenação. | [Optional] [Defaults to `undefined`] [Enum: direction, firstInstallmentDate, contact, description, subcategory, amount, tags, competenceDate, frequency, createdAt] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca por descrição do lançamento parcelado. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**InstallmentFinancialRecordsPageDto**](InstallmentFinancialRecordsPageDto.md)

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


## findByIdInstallmentFinancialRecord

> InstallmentFinancialRecordDto findByIdInstallmentFinancialRecord(id, populate)

Busca um lançamento financeiro parcelado pelo identificador.

### Example

```ts
import {
  Configuration,
  InstallmentFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdInstallmentFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new InstallmentFinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro parcelado.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdInstallmentFinancialRecordRequest;

  try {
    const data = await api.findByIdInstallmentFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro parcelado. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**InstallmentFinancialRecordDto**](InstallmentFinancialRecordDto.md)

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


## partialUpdateInstallmentFinancialRecord

> InstallmentFinancialRecordDto partialUpdateInstallmentFinancialRecord(id, partialUpdateInstallmentFinancialRecordRequestBodyDto, populate)

Atualiza parcialmente um lançamento financeiro parcelado.

### Example

```ts
import {
  Configuration,
  InstallmentFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateInstallmentFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new InstallmentFinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro parcelado.
    id: id_example,
    // PartialUpdateInstallmentFinancialRecordRequestBodyDto
    partialUpdateInstallmentFinancialRecordRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateInstallmentFinancialRecordRequest;

  try {
    const data = await api.partialUpdateInstallmentFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro parcelado. | [Defaults to `undefined`] |
| **partialUpdateInstallmentFinancialRecordRequestBodyDto** | [PartialUpdateInstallmentFinancialRecordRequestBodyDto](PartialUpdateInstallmentFinancialRecordRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**InstallmentFinancialRecordDto**](InstallmentFinancialRecordDto.md)

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


## removeInstallmentFinancialRecord

> removeInstallmentFinancialRecord(id, removeInstallmentFinancialRecordRequestBodyDto)

Remove um lançamento financeiro parcelado.

Remove um lançamento financeiro parcelado. Opcionalmente, pode remover todos os lançamentos financeiros não concluídos relacionados através do query parameter \&quot;removeNotCompletedFinancialRecords&#x3D;true\&quot;.

### Example

```ts
import {
  Configuration,
  InstallmentFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveInstallmentFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new InstallmentFinancialRecordsApi();

  const body = {
    // string | Identificador do lançamento financeiro parcelado.
    id: id_example,
    // RemoveInstallmentFinancialRecordRequestBodyDto
    removeInstallmentFinancialRecordRequestBodyDto: ...,
  } satisfies RemoveInstallmentFinancialRecordRequest;

  try {
    const data = await api.removeInstallmentFinancialRecord(body);
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
| **id** | `string` | Identificador do lançamento financeiro parcelado. | [Defaults to `undefined`] |
| **removeInstallmentFinancialRecordRequestBodyDto** | [RemoveInstallmentFinancialRecordRequestBodyDto](RemoveInstallmentFinancialRecordRequestBodyDto.md) |  | |

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

