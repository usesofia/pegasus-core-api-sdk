# BankInstitutionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findAllBankInstitutions**](BankInstitutionsApi.md#findallbankinstitutions) | **GET** /external/bank-institutions | Get all bank institutions |



## findAllBankInstitutions

> Array&lt;BankInstitutionEntity&gt; findAllBankInstitutions()

Get all bank institutions

### Example

```ts
import {
  Configuration,
  BankInstitutionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllBankInstitutionsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankInstitutionsApi();

  try {
    const data = await api.findAllBankInstitutions();
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

[**Array&lt;BankInstitutionEntity&gt;**](BankInstitutionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of bank institutions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

