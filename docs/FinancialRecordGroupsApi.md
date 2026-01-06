# FinancialRecordGroupsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFinancialRecordGroup**](FinancialRecordGroupsApi.md#createfinancialrecordgroup) | **POST** /external/financial-record-groups | Cria um grupo de lançamentos financeiros. |
| [**findFinancialRecordGroupsByFinancialRecord**](FinancialRecordGroupsApi.md#findfinancialrecordgroupsbyfinancialrecord) | **GET** /external/financial-record-groups/by-financial-record/{financialRecordId} | Busca grupos de lançamentos financeiros pelo ID do lançamento. |
| [**removeFinancialRecordGroup**](FinancialRecordGroupsApi.md#removefinancialrecordgroup) | **DELETE** /external/financial-record-groups/{financialRecordGroupId} | Remove um grupo de lançamentos financeiros. |



## createFinancialRecordGroup

> FinancialRecordGroupDto createFinancialRecordGroup(createFinancialRecordGroupRequestBodyDto)

Cria um grupo de lançamentos financeiros.

Cria um grupo vinculando dois lançamentos financeiros (um de entrada e outro de saída) após validar todas as condições necessárias.

### Example

```ts
import {
  Configuration,
  FinancialRecordGroupsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateFinancialRecordGroupRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordGroupsApi();

  const body = {
    // CreateFinancialRecordGroupRequestBodyDto | Dados para criação do grupo de lançamentos financeiros.
    createFinancialRecordGroupRequestBodyDto: ...,
  } satisfies CreateFinancialRecordGroupRequest;

  try {
    const data = await api.createFinancialRecordGroup(body);
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
| **createFinancialRecordGroupRequestBodyDto** | [CreateFinancialRecordGroupRequestBodyDto](CreateFinancialRecordGroupRequestBodyDto.md) | Dados para criação do grupo de lançamentos financeiros. | |

### Return type

[**FinancialRecordGroupDto**](FinancialRecordGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Grupo criado com sucesso. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findFinancialRecordGroupsByFinancialRecord

> Array&lt;FinancialRecordGroupDto&gt; findFinancialRecordGroupsByFinancialRecord(financialRecordId)

Busca grupos de lançamentos financeiros pelo ID do lançamento.

### Example

```ts
import {
  Configuration,
  FinancialRecordGroupsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindFinancialRecordGroupsByFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordGroupsApi();

  const body = {
    // string | Identificador do lançamento financeiro.
    financialRecordId: financialRecordId_example,
  } satisfies FindFinancialRecordGroupsByFinancialRecordRequest;

  try {
    const data = await api.findFinancialRecordGroupsByFinancialRecord(body);
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
| **financialRecordId** | `string` | Identificador do lançamento financeiro. | [Defaults to `undefined`] |

### Return type

[**Array&lt;FinancialRecordGroupDto&gt;**](FinancialRecordGroupDto.md)

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


## removeFinancialRecordGroup

> removeFinancialRecordGroup(financialRecordGroupId)

Remove um grupo de lançamentos financeiros.

Remove apenas o agrupamento, mantendo os lançamentos financeiros originais.

### Example

```ts
import {
  Configuration,
  FinancialRecordGroupsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveFinancialRecordGroupRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordGroupsApi();

  const body = {
    // string | Identificador do grupo de lançamentos financeiros.
    financialRecordGroupId: financialRecordGroupId_example,
  } satisfies RemoveFinancialRecordGroupRequest;

  try {
    const data = await api.removeFinancialRecordGroup(body);
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
| **financialRecordGroupId** | `string` | Identificador do grupo de lançamentos financeiros. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Grupo removido com sucesso. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

