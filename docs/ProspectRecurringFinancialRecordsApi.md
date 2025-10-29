# ProspectRecurringFinancialRecordsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**prospectRecurringFinancialRecord**](ProspectRecurringFinancialRecordsApi.md#prospectrecurringfinancialrecord) | **POST** /external/recurring-financial-records/prospect | Simula os lançamentos únicos que serão criados para um lançamento financeiro recorrente. |



## prospectRecurringFinancialRecord

> Array&lt;ProspectFinancialRecordDto&gt; prospectRecurringFinancialRecord(prospectRecurringFinancialRecordRequestBodyDto)

Simula os lançamentos únicos que serão criados para um lançamento financeiro recorrente.

### Example

```ts
import {
  Configuration,
  ProspectRecurringFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProspectRecurringFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ProspectRecurringFinancialRecordsApi();

  const body = {
    // ProspectRecurringFinancialRecordRequestBodyDto
    prospectRecurringFinancialRecordRequestBodyDto: ...,
  } satisfies ProspectRecurringFinancialRecordRequest;

  try {
    const data = await api.prospectRecurringFinancialRecord(body);
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
| **prospectRecurringFinancialRecordRequestBodyDto** | [ProspectRecurringFinancialRecordRequestBodyDto](ProspectRecurringFinancialRecordRequestBodyDto.md) |  | |

### Return type

[**Array&lt;ProspectFinancialRecordDto&gt;**](ProspectFinancialRecordDto.md)

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

