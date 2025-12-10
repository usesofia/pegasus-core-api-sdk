# FinancialRecordGroupsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findFinancialRecordGroupsByFinancialRecord**](FinancialRecordGroupsApi.md#findfinancialrecordgroupsbyfinancialrecord) | **GET** /external/financial-record-groups/by-financial-record/{financialRecordId} | Busca grupos de lançamentos financeiros pelo ID do lançamento. |



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

