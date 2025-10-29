# ProspectInstallmentFinancialRecordsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**prospectInstallmentFinancialRecord**](ProspectInstallmentFinancialRecordsApi.md#prospectinstallmentfinancialrecord) | **POST** /external/installment-financial-records/prospect | Simula os lançamentos únicos que serão criados para um lançamento financeiro parcelado. |



## prospectInstallmentFinancialRecord

> Array&lt;InstallmentDefinitionDto&gt; prospectInstallmentFinancialRecord(prospectInstallmentFinancialRecordRequestBodyDto)

Simula os lançamentos únicos que serão criados para um lançamento financeiro parcelado.

### Example

```ts
import {
  Configuration,
  ProspectInstallmentFinancialRecordsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProspectInstallmentFinancialRecordRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ProspectInstallmentFinancialRecordsApi();

  const body = {
    // ProspectInstallmentFinancialRecordRequestBodyDto
    prospectInstallmentFinancialRecordRequestBodyDto: ...,
  } satisfies ProspectInstallmentFinancialRecordRequest;

  try {
    const data = await api.prospectInstallmentFinancialRecord(body);
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
| **prospectInstallmentFinancialRecordRequestBodyDto** | [ProspectInstallmentFinancialRecordRequestBodyDto](ProspectInstallmentFinancialRecordRequestBodyDto.md) |  | |

### Return type

[**Array&lt;InstallmentDefinitionDto&gt;**](InstallmentDefinitionDto.md)

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

