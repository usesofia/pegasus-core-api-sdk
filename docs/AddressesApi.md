# AddressesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findAllCountries**](AddressesApi.md#findallcountries) | **GET** /external/addresses/countries | Busca todos os países. |
| [**findStatesByCountry**](AddressesApi.md#findstatesbycountry) | **GET** /external/addresses/countries/{countryId}/states | Busca todos os estados de um país. |



## findAllCountries

> Array&lt;CountryItemEntity&gt; findAllCountries()

Busca todos os países.

### Example

```ts
import {
  Configuration,
  AddressesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllCountriesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new AddressesApi();

  try {
    const data = await api.findAllCountries();
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

[**Array&lt;CountryItemEntity&gt;**](CountryItemEntity.md)

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


## findStatesByCountry

> Array&lt;CountryStateItemEntity&gt; findStatesByCountry(countryId)

Busca todos os estados de um país.

### Example

```ts
import {
  Configuration,
  AddressesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindStatesByCountryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new AddressesApi();

  const body = {
    // string | Identificador do país.
    countryId: countryId_example,
  } satisfies FindStatesByCountryRequest;

  try {
    const data = await api.findStatesByCountry(body);
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
| **countryId** | `string` | Identificador do país. | [Defaults to `undefined`] |

### Return type

[**Array&lt;CountryStateItemEntity&gt;**](CountryStateItemEntity.md)

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

