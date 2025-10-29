# FinancialRecordRadarItemsSeederApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**seedFinancialRecordRadarItems**](FinancialRecordRadarItemsSeederApi.md#seedfinancialrecordradaritems) | **POST** /external/financial-records/radar/items/seeder | Cria dados de teste para o radar de lançamentos financeiros. |



## seedFinancialRecordRadarItems

> seedFinancialRecordRadarItems()

Cria dados de teste para o radar de lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemsSeederApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SeedFinancialRecordRadarItemsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemsSeederApi();

  try {
    const data = await api.seedFinancialRecordRadarItems();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **204** | Dados de teste criados com sucesso. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

