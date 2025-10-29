# FinancialRecordRadarItemsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#createfinancialrecordradaritem) | **POST** /external/financial-records/radar/items | Cria um novo registro de radar |
| [**findAllFinancialRecordRadarItems**](FinancialRecordRadarItemsApi.md#findallfinancialrecordradaritems) | **GET** /external/financial-records/radar/items | Busca todos os registros do radar. |
| [**findByIdFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#findbyidfinancialrecordradaritem) | **GET** /external/financial-records/radar/items/{radarItemId} | Busca um registro de radar pelo identificador. |
| [**getTagsForFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#gettagsforfinancialrecordradaritem) | **GET** /external/financial-records/radar/items/{radarItemId}/tags | Obtém os tags para um registro de radar. |
| [**linkFinancialRecordsToFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#linkfinancialrecordstofinancialrecordradaritem) | **POST** /external/financial-records/radar/items/{radarItemId}/links | Vincula registros financeiros a um registro de radar |
| [**partialUpdateFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#partialupdatefinancialrecordradaritem) | **PATCH** /external/financial-records/radar/items/{radarItemId} | Atualiza parcialmente um registro de radar |
| [**previewBulkCreateFile**](FinancialRecordRadarItemsApi.md#previewbulkcreatefile) | **GET** /external/financial-records/radar/items/{radarItemId}/preview-bulk-create-file | Obtém o preview de um arquivo .csv para criação em lote. |
| [**systemFindAllFinancialRecordRadarItems**](FinancialRecordRadarItemsApi.md#systemfindallfinancialrecordradaritems) | **GET** /internal/organizations/{organizationId}/financial-records/radar/items | Busca todos os registros do radar (sistema). |
| [**systemFindByIdFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#systemfindbyidfinancialrecordradaritem) | **GET** /internal/organizations/{organizationId}/financial-records/radar/items/{radarItemId} | Busca um registro de radar pelo identificador. |
| [**unlinkFinancialRecordsFromFinancialRecordRadarItem**](FinancialRecordRadarItemsApi.md#unlinkfinancialrecordsfromfinancialrecordradaritem) | **POST** /external/financial-records/radar/items/{radarItemId}/unlink | Desvincula registros financeiros de um registro de radar |



## createFinancialRecordRadarItem

> CreatedFinancialRecordRadarItemResultEntity createFinancialRecordRadarItem(createFinancialRecordRadarItemRequestBodyDto)

Cria um novo registro de radar

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // CreateFinancialRecordRadarItemRequestBodyDto
    createFinancialRecordRadarItemRequestBodyDto: ...,
  } satisfies CreateFinancialRecordRadarItemRequest;

  try {
    const data = await api.createFinancialRecordRadarItem(body);
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
| **createFinancialRecordRadarItemRequestBodyDto** | [CreateFinancialRecordRadarItemRequestBodyDto](CreateFinancialRecordRadarItemRequestBodyDto.md) |  | |

### Return type

[**CreatedFinancialRecordRadarItemResultEntity**](CreatedFinancialRecordRadarItemResultEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Registro de radar criado com sucesso |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllFinancialRecordRadarItems

> FinancialRecordRadarItemsPageDto findAllFinancialRecordRadarItems(sortOrder, sortBy, hasAutoExecute, populate, nature, origin, status, folder, pageSize, pageIndex)

Busca todos os registros do radar.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllFinancialRecordRadarItemsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Ordem de ordenação. (optional)
    sortOrder: sortOrder_example,
    // string | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // boolean | Se possui auto-execute. (optional)
    hasAutoExecute: true,
    // string | População do registro. (optional)
    populate: populate_example,
    // 'WHATSAPP_MESSAGE' | 'EMAIL_MESSAGE' | Natureza do registro. (optional)
    nature: nature_example,
    // 'WHATSAPP_AGENT' | 'EMAIL_FORWARDING_INTEGRATION' | Origem do registro. (optional)
    origin: origin_example,
    // 'PENDING' | 'LINKED' | 'ARCHIVED' | Status do registro. (optional)
    status: status_example,
    // 'MAIN' | 'SPAM' | Pasta do registro. (optional)
    folder: folder_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllFinancialRecordRadarItemsRequest;

  try {
    const data = await api.findAllFinancialRecordRadarItems(body);
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
| **sortOrder** | `string` | Ordem de ordenação. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Campo de ordenação. | [Optional] [Defaults to `undefined`] |
| **hasAutoExecute** | `boolean` | Se possui auto-execute. | [Optional] [Defaults to `undefined`] |
| **populate** | `string` | População do registro. | [Optional] [Defaults to `undefined`] |
| **nature** | `WHATSAPP_MESSAGE`, `EMAIL_MESSAGE` | Natureza do registro. | [Optional] [Defaults to `undefined`] [Enum: WHATSAPP_MESSAGE, EMAIL_MESSAGE] |
| **origin** | `WHATSAPP_AGENT`, `EMAIL_FORWARDING_INTEGRATION` | Origem do registro. | [Optional] [Defaults to `undefined`] [Enum: WHATSAPP_AGENT, EMAIL_FORWARDING_INTEGRATION] |
| **status** | `PENDING`, `LINKED`, `ARCHIVED` | Status do registro. | [Optional] [Defaults to `undefined`] [Enum: PENDING, LINKED, ARCHIVED] |
| **folder** | `MAIN`, `SPAM` | Pasta do registro. | [Optional] [Defaults to `undefined`] [Enum: MAIN, SPAM] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordRadarItemsPageDto**](FinancialRecordRadarItemsPageDto.md)

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


## findByIdFinancialRecordRadarItem

> FinancialRecordRadarItemEntity findByIdFinancialRecordRadarItem(radarItemId, populate)

Busca um registro de radar pelo identificador.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
    // string | População do registro. (optional)
    populate: populate_example,
  } satisfies FindByIdFinancialRecordRadarItemRequest;

  try {
    const data = await api.findByIdFinancialRecordRadarItem(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |
| **populate** | `string` | População do registro. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordRadarItemEntity**](FinancialRecordRadarItemEntity.md)

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


## getTagsForFinancialRecordRadarItem

> Array&lt;FinancialRecordRadarItemTagEntity&gt; getTagsForFinancialRecordRadarItem(radarItemId)

Obtém os tags para um registro de radar.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { GetTagsForFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
  } satisfies GetTagsForFinancialRecordRadarItemRequest;

  try {
    const data = await api.getTagsForFinancialRecordRadarItem(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |

### Return type

[**Array&lt;FinancialRecordRadarItemTagEntity&gt;**](FinancialRecordRadarItemTagEntity.md)

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


## linkFinancialRecordsToFinancialRecordRadarItem

> FinancialRecordRadarItemEntity linkFinancialRecordsToFinancialRecordRadarItem(radarItemId, linkFinancialRecordsRequestBodyDto)

Vincula registros financeiros a um registro de radar

Adiciona vínculos entre um registro de radar e múltiplos registros financeiros, atualizando ambos os lados da relação.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { LinkFinancialRecordsToFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
    // LinkFinancialRecordsRequestBodyDto
    linkFinancialRecordsRequestBodyDto: ...,
  } satisfies LinkFinancialRecordsToFinancialRecordRadarItemRequest;

  try {
    const data = await api.linkFinancialRecordsToFinancialRecordRadarItem(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |
| **linkFinancialRecordsRequestBodyDto** | [LinkFinancialRecordsRequestBodyDto](LinkFinancialRecordsRequestBodyDto.md) |  | |

### Return type

[**FinancialRecordRadarItemEntity**](FinancialRecordRadarItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Registro de radar atualizado com os vínculos |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateFinancialRecordRadarItem

> FinancialRecordRadarItemEntity partialUpdateFinancialRecordRadarItem(radarItemId, partialUpdateFinancialRecordRadarItemRequestBodyDto)

Atualiza parcialmente um registro de radar

Atualiza parcialmente um registro de radar existente.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
    // PartialUpdateFinancialRecordRadarItemRequestBodyDto
    partialUpdateFinancialRecordRadarItemRequestBodyDto: ...,
  } satisfies PartialUpdateFinancialRecordRadarItemRequest;

  try {
    const data = await api.partialUpdateFinancialRecordRadarItem(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |
| **partialUpdateFinancialRecordRadarItemRequestBodyDto** | [PartialUpdateFinancialRecordRadarItemRequestBodyDto](PartialUpdateFinancialRecordRadarItemRequestBodyDto.md) |  | |

### Return type

[**FinancialRecordRadarItemEntity**](FinancialRecordRadarItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Registro de radar atualizado com sucesso |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewBulkCreateFile

> FinancialRecordsBulkCreateFilePreviewEntity previewBulkCreateFile(radarItemId, limit)

Obtém o preview de um arquivo .csv para criação em lote.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PreviewBulkCreateFileRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
    // number | Limite de registros a serem retornados. (optional)
    limit: 8.14,
  } satisfies PreviewBulkCreateFileRequest;

  try {
    const data = await api.previewBulkCreateFile(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |
| **limit** | `number` | Limite de registros a serem retornados. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordsBulkCreateFilePreviewEntity**](FinancialRecordsBulkCreateFilePreviewEntity.md)

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


## systemFindAllFinancialRecordRadarItems

> FinancialRecordRadarItemsPageDto systemFindAllFinancialRecordRadarItems(organizationId, sortOrder, sortBy, hasAutoExecute, populate, nature, origin, status, folder, pageSize, pageIndex)

Busca todos os registros do radar (sistema).

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllFinancialRecordRadarItemsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador da organização
    organizationId: organizationId_example,
    // string | Ordem de ordenação. (optional)
    sortOrder: sortOrder_example,
    // string | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // boolean | Se possui auto-execute. (optional)
    hasAutoExecute: true,
    // string | População do registro. (optional)
    populate: populate_example,
    // 'WHATSAPP_MESSAGE' | 'EMAIL_MESSAGE' | Natureza do registro. (optional)
    nature: nature_example,
    // 'WHATSAPP_AGENT' | 'EMAIL_FORWARDING_INTEGRATION' | Origem do registro. (optional)
    origin: origin_example,
    // 'PENDING' | 'LINKED' | 'ARCHIVED' | Status do registro. (optional)
    status: status_example,
    // 'MAIN' | 'SPAM' | Pasta do registro. (optional)
    folder: folder_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllFinancialRecordRadarItemsRequest;

  try {
    const data = await api.systemFindAllFinancialRecordRadarItems(body);
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
| **sortOrder** | `string` | Ordem de ordenação. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `string` | Campo de ordenação. | [Optional] [Defaults to `undefined`] |
| **hasAutoExecute** | `boolean` | Se possui auto-execute. | [Optional] [Defaults to `undefined`] |
| **populate** | `string` | População do registro. | [Optional] [Defaults to `undefined`] |
| **nature** | `WHATSAPP_MESSAGE`, `EMAIL_MESSAGE` | Natureza do registro. | [Optional] [Defaults to `undefined`] [Enum: WHATSAPP_MESSAGE, EMAIL_MESSAGE] |
| **origin** | `WHATSAPP_AGENT`, `EMAIL_FORWARDING_INTEGRATION` | Origem do registro. | [Optional] [Defaults to `undefined`] [Enum: WHATSAPP_AGENT, EMAIL_FORWARDING_INTEGRATION] |
| **status** | `PENDING`, `LINKED`, `ARCHIVED` | Status do registro. | [Optional] [Defaults to `undefined`] [Enum: PENDING, LINKED, ARCHIVED] |
| **folder** | `MAIN`, `SPAM` | Pasta do registro. | [Optional] [Defaults to `undefined`] [Enum: MAIN, SPAM] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordRadarItemsPageDto**](FinancialRecordRadarItemsPageDto.md)

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


## systemFindByIdFinancialRecordRadarItem

> FinancialRecordRadarItemEntity systemFindByIdFinancialRecordRadarItem(organizationId, radarItemId, populate)

Busca um registro de radar pelo identificador.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindByIdFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador da organização
    organizationId: organizationId_example,
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
    // string | População do registro. (optional)
    populate: populate_example,
  } satisfies SystemFindByIdFinancialRecordRadarItemRequest;

  try {
    const data = await api.systemFindByIdFinancialRecordRadarItem(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |
| **populate** | `string` | População do registro. | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialRecordRadarItemEntity**](FinancialRecordRadarItemEntity.md)

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


## unlinkFinancialRecordsFromFinancialRecordRadarItem

> FinancialRecordRadarItemEntity unlinkFinancialRecordsFromFinancialRecordRadarItem(radarItemId, unlinkFinancialRecordsRequestBodyDto)

Desvincula registros financeiros de um registro de radar

Remove vínculos entre um registro de radar e registros financeiros, atualizando ambos os lados da relação.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { UnlinkFinancialRecordsFromFinancialRecordRadarItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsApi();

  const body = {
    // string | Identificador do registro de radar
    radarItemId: radarItemId_example,
    // UnlinkFinancialRecordsRequestBodyDto
    unlinkFinancialRecordsRequestBodyDto: ...,
  } satisfies UnlinkFinancialRecordsFromFinancialRecordRadarItemRequest;

  try {
    const data = await api.unlinkFinancialRecordsFromFinancialRecordRadarItem(body);
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
| **radarItemId** | `string` | Identificador do registro de radar | [Defaults to `undefined`] |
| **unlinkFinancialRecordsRequestBodyDto** | [UnlinkFinancialRecordsRequestBodyDto](UnlinkFinancialRecordsRequestBodyDto.md) |  | |

### Return type

[**FinancialRecordRadarItemEntity**](FinancialRecordRadarItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Registro de radar atualizado após a desvinculação |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

