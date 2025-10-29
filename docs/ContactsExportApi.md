# ContactsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportContacts**](ContactsExportApi.md#exportcontacts) | **POST** /external/contacts/export | Solicita a exportação dos contatos. |



## exportContacts

> ExportContactsDto exportContacts(sortOrder, sortBy, considerNotIdentified, states, country, birthdayTo, birthdayFrom, origins, types, format)

Solicita a exportação dos contatos.

### Example

```ts
import {
  Configuration,
  ContactsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportContactsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação dos contatos. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'document' | 'email' | 'birthDate' | 'createdAt' | Campo para ordenação dos contatos. (optional)
    sortBy: sortBy_example,
    // boolean | Considerar ou não o contato não identificado. (optional)
    considerNotIdentified: true,
    // string | Estados a serem buscados. (optional)
    states: states_example,
    // string | País a serem buscados. (optional)
    country: country_example,
    // string | Data de nascimento final a serem buscadas. (optional)
    birthdayTo: birthdayTo_example,
    // string | Data de nascimento inicial a serem buscadas. (optional)
    birthdayFrom: birthdayFrom_example,
    // string | Origens de contato a serem buscadas. (optional)
    origins: origins_example,
    // string | Tipos de contato a serem buscados. (optional)
    types: types_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportContactsRequest;

  try {
    const data = await api.exportContacts(body);
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
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos contatos. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `document`, `email`, `birthDate`, `createdAt` | Campo para ordenação dos contatos. | [Optional] [Defaults to `undefined`] [Enum: name, document, email, birthDate, createdAt] |
| **considerNotIdentified** | `boolean` | Considerar ou não o contato não identificado. | [Optional] [Defaults to `true`] |
| **states** | `string` | Estados a serem buscados. | [Optional] [Defaults to `undefined`] |
| **country** | `string` | País a serem buscados. | [Optional] [Defaults to `undefined`] |
| **birthdayTo** | `string` | Data de nascimento final a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **birthdayFrom** | `string` | Data de nascimento inicial a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **origins** | `string` | Origens de contato a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **types** | `string` | Tipos de contato a serem buscados. | [Optional] [Defaults to `undefined`] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportContactsDto**](ExportContactsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The id of the pending resource job. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

