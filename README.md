# @usesofia/pegasus-core-api-sdk@3.0.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @usesofia/pegasus-core-api-sdk --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AddressesApi* | [**findAllCountries**](docs/AddressesApi.md#findallcountries) | **GET** /external/addresses/countries | Busca todos os países.
*AddressesApi* | [**findStatesByCountry**](docs/AddressesApi.md#findstatesbycountry) | **GET** /external/addresses/countries/{countryId}/states | Busca todos os estados de um país.
*BankAccountsApi* | [**createBankAccount**](docs/BankAccountsApi.md#createbankaccount) | **POST** /external/bank-accounts | Cria uma nova conta bancária.
*BankAccountsApi* | [**findAllBankAccountTypes**](docs/BankAccountsApi.md#findallbankaccounttypes) | **GET** /external/bank-accounts/types | Busca todos os tipos de conta bancária.
*BankAccountsApi* | [**findAllBankAccounts**](docs/BankAccountsApi.md#findallbankaccounts) | **GET** /external/bank-accounts | Busca todas as contas bancárias.
*BankAccountsApi* | [**findAllByPluggyItem**](docs/BankAccountsApi.md#findallbypluggyitem) | **GET** /internal/bank-accounts/pluggy/{itemId} | Busca contas bancárias pelo identificador do item do Pluggy.
*BankAccountsApi* | [**findByIdBankAccount**](docs/BankAccountsApi.md#findbyidbankaccount) | **GET** /external/bank-accounts/{id} | Busca uma conta bancária pelo identificador.
*BankAccountsApi* | [**partialUpdateBankAccount**](docs/BankAccountsApi.md#partialupdatebankaccount) | **PATCH** /external/bank-accounts/{id} | Atualiza parcialmente uma conta bancária.
*BankAccountsApi* | [**removeBankAccount**](docs/BankAccountsApi.md#removebankaccount) | **DELETE** /external/bank-accounts/{id} | Remove uma conta bancária.
*BankAccountsApi* | [**systemFindAllBankAccounts**](docs/BankAccountsApi.md#systemfindallbankaccounts) | **GET** /internal/bank-accounts | Busca todas as contas bancárias.
*BankAccountsApi* | [**systemFindByIdBankAccount**](docs/BankAccountsApi.md#systemfindbyidbankaccount) | **GET** /internal/bank-accounts/{id} | Busca uma conta bancária pelo identificador.
*BankAccountsExportApi* | [**exportBankAccounts**](docs/BankAccountsExportApi.md#exportbankaccounts) | **POST** /external/bank-accounts/export | Solicita a exportação das contas bancárias.
*BankInstitutionsApi* | [**findAllBankInstitutions**](docs/BankInstitutionsApi.md#findallbankinstitutions) | **GET** /external/bank-institutions | Get all bank institutions
*BankTransactionsApi* | [**createOrUpdateBankTransaction**](docs/BankTransactionsApi.md#createorupdatebanktransaction) | **PUT** /internal/bank-transactions | Cria ou atualiza uma movimentação financeira.
*BankTransactionsApi* | [**createOrUpdateBankTransactionBestSuggestedAction**](docs/BankTransactionsApi.md#createorupdatebanktransactionbestsuggestedaction) | **PUT** /external/bank-transactions/{bankTransactionId}/best-suggested-action | Cria ou atualiza uma sugestão de melhor ação para uma transação bancária.
*BankTransactionsApi* | [**dispatchOfxImport**](docs/BankTransactionsApi.md#dispatchofximport) | **POST** /external/bank-transactions/ofx | Dispara a importação assíncrona de um arquivo OFX.
*BankTransactionsApi* | [**findAiSuggestionsByFinancialRecordId**](docs/BankTransactionsApi.md#findaisuggestionsbyfinancialrecordid) | **GET** /external/financial-records/{financialRecordId}/ai-suggestions | Busca sugestões de AI por ID do lançamento financeiro.
*BankTransactionsApi* | [**findAllBankTransactions**](docs/BankTransactionsApi.md#findallbanktransactions) | **GET** /external/bank-transactions | Busca todas as movimentações financeiras.
*BankTransactionsApi* | [**findAllOfxImportJobRequests**](docs/BankTransactionsApi.md#findallofximportjobrequests) | **GET** /external/bank-transactions/ofx/job-requests | Lista todas as solicitações de importação de arquivos OFX com suas execuções.
*BankTransactionsApi* | [**findBankTransactionById**](docs/BankTransactionsApi.md#findbanktransactionbyid) | **GET** /external/bank-transactions/{id} | Busca uma movimentação financeira por ID.
*BankTransactionsApi* | [**partialUpdateBankTransaction**](docs/BankTransactionsApi.md#partialupdatebanktransaction) | **PATCH** /external/bank-transactions/{id} | Atualiza parcialmente uma movimentação financeira.
*BankTransactionsApi* | [**processBankTransactionsCreateOrUpdateBestSuggestionAction**](docs/BankTransactionsApi.md#processbanktransactionscreateorupdatebestsuggestionaction) | **POST** /internal/queues/bank-transactions-create-or-update-best-suggestion-action | Processa a obtenção de sugestões de melhor ação para transações bancárias via AI.
*BankTransactionsApi* | [**processBulkBankTransactionsOperation**](docs/BankTransactionsApi.md#processbulkbanktransactionsoperation) | **POST** /internal/queues/bulk-bank-transactions | Processa uma operação em lote para transações bancárias.
*BankTransactionsApi* | [**processOfxImport**](docs/BankTransactionsApi.md#processofximport) | **POST** /internal/queues/ofx-import | Processa a importação assíncrona de um arquivo OFX.
*BankTransactionsApi* | [**reconcileBankTransaction**](docs/BankTransactionsApi.md#reconcilebanktransaction) | **POST** /external/bank-transactions/{bankTransactionId}/reconcile | Reconcilia uma transação bancária com múltiplos lançamentos financeiros.
*BankTransactionsApi* | [**scheduleBulkBankTransactionsOperation**](docs/BankTransactionsApi.md#schedulebulkbanktransactionsoperation) | **POST** /external/bank-transactions/bulk-operations | Agenda uma operação em lote para transações bancárias.
*BankTransactionsApi* | [**shouldAiSuggestAction**](docs/BankTransactionsApi.md#shouldaisuggestaction) | **POST** /internal/bank-transactions/should-ai-suggest-action | Verifica se a AI deve sugerir uma ação para uma transação bancária.
*BankTransactionsApi* | [**systemFindAllBankTransactions**](docs/BankTransactionsApi.md#systemfindallbanktransactions) | **GET** /internal/bank-transactions | Busca todas as movimentações financeiras pelo sistema.
*BankTransactionsApi* | [**systemFindBankTransactionById**](docs/BankTransactionsApi.md#systemfindbanktransactionbyid) | **GET** /internal/bank-transactions/{id} | Busca uma movimentação financeira por ID.
*BankTransactionsApi* | [**systemOrganizationFindAllBankTransactions**](docs/BankTransactionsApi.md#systemorganizationfindallbanktransactions) | **GET** /internal/organizations/{organizationId}/bank-transactions | Busca todas as movimentações financeiras pelo sistema (por organização).
*BankTransactionsApi* | [**unreconcileBankTransaction**](docs/BankTransactionsApi.md#unreconcilebanktransaction) | **POST** /external/bank-transactions/{bankTransactionId}/unreconcile | Desfaz a reconciliação de uma transação bancária.
*BankTransactionsExportApi* | [**exportBankTransactions**](docs/BankTransactionsExportApi.md#exportbanktransactions) | **POST** /external/bank-transactions/export | Solicita a exportação das transações bancárias.
*BulkCreateApi* | [**processBulkCreate**](docs/BulkCreateApi.md#processbulkcreate) | **POST** /internal/queues/bulk-create | Processes bulk create tasks
*BulkCreateApi* | [**scheduleBulkCreate**](docs/BulkCreateApi.md#schedulebulkcreate) | **POST** /external/bulk/create | Schedules creation of multiple resources from a file
*BulkRemoveApi* | [**processBulkRemove**](docs/BulkRemoveApi.md#processbulkremove) | **POST** /internal/queues/bulk-remove | Processes bulk remove tasks
*BulkRemoveApi* | [**scheduleBulkRemove**](docs/BulkRemoveApi.md#schedulebulkremove) | **POST** /external/bulk/remove | Schedules removal of multiple resources
*BulkUpdateApi* | [**processBulkUpdate**](docs/BulkUpdateApi.md#processbulkupdate) | **POST** /internal/queues/bulk-update | Processes bulk update tasks
*BulkUpdateApi* | [**scheduleBulkUpdate**](docs/BulkUpdateApi.md#schedulebulkupdate) | **POST** /external/bulk/update | Schedules updating of multiple resources
*CacheApi* | [**getCacheValue**](docs/CacheApi.md#getcachevalue) | **GET** /external/cache | Get string value from cache
*CacheApi* | [**setCacheValue**](docs/CacheApi.md#setcachevalue) | **PUT** /external/cache | Set string value in cache with 10-second TTL
*CategoriesApi* | [**findAllCategories**](docs/CategoriesApi.md#findallcategories) | **GET** /external/categories | Busca todas as categorias.
*ContactsApi* | [**createContact**](docs/ContactsApi.md#createcontact) | **POST** /external/contacts | Cria um novo contato.
*ContactsApi* | [**findAllContactOrigins**](docs/ContactsApi.md#findallcontactorigins) | **GET** /external/contacts/origins | Busca todas as origens de contato.
*ContactsApi* | [**findAllContactTypes**](docs/ContactsApi.md#findallcontacttypes) | **GET** /external/contacts/types | Busca todos os tipos de contato.
*ContactsApi* | [**findAllContacts**](docs/ContactsApi.md#findallcontacts) | **GET** /external/contacts | Busca todos os contatos.
*ContactsApi* | [**findByIdContact**](docs/ContactsApi.md#findbyidcontact) | **GET** /external/contacts/{id} | Busca um contato pelo identificador.
*ContactsApi* | [**findNotIdentifiedContact**](docs/ContactsApi.md#findnotidentifiedcontact) | **GET** /internal/organizations/{organizationId}/contacts/not-identified | Busca o contato não identificado.
*ContactsApi* | [**partialUpdateContact**](docs/ContactsApi.md#partialupdatecontact) | **PATCH** /external/contacts/{id} | Atualiza parcialmente um contato.
*ContactsApi* | [**removeContact**](docs/ContactsApi.md#removecontact) | **DELETE** /external/contacts/{id} | Remove um contato.
*ContactsApi* | [**systemFindAllContacts**](docs/ContactsApi.md#systemfindallcontacts) | **GET** /internal/contacts | Busca todos os contatos pelo sistema.
*ContactsApi* | [**systemFindByIdContact**](docs/ContactsApi.md#systemfindbyidcontact) | **GET** /internal/organizations/{organizationId}/contacts/{contactId} | Busca um contato pelo identificador.
*ContactsExportApi* | [**exportContacts**](docs/ContactsExportApi.md#exportcontacts) | **POST** /external/contacts/export | Solicita a exportação dos contatos.
*CustomersApi* | [**createCustomer**](docs/CustomersApi.md#createcustomer) | **POST** /external/customers | Create a new customer.
*CustomersApi* | [**findAllCustomers**](docs/CustomersApi.md#findallcustomers) | **GET** /external/customers | Lista todos os customers com paginação e filtros.
*CustomersApi* | [**findByIdCustomer**](docs/CustomersApi.md#findbyidcustomer) | **GET** /external/customers/{id} | Busca um customer pelo identificador.
*CustomersApi* | [**getCustomersAnalytics**](docs/CustomersApi.md#getcustomersanalytics) | **GET** /external/customers/analytics | Busca analytics dos customers incluindo total de clientes e MRR.
*CustomersApi* | [**partialUpdateCustomer**](docs/CustomersApi.md#partialupdatecustomer) | **PATCH** /external/customers/{id} | Partially update a customer.
*EmbeddingApi* | [**calculateAndUpdateEmbedding**](docs/EmbeddingApi.md#calculateandupdateembedding) | **POST** /internal/queues/calculate-embedding | Calcula e atualiza o embedding de um recurso.
*EmbeddingApi* | [**catchProblematicEmbeddingCalculations**](docs/EmbeddingApi.md#catchproblematicembeddingcalculations) | **POST** /internal/embedding/catch | Checa se existem recursos que precisam do cálculo do embedding e os adiciona na fila.
*ExportResourceJobRequestsApi* | [**processExportResourceJobRequest**](docs/ExportResourceJobRequestsApi.md#processexportresourcejobrequest) | **POST** /internal/queues/export-resources | Processa a exportação de um recurso.
*FibonacciApi* | [**generateFibonacciSequence**](docs/FibonacciApi.md#generatefibonaccisequence) | **POST** /internal/queues/generate-fibonacci-sequence | Gera a sequência de Fibonacci a partir de um número n recebido.
*FibonacciApi* | [**startFibonacci**](docs/FibonacciApi.md#startfibonacci) | **POST** /internal/fibonacci/start | Inicia a sequência de Fibonacci gerando 20 números a serem processados.
*FibonacciApi* | [**sumFibonacciSequence**](docs/FibonacciApi.md#sumfibonaccisequence) | **POST** /internal/queues/sum-fibonacci-sequence | Soma a sequência de Fibonacci gerada.
*FilesApi* | [**deleteFile**](docs/FilesApi.md#deletefile) | **DELETE** /external/files/{id} | Deletes a file
*FilesApi* | [**findByIdFile**](docs/FilesApi.md#findbyidfile) | **GET** /external/files/{id} | Finds a file by id
*FilesApi* | [**getSignedUrlFromUrl**](docs/FilesApi.md#getsignedurlfromurl) | **GET** /external/files/signed-url | Get a signed url from a url
*FilesApi* | [**systemFindByIdFile**](docs/FilesApi.md#systemfindbyidfile) | **GET** /internal/organizations/{organizationId}/files/{fileId} | Finds a file by id
*FilesUploadApi* | [**confirmFileUpload**](docs/FilesUploadApi.md#confirmfileupload) | **POST** /external/files/upload/confirm | Confirms a file upload
*FilesUploadApi* | [**createFileUpload**](docs/FilesUploadApi.md#createfileupload) | **POST** /external/files/upload | Cria uma nova solicitação de upload de arquivo
*FilesUploadApi* | [**systemConfirmFileUpload**](docs/FilesUploadApi.md#systemconfirmfileupload) | **POST** /internal/organizations/{organizationId}/files/upload/confirm | Confirms a file upload
*FilesUploadApi* | [**systemCreateFileUpload**](docs/FilesUploadApi.md#systemcreatefileupload) | **POST** /internal/organizations/{organizationId}/files/upload | Cria uma nova solicitação de upload de arquivo
*FinancialRecordGroupsApi* | [**createFinancialRecordGroup**](docs/FinancialRecordGroupsApi.md#createfinancialrecordgroup) | **POST** /external/financial-record-groups | Cria um grupo de lançamentos financeiros.
*FinancialRecordGroupsApi* | [**findFinancialRecordGroupsByFinancialRecord**](docs/FinancialRecordGroupsApi.md#findfinancialrecordgroupsbyfinancialrecord) | **GET** /external/financial-record-groups/by-financial-record/{financialRecordId} | Busca grupos de lançamentos financeiros pelo ID do lançamento.
*FinancialRecordGroupsApi* | [**removeFinancialRecordGroup**](docs/FinancialRecordGroupsApi.md#removefinancialrecordgroup) | **DELETE** /external/financial-record-groups/{financialRecordGroupId} | Remove um grupo de lançamentos financeiros.
*FinancialRecordRadarItemAutoExecuteApi* | [**getFinancialRecordRadarItemAutoExecuteSettings**](docs/FinancialRecordRadarItemAutoExecuteApi.md#getfinancialrecordradaritemautoexecutesettings) | **GET** /external/financial-records/radar/items/auto-execute/settings | Obter configurações de auto-execute
*FinancialRecordRadarItemAutoExecuteApi* | [**updateFinancialRecordRadarItemAutoExecuteSettings**](docs/FinancialRecordRadarItemAutoExecuteApi.md#updatefinancialrecordradaritemautoexecutesettings) | **PUT** /external/financial-records/radar/items/auto-execute/settings | Atualizar configurações de auto-execute
*FinancialRecordRadarItemsApi* | [**createFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#createfinancialrecordradaritem) | **POST** /external/financial-records/radar/items | Cria um novo registro de radar
*FinancialRecordRadarItemsApi* | [**findAllFinancialRecordRadarItems**](docs/FinancialRecordRadarItemsApi.md#findallfinancialrecordradaritems) | **GET** /external/financial-records/radar/items | Busca todos os registros do radar.
*FinancialRecordRadarItemsApi* | [**findByIdFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#findbyidfinancialrecordradaritem) | **GET** /external/financial-records/radar/items/{radarItemId} | Busca um registro de radar pelo identificador.
*FinancialRecordRadarItemsApi* | [**getTagsForFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#gettagsforfinancialrecordradaritem) | **GET** /external/financial-records/radar/items/{radarItemId}/tags | Obtém os tags para um registro de radar.
*FinancialRecordRadarItemsApi* | [**linkFinancialRecordsToFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#linkfinancialrecordstofinancialrecordradaritem) | **POST** /external/financial-records/radar/items/{radarItemId}/links | Vincula registros financeiros a um registro de radar
*FinancialRecordRadarItemsApi* | [**partialUpdateFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#partialupdatefinancialrecordradaritem) | **PATCH** /external/financial-records/radar/items/{radarItemId} | Atualiza parcialmente um registro de radar
*FinancialRecordRadarItemsApi* | [**previewBulkCreateFile**](docs/FinancialRecordRadarItemsApi.md#previewbulkcreatefile) | **GET** /external/financial-records/radar/items/{radarItemId}/preview-bulk-create-file | Obtém o preview de um arquivo .csv para criação em lote.
*FinancialRecordRadarItemsApi* | [**systemFindAllFinancialRecordRadarItems**](docs/FinancialRecordRadarItemsApi.md#systemfindallfinancialrecordradaritems) | **GET** /internal/organizations/{organizationId}/financial-records/radar/items | Busca todos os registros do radar (sistema).
*FinancialRecordRadarItemsApi* | [**systemFindByIdFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#systemfindbyidfinancialrecordradaritem) | **GET** /internal/organizations/{organizationId}/financial-records/radar/items/{radarItemId} | Busca um registro de radar pelo identificador.
*FinancialRecordRadarItemsApi* | [**unlinkFinancialRecordsFromFinancialRecordRadarItem**](docs/FinancialRecordRadarItemsApi.md#unlinkfinancialrecordsfromfinancialrecordradaritem) | **POST** /external/financial-records/radar/items/{radarItemId}/unlink | Desvincula registros financeiros de um registro de radar
*FinancialRecordRadarItemsSeederApi* | [**seedFinancialRecordRadarItems**](docs/FinancialRecordRadarItemsSeederApi.md#seedfinancialrecordradaritems) | **POST** /external/financial-records/radar/items/seeder | Cria dados de teste para o radar de lançamentos financeiros.
*FinancialRecordsApi* | [**createFinancialRecord**](docs/FinancialRecordsApi.md#createfinancialrecord) | **POST** /external/financial-records | Cria um novo lançamento financeiro.
*FinancialRecordsApi* | [**createInternalTransfer**](docs/FinancialRecordsApi.md#createinternaltransfer) | **POST** /external/financial-records/internal-transfer | Cria uma transferência interna entre contas.
*FinancialRecordsApi* | [**createManyFinancialRecords**](docs/FinancialRecordsApi.md#createmanyfinancialrecords) | **POST** /external/financial-records/many | Cria múltiplos lançamentos financeiros.
*FinancialRecordsApi* | [**findAllFinancialRecords**](docs/FinancialRecordsApi.md#findallfinancialrecords) | **GET** /external/financial-records | Busca todos os lançamentos financeiros.
*FinancialRecordsApi* | [**findByIdFinancialRecord**](docs/FinancialRecordsApi.md#findbyidfinancialrecord) | **GET** /external/financial-records/{id} | Busca um lançamento financeiro pelo identificador.
*FinancialRecordsApi* | [**generatePdfListExportFinancialRecords**](docs/FinancialRecordsApi.md#generatepdflistexportfinancialrecords) | **GET** /external/financial-records/reports/pdf/list | Gera exportação em PDF dos lançamentos financeiros no formato de lista.
*FinancialRecordsApi* | [**generatePdfTableExportFinancialRecords**](docs/FinancialRecordsApi.md#generatepdftableexportfinancialrecords) | **GET** /external/financial-records/reports/pdf/table | Gera exportação em PDF dos lançamentos financeiros no formato de tabela.
*FinancialRecordsApi* | [**partialUpdateFinancialRecord**](docs/FinancialRecordsApi.md#partialupdatefinancialrecord) | **PATCH** /external/financial-records/{id} | Atualiza parcialmente um lançamento financeiro.
*FinancialRecordsApi* | [**partialUpdateManyFinancialRecords**](docs/FinancialRecordsApi.md#partialupdatemanyfinancialrecords) | **PATCH** /external/financial-records/many | Atualiza parcialmente múltiplos lançamentos financeiros.
*FinancialRecordsApi* | [**removeFinancialRecord**](docs/FinancialRecordsApi.md#removefinancialrecord) | **DELETE** /external/financial-records/{id} | Remove um lançamento financeiro.
*FinancialRecordsApi* | [**systemCalculateAndUpdateTextSearchVariationsAndHints**](docs/FinancialRecordsApi.md#systemcalculateandupdatetextsearchvariationsandhints) | **POST** /external/financial-records/calculate-and-update-text-search-variations-and-hints | Calcula e atualiza os campos de variações de busca textual e dicas de busca para múltiplos lançamentos financeiros.
*FinancialRecordsApi* | [**systemCreateManyFinancialRecords**](docs/FinancialRecordsApi.md#systemcreatemanyfinancialrecords) | **POST** /internal/organizations/{organizationId}/financial-records/many | Cria múltiplos lançamentos financeiros.
*FinancialRecordsApi* | [**systemFindAllFinancialRecords**](docs/FinancialRecordsApi.md#systemfindallfinancialrecords) | **GET** /internal/financial-records | Busca todos os lançamentos financeiros pelo sistema.
*FinancialRecordsApi* | [**systemFindByIdFinancialRecord**](docs/FinancialRecordsApi.md#systemfindbyidfinancialrecord) | **GET** /internal/organizations/{organizationId}/financial-records/{financialRecordId} | Busca um lançamento financeiro pelo identificador.
*FinancialRecordsApi* | [**systemGenerateMostCommonContactsAndSubcategoriesForSimilarFinancialRecordReport**](docs/FinancialRecordsApi.md#systemgeneratemostcommoncontactsandsubcategoriesforsimilarfinancialrecordreport) | **POST** /internal/financial-records/system-generate-most-common-subcategories-for-similar-financial-record-report | Gera relatório dos contatos e subcategorias mais comuns para lançamentos financeiros similares.
*FinancialRecordsApi* | [**unlinkAllRadarItemsFromFinancialRecord**](docs/FinancialRecordsApi.md#unlinkallradaritemsfromfinancialrecord) | **POST** /external/financial-records/{id}/unlink-all-radar-items | Desvincula todos os radar items de um lançamento financeiro
*FinancialRecordsExportApi* | [**exportFinancialRecords**](docs/FinancialRecordsExportApi.md#exportfinancialrecords) | **POST** /external/financial-records/export | Solicita a exportação dos lançamentos financeiros.
*HealthApi* | [**error**](docs/HealthApi.md#error) | **GET** /error | Gera um erro de teste.
*HealthApi* | [**health**](docs/HealthApi.md#health) | **GET** / | Verifica o status do serviço.
*HealthApi* | [**healthPost**](docs/HealthApi.md#healthpost) | **POST** / | Verifica o status do serviço.
*InstallmentFinancialRecordsApi* | [**createInstallmentFinancialRecord**](docs/InstallmentFinancialRecordsApi.md#createinstallmentfinancialrecord) | **POST** /external/installment-financial-records | Cria um novo lançamento financeiro parcelado.
*InstallmentFinancialRecordsApi* | [**findAllInstallmentFinancialRecords**](docs/InstallmentFinancialRecordsApi.md#findallinstallmentfinancialrecords) | **GET** /external/installment-financial-records | Busca todos os lançamentos financeiros parcelados.
*InstallmentFinancialRecordsApi* | [**findByIdInstallmentFinancialRecord**](docs/InstallmentFinancialRecordsApi.md#findbyidinstallmentfinancialrecord) | **GET** /external/installment-financial-records/{id} | Busca um lançamento financeiro parcelado pelo ID.
*InstallmentFinancialRecordsApi* | [**partialUpdateInstallmentFinancialRecord**](docs/InstallmentFinancialRecordsApi.md#partialupdateinstallmentfinancialrecord) | **PATCH** /external/installment-financial-records/{id} | Atualiza parcialmente um lançamento financeiro parcelado.
*InstallmentFinancialRecordsApi* | [**removeInstallmentFinancialRecord**](docs/InstallmentFinancialRecordsApi.md#removeinstallmentfinancialrecord) | **DELETE** /external/installment-financial-records/{id} | Remove um lançamento financeiro parcelado.
*InstallmentFinancialRecordsExportApi* | [**exportInstallmentFinancialRecords**](docs/InstallmentFinancialRecordsExportApi.md#exportinstallmentfinancialrecords) | **POST** /external/installment-financial-records/export | Solicita a exportação dos lançamentos financeiros parcelados.
*MembershipsApi* | [**createInvite**](docs/MembershipsApi.md#createinvite) | **POST** /external/memberships/invites | Create a new organization invite.
*MembershipsApi* | [**findAllInvites**](docs/MembershipsApi.md#findallinvites) | **GET** /external/memberships/invites | List all organization invites.
*MembershipsApi* | [**findAllMembers**](docs/MembershipsApi.md#findallmembers) | **GET** /external/memberships/members | List all organization members.
*MembershipsApi* | [**partialUpdateMember**](docs/MembershipsApi.md#partialupdatemember) | **PATCH** /external/memberships/members/{id} | Atualiza parcialmente um membro da organização.
*MembershipsApi* | [**removeMember**](docs/MembershipsApi.md#removemember) | **DELETE** /external/memberships/members/{id} | Remove um membro da organização.
*MembershipsApi* | [**revokeInvite**](docs/MembershipsApi.md#revokeinvite) | **POST** /external/memberships/invites/{id}/revoke | Revoke an organization invite.
*NormalizedSubcategoriesApi* | [**findAllNormalizedSubcategories**](docs/NormalizedSubcategoriesApi.md#findallnormalizedsubcategories) | **GET** /external/normalized-subcategories | Busca todas as subcategorias normalizadas.
*OrganizationsApi* | [**createOrganization**](docs/OrganizationsApi.md#createorganization) | **POST** /external/organizations | Create a new organization.
*OrganizationsApi* | [**externalHardRemoveOrganization**](docs/OrganizationsApi.md#externalhardremoveorganization) | **DELETE** /external/organizations/{organizationId}/hard | Hard remove an organization and all its data.
*OrganizationsApi* | [**findAllOrganizationsAdmin**](docs/OrganizationsApi.md#findallorganizationsadmin) | **GET** /external/organizations/admin | Lista todas as organizações armazenadas no banco de dados (endpoint admin).
*OrganizationsApi* | [**findMyAdminGroupOrganizations**](docs/OrganizationsApi.md#findmyadmingrouporganizations) | **GET** /external/organizations/my/admin/type/group | Find my organizations of type group where I am admin.
*OrganizationsApi* | [**findMyOrganization**](docs/OrganizationsApi.md#findmyorganization) | **GET** /external/organizations/my | Find my organization.
*OrganizationsApi* | [**findOrganizationById**](docs/OrganizationsApi.md#findorganizationbyid) | **GET** /external/organizations/{organizationId} | Find an organization by ID.
*OrganizationsApi* | [**hardRemoveOrganizationInternal**](docs/OrganizationsApi.md#hardremoveorganizationinternal) | **DELETE** /internal/organizations/{organizationId}/hard | Hard remove an organization and all its data (internal endpoint).
*OrganizationsApi* | [**partialUpdateOrganization**](docs/OrganizationsApi.md#partialupdateorganization) | **PATCH** /external/organizations/{id} | Atualiza parcialmente uma organização.
*OrganizationsApi* | [**syncFromClerk**](docs/OrganizationsApi.md#syncfromclerk) | **POST** /internal/organizations/sync/clerk | Sync organizations from Clerk.
*OrganizationsApi* | [**updateOrganizationByClerkId**](docs/OrganizationsApi.md#updateorganizationbyclerkid) | **PATCH** /external/organizations/admin/{clerkId} | Atualiza o subtype de uma organização pelo clerkId (endpoint admin).
*ProspectInstallmentFinancialRecordsApi* | [**prospectInstallmentFinancialRecord**](docs/ProspectInstallmentFinancialRecordsApi.md#prospectinstallmentfinancialrecord) | **POST** /external/installment-financial-records/prospect | Simula os lançamentos únicos que serão criados para um lançamento financeiro parcelado.
*ProspectRecurringFinancialRecordsApi* | [**prospectRecurringFinancialRecord**](docs/ProspectRecurringFinancialRecordsApi.md#prospectrecurringfinancialrecord) | **POST** /external/recurring-financial-records/prospect | Simula os lançamentos únicos que serão criados para um lançamento financeiro recorrente.
*QueriesApi* | [**createQuery**](docs/QueriesApi.md#createquery) | **POST** /external/queries | Cria uma nova consulta.
*QueriesApi* | [**findByIdQuery**](docs/QueriesApi.md#findbyidquery) | **GET** /external/queries/{id} | Busca uma consulta pelo identificador.
*RecurringFinancialRecordsApi* | [**createManyRecurringFinancialRecords**](docs/RecurringFinancialRecordsApi.md#createmanyrecurringfinancialrecords) | **POST** /external/recurring-financial-records/many | Cria múltiplos lançamentos financeiros recorrentes.
*RecurringFinancialRecordsApi* | [**createRecurringFinancialRecord**](docs/RecurringFinancialRecordsApi.md#createrecurringfinancialrecord) | **POST** /external/recurring-financial-records | Cria um novo lançamento financeiro recorrente.
*RecurringFinancialRecordsApi* | [**findAllRecurringFinancialRecords**](docs/RecurringFinancialRecordsApi.md#findallrecurringfinancialrecords) | **GET** /external/recurring-financial-records | Busca todos os lançamentos financeiros recorrentes.
*RecurringFinancialRecordsApi* | [**findByIdRecurringFinancialRecord**](docs/RecurringFinancialRecordsApi.md#findbyidrecurringfinancialrecord) | **GET** /external/recurring-financial-records/{id} | Busca um lançamento financeiro recorrente pelo ID.
*RecurringFinancialRecordsApi* | [**partialUpdateRecurringFinancialRecord**](docs/RecurringFinancialRecordsApi.md#partialupdaterecurringfinancialrecord) | **PATCH** /external/recurring-financial-records/{id} | Atualiza parcialmente um lançamento financeiro recorrente.
*RecurringFinancialRecordsApi* | [**removeRecurringFinancialRecord**](docs/RecurringFinancialRecordsApi.md#removerecurringfinancialrecord) | **DELETE** /external/recurring-financial-records/{id} | Remove um lançamento financeiro recorrente.
*RecurringFinancialRecordsApi* | [**scheduleRecurringFinancialRecordsSeeding**](docs/RecurringFinancialRecordsApi.md#schedulerecurringfinancialrecordsseeding) | **POST** /internal/recurring-financial-records/seed | Agenda o seeder de lançamentos financeiros recorrentes.
*RecurringFinancialRecordsApi* | [**startRecurringFinancialRecordsSeeder**](docs/RecurringFinancialRecordsApi.md#startrecurringfinancialrecordsseeder) | **POST** /internal/queues/recurring-financial-records-2 | Inicia o seeder de lançamentos financeiros recorrentes.
*RecurringFinancialRecordsExportApi* | [**exportRecurringFinancialRecords**](docs/RecurringFinancialRecordsExportApi.md#exportrecurringfinancialrecords) | **POST** /external/recurring-financial-records/export | Solicita a exportação dos lançamentos recorrentes.
*SubcategoriesApi* | [**createSubcategory**](docs/SubcategoriesApi.md#createsubcategory) | **POST** /external/subcategories | Cria uma nova subcategoria.
*SubcategoriesApi* | [**findAllSubcategories**](docs/SubcategoriesApi.md#findallsubcategories) | **GET** /external/subcategories | Busca todas as subcategorias.
*SubcategoriesApi* | [**findByIdSubcategory**](docs/SubcategoriesApi.md#findbyidsubcategory) | **GET** /external/subcategories/{id} | Busca uma subcategoria pelo identificador.
*SubcategoriesApi* | [**findBySlugSubcategory**](docs/SubcategoriesApi.md#findbyslugsubcategory) | **GET** /external/subcategories/slug/{slug} | Busca uma subcategoria pelo slug.
*SubcategoriesApi* | [**partialUpdateSubcategory**](docs/SubcategoriesApi.md#partialupdatesubcategory) | **PATCH** /external/subcategories/{id} | Atualiza parcialmente uma subcategoria.
*SubcategoriesApi* | [**removeSubcategory**](docs/SubcategoriesApi.md#removesubcategory) | **DELETE** /external/subcategories/{id} | Remove uma subcategoria.
*SubcategoriesApi* | [**systemFindAllSubcategories**](docs/SubcategoriesApi.md#systemfindallsubcategories) | **GET** /internal/subcategories | Busca todas as subcategorias pelo sistema.
*SubcategoriesApi* | [**systemFindByIdSubcategory**](docs/SubcategoriesApi.md#systemfindbyidsubcategory) | **GET** /internal/organizations/{organizationId}/subcategories/{subcategoryId} | Busca uma subcategoria pelo identificador.
*SubcategoriesExportApi* | [**exportSubcategories**](docs/SubcategoriesExportApi.md#exportsubcategories) | **POST** /external/subcategories/export | Solicita a exportação das subcategorias.
*SubscriptionsApi* | [**createSubscription**](docs/SubscriptionsApi.md#createsubscription) | **POST** /external/subscriptions | Create a new subscription.
*SubscriptionsApi* | [**partialUpdateSubscription**](docs/SubscriptionsApi.md#partialupdatesubscription) | **PATCH** /external/subscriptions/{id} | Partially update a subscription.
*TagsApi* | [**createTag**](docs/TagsApi.md#createtag) | **POST** /external/tags | Cria uma nova tag.
*TagsApi* | [**findAllTags**](docs/TagsApi.md#findalltags) | **GET** /external/tags | Busca todas as tags.
*TagsApi* | [**findByIdTag**](docs/TagsApi.md#findbyidtag) | **GET** /external/tags/{id} | Busca uma tag pelo identificador.
*TagsApi* | [**partialUpdateTag**](docs/TagsApi.md#partialupdatetag) | **PATCH** /external/tags/{id} | Atualiza parcialmente uma tag.
*TagsApi* | [**removeTag**](docs/TagsApi.md#removetag) | **DELETE** /external/tags/{id} | Remove uma tag.
*TagsApi* | [**systemFindAllTags**](docs/TagsApi.md#systemfindalltags) | **GET** /internal/tags | Busca todas as tags pelo sistema.
*TagsExportApi* | [**exportTags**](docs/TagsExportApi.md#exporttags) | **POST** /external/tags/export | Solicita a exportação das tags.


### Models

- [AdminOrganizationsPageDto](docs/AdminOrganizationsPageDto.md)
- [AdminOrganizationsPageDtoItemsInner](docs/AdminOrganizationsPageDtoItemsInner.md)
- [AdminOrganizationsPageDtoItemsInnerPopulatedCustomer](docs/AdminOrganizationsPageDtoItemsInnerPopulatedCustomer.md)
- [AdminOrganizationsPageDtoItemsInnerPopulatedSubscription](docs/AdminOrganizationsPageDtoItemsInnerPopulatedSubscription.md)
- [BankAccountDto](docs/BankAccountDto.md)
- [BankAccountTypeEntity](docs/BankAccountTypeEntity.md)
- [BankAccountsPageDto](docs/BankAccountsPageDto.md)
- [BankAccountsPageDtoItemsInner](docs/BankAccountsPageDtoItemsInner.md)
- [BankInstitutionEntity](docs/BankInstitutionEntity.md)
- [BankTransactionEntity](docs/BankTransactionEntity.md)
- [BankTransactionEntityPopulatedBankAccount](docs/BankTransactionEntityPopulatedBankAccount.md)
- [BankTransactionsPageDto](docs/BankTransactionsPageDto.md)
- [BankTransactionsPageDtoItemsInner](docs/BankTransactionsPageDtoItemsInner.md)
- [BulkBankTransactionsJobRequestDto](docs/BulkBankTransactionsJobRequestDto.md)
- [BulkBankTransactionsJobRequestEntity](docs/BulkBankTransactionsJobRequestEntity.md)
- [BulkCreateJobRequestDto](docs/BulkCreateJobRequestDto.md)
- [BulkCreateJobRequestEntity](docs/BulkCreateJobRequestEntity.md)
- [BulkRemoveJobRequestDto](docs/BulkRemoveJobRequestDto.md)
- [BulkRemoveJobRequestEntity](docs/BulkRemoveJobRequestEntity.md)
- [BulkUpdateJobRequestDto](docs/BulkUpdateJobRequestDto.md)
- [BulkUpdateJobRequestEntity](docs/BulkUpdateJobRequestEntity.md)
- [CacheGetResponseDto](docs/CacheGetResponseDto.md)
- [CacheSetDto](docs/CacheSetDto.md)
- [CalculateAndUpdateEmbeddingBodyRequestDto](docs/CalculateAndUpdateEmbeddingBodyRequestDto.md)
- [CategoriesPageEntity](docs/CategoriesPageEntity.md)
- [CategoriesPageEntityItemsInner](docs/CategoriesPageEntityItemsInner.md)
- [ConfirmFileUploadRequestBodyDto](docs/ConfirmFileUploadRequestBodyDto.md)
- [ContactDto](docs/ContactDto.md)
- [ContactOriginItemEntity](docs/ContactOriginItemEntity.md)
- [ContactTypeItemEntity](docs/ContactTypeItemEntity.md)
- [ContactsPageDto](docs/ContactsPageDto.md)
- [ContactsPageDtoItemsInner](docs/ContactsPageDtoItemsInner.md)
- [ContactsPageDtoPageInfo](docs/ContactsPageDtoPageInfo.md)
- [CountryItemEntity](docs/CountryItemEntity.md)
- [CountryStateItemEntity](docs/CountryStateItemEntity.md)
- [CreateBankAccountRequestBodyDto](docs/CreateBankAccountRequestBodyDto.md)
- [CreateContactRequestBodyDto](docs/CreateContactRequestBodyDto.md)
- [CreateContactRequestBodyDtoAddress](docs/CreateContactRequestBodyDtoAddress.md)
- [CreateCustomerRequestBodyDto](docs/CreateCustomerRequestBodyDto.md)
- [CreateFileUpload200Response](docs/CreateFileUpload200Response.md)
- [CreateFileUploadRequestBodyDto](docs/CreateFileUploadRequestBodyDto.md)
- [CreateFinancialRecordGroupRequestBodyDto](docs/CreateFinancialRecordGroupRequestBodyDto.md)
- [CreateFinancialRecordRadarItemRequestBodyDto](docs/CreateFinancialRecordRadarItemRequestBodyDto.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateFinancialRecordRequest.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateManyFinancialRecordsRequest](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawCreateManyFinancialRecordsRequest.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawLinkFinancialRecordToThisRadarItemRequest](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawLinkFinancialRecordToThisRadarItemRequest.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequest](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequest.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestData.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestExtractedFinancialRecordData](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestExtractedFinancialRecordData.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestId](docs/CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestId.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData](docs/CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataCurrentMessage](docs/CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataCurrentMessage.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataLastMessagesInner](docs/CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataLastMessagesInner.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData](docs/CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage](docs/CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner](docs/CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted](docs/CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted.md)
- [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner](docs/CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner.md)
- [CreateFinancialRecordRequestBodyDto](docs/CreateFinancialRecordRequestBodyDto.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedAccount](docs/CreateFinancialRecordRequestBodyDtoPopulatedAccount.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus](docs/CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatus.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatusError](docs/CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedAutomaticStatusError.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution](docs/CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedContact](docs/CreateFinancialRecordRequestBodyDtoPopulatedContact.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedFilesInner](docs/CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedGroupsInner](docs/CreateFinancialRecordRequestBodyDtoPopulatedGroupsInner.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedSubcategory](docs/CreateFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory](docs/CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory](docs/CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory.md)
- [CreateFinancialRecordRequestBodyDtoPopulatedTagsInner](docs/CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
- [CreateInstallmentFinancialRecordRequestBodyDto](docs/CreateInstallmentFinancialRecordRequestBodyDto.md)
- [CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner](docs/CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner.md)
- [CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact](docs/CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact.md)
- [CreateInternalTransferRequestBodyDto](docs/CreateInternalTransferRequestBodyDto.md)
- [CreateInviteRequestBodyDto](docs/CreateInviteRequestBodyDto.md)
- [CreateManyFinancialRecordsRequestBodyDto](docs/CreateManyFinancialRecordsRequestBodyDto.md)
- [CreateManyFinancialRecordsRequestBodyDtoDataInner](docs/CreateManyFinancialRecordsRequestBodyDtoDataInner.md)
- [CreateManyRecurringFinancialRecordsRequestBodyDto](docs/CreateManyRecurringFinancialRecordsRequestBodyDto.md)
- [CreateManyRecurringFinancialRecordsRequestBodyDtoDataInner](docs/CreateManyRecurringFinancialRecordsRequestBodyDtoDataInner.md)
- [CreateOrUpdateBankTransactionRequestBodyDto](docs/CreateOrUpdateBankTransactionRequestBodyDto.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion](docs/CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateData](docs/CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateData.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateDataFinancialRecord](docs/CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateDataFinancialRecord.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData](docs/CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata](docs/CreateOrUpdateBankTransactionRequestBodyDtoCreditCardMetadata.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoMerchant](docs/CreateOrUpdateBankTransactionRequestBodyDtoMerchant.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoPaymentData](docs/CreateOrUpdateBankTransactionRequestBodyDtoPaymentData.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata](docs/CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer](docs/CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayer.md)
- [CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayerDocumentNumber](docs/CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataPayerDocumentNumber.md)
- [CreateOrganizationRequestBodyDto](docs/CreateOrganizationRequestBodyDto.md)
- [CreateOrganizationRequestBodyDtoGroupSettings](docs/CreateOrganizationRequestBodyDtoGroupSettings.md)
- [CreateOrganizationRequestBodyDtoPopulatedChildrenInner](docs/CreateOrganizationRequestBodyDtoPopulatedChildrenInner.md)
- [CreateOrganizationRequestBodyDtoPopulatedParent](docs/CreateOrganizationRequestBodyDtoPopulatedParent.md)
- [CreateQueryRequestDto](docs/CreateQueryRequestDto.md)
- [CreateRecurringFinancialRecordRequestBodyDto](docs/CreateRecurringFinancialRecordRequestBodyDto.md)
- [CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory](docs/CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
- [CreateSubscriptionRequestBodyDto](docs/CreateSubscriptionRequestBodyDto.md)
- [CreateTagRequestBodyDto](docs/CreateTagRequestBodyDto.md)
- [CreatedFinancialRecordRadarItemResultEntity](docs/CreatedFinancialRecordRadarItemResultEntity.md)
- [CreatedFinancialRecordRadarItemResultEntityAutoExecute](docs/CreatedFinancialRecordRadarItemResultEntityAutoExecute.md)
- [CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord](docs/CreatedFinancialRecordRadarItemResultEntityAutoExecuteCreatedFinancialRecord.md)
- [CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord](docs/CreatedFinancialRecordRadarItemResultEntityAutoExecuteLinkedFinancialRecord.md)
- [CreatedFinancialRecordRadarItemResultEntityAutoExecutePartialUpdatedFinancialRecord](docs/CreatedFinancialRecordRadarItemResultEntityAutoExecutePartialUpdatedFinancialRecord.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItem](docs/CreatedFinancialRecordRadarItemResultEntityRadarItem.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteCreatedFinancialRecord](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteCreatedFinancialRecord.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteLinkedFinancialRecord](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteLinkedFinancialRecord.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecutePartialUpdatedFinancialRecord](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecutePartialUpdatedFinancialRecord.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestData](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestData.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerBestSuggestedAction](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerBestSuggestedAction.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerEmailMessageData](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerEmailMessageData.md)
- [CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData](docs/CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData.md)
- [CustomerAnalyticsResponseDto](docs/CustomerAnalyticsResponseDto.md)
- [CustomerDto](docs/CustomerDto.md)
- [CustomersPageDto](docs/CustomersPageDto.md)
- [CustomersPageDtoItemsInner](docs/CustomersPageDtoItemsInner.md)
- [ExceptionResponseEntity](docs/ExceptionResponseEntity.md)
- [ExceptionResponseEntityErrorsInner](docs/ExceptionResponseEntityErrorsInner.md)
- [ExecuteBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto](docs/ExecuteBankTransactionsCreateOrUpdateBestSuggestionActionRequestBodyDto.md)
- [ExecuteBulkBankTransactionsJobRequestBodyDto](docs/ExecuteBulkBankTransactionsJobRequestBodyDto.md)
- [ExecuteBulkCreateJobRequestBodyDto](docs/ExecuteBulkCreateJobRequestBodyDto.md)
- [ExecuteBulkRemoveJobRequestBodyDto](docs/ExecuteBulkRemoveJobRequestBodyDto.md)
- [ExecuteBulkUpdateJobRequestBodyDto](docs/ExecuteBulkUpdateJobRequestBodyDto.md)
- [ExecuteOfxImportJobRequestBodyDto](docs/ExecuteOfxImportJobRequestBodyDto.md)
- [ExportBankAccountsDto](docs/ExportBankAccountsDto.md)
- [ExportBankTransactionsDto](docs/ExportBankTransactionsDto.md)
- [ExportContactsDto](docs/ExportContactsDto.md)
- [ExportFinancialRecordsDto](docs/ExportFinancialRecordsDto.md)
- [ExportInstallmentFinancialRecordsDto](docs/ExportInstallmentFinancialRecordsDto.md)
- [ExportRecurringFinancialRecordsDto](docs/ExportRecurringFinancialRecordsDto.md)
- [ExportSubcategoriesDto](docs/ExportSubcategoriesDto.md)
- [ExportTagsDto](docs/ExportTagsDto.md)
- [ExternalCreateSubcategoryRequestBodyDto](docs/ExternalCreateSubcategoryRequestBodyDto.md)
- [FileEntity](docs/FileEntity.md)
- [FinancialRecordDto](docs/FinancialRecordDto.md)
- [FinancialRecordGroupDto](docs/FinancialRecordGroupDto.md)
- [FinancialRecordGroupDtoPopulatedFinancialRecordsInner](docs/FinancialRecordGroupDtoPopulatedFinancialRecordsInner.md)
- [FinancialRecordRadarItemAutoExecuteSettingEntity](docs/FinancialRecordRadarItemAutoExecuteSettingEntity.md)
- [FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner](docs/FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner.md)
- [FinancialRecordRadarItemEntity](docs/FinancialRecordRadarItemEntity.md)
- [FinancialRecordRadarItemEntityAutoExecute](docs/FinancialRecordRadarItemEntityAutoExecute.md)
- [FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecord](docs/FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecord.md)
- [FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecord](docs/FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecord.md)
- [FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecord](docs/FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecord.md)
- [FinancialRecordRadarItemTagEntity](docs/FinancialRecordRadarItemTagEntity.md)
- [FinancialRecordRadarItemsPageDto](docs/FinancialRecordRadarItemsPageDto.md)
- [FinancialRecordRadarItemsPageDtoItemsInner](docs/FinancialRecordRadarItemsPageDtoItemsInner.md)
- [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute](docs/FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute.md)
- [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteCreatedFinancialRecord](docs/FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteCreatedFinancialRecord.md)
- [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteLinkedFinancialRecord](docs/FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteLinkedFinancialRecord.md)
- [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecutePartialUpdatedFinancialRecord](docs/FinancialRecordRadarItemsPageDtoItemsInnerAutoExecutePartialUpdatedFinancialRecord.md)
- [FinancialRecordsBulkCreateFilePreviewEntity](docs/FinancialRecordsBulkCreateFilePreviewEntity.md)
- [FinancialRecordsPageDto](docs/FinancialRecordsPageDto.md)
- [FinancialRecordsPageDtoItemsInner](docs/FinancialRecordsPageDtoItemsInner.md)
- [HealthResponseDto](docs/HealthResponseDto.md)
- [InstallmentDefinitionDto](docs/InstallmentDefinitionDto.md)
- [InstallmentFinancialRecordDto](docs/InstallmentFinancialRecordDto.md)
- [InstallmentFinancialRecordsPageDto](docs/InstallmentFinancialRecordsPageDto.md)
- [InstallmentFinancialRecordsPageDtoItemsInner](docs/InstallmentFinancialRecordsPageDtoItemsInner.md)
- [InviteEntity](docs/InviteEntity.md)
- [LinkFinancialRecordsRequestBodyDto](docs/LinkFinancialRecordsRequestBodyDto.md)
- [MemberEntity](docs/MemberEntity.md)
- [NormalizedSubcategoriesPageEntity](docs/NormalizedSubcategoriesPageEntity.md)
- [NormalizedSubcategoriesPageEntityItemsInner](docs/NormalizedSubcategoriesPageEntityItemsInner.md)
- [OfxImportJobRequestEntity](docs/OfxImportJobRequestEntity.md)
- [OfxImportJobRequestsPageDto](docs/OfxImportJobRequestsPageDto.md)
- [OfxImportJobRequestsPageDtoItemsInner](docs/OfxImportJobRequestsPageDtoItemsInner.md)
- [OfxImportJobRequestsPageDtoItemsInnerExecutionsInner](docs/OfxImportJobRequestsPageDtoItemsInnerExecutionsInner.md)
- [OfxImportJobRequestsPageDtoItemsInnerPopulatedBankAccount](docs/OfxImportJobRequestsPageDtoItemsInnerPopulatedBankAccount.md)
- [OfxImportJobRequestsPageDtoItemsInnerUser](docs/OfxImportJobRequestsPageDtoItemsInnerUser.md)
- [OfxImportRequestBodyDto](docs/OfxImportRequestBodyDto.md)
- [OrganizationEntity](docs/OrganizationEntity.md)
- [OrganizationEntityPopulatedSubscription](docs/OrganizationEntityPopulatedSubscription.md)
- [OrganizationEntityPopulatedSubscriptionStatusHistoryInner](docs/OrganizationEntityPopulatedSubscriptionStatusHistoryInner.md)
- [PartialUpdateBankAccountRequestBodyDto](docs/PartialUpdateBankAccountRequestBodyDto.md)
- [PartialUpdateBankTransactionRequestBodyDto](docs/PartialUpdateBankTransactionRequestBodyDto.md)
- [PartialUpdateContactRequestBodyDto](docs/PartialUpdateContactRequestBodyDto.md)
- [PartialUpdateCustomerRequestBodyDto](docs/PartialUpdateCustomerRequestBodyDto.md)
- [PartialUpdateFinancialRecordRadarItemRequestBodyDto](docs/PartialUpdateFinancialRecordRadarItemRequestBodyDto.md)
- [PartialUpdateFinancialRecordRequestBodyDto](docs/PartialUpdateFinancialRecordRequestBodyDto.md)
- [PartialUpdateInstallmentFinancialRecordRequestBodyDto](docs/PartialUpdateInstallmentFinancialRecordRequestBodyDto.md)
- [PartialUpdateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner](docs/PartialUpdateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner.md)
- [PartialUpdateManyFinancialRecordsRequestBodyDto](docs/PartialUpdateManyFinancialRecordsRequestBodyDto.md)
- [PartialUpdateManyFinancialRecordsRequestBodyDtoData](docs/PartialUpdateManyFinancialRecordsRequestBodyDtoData.md)
- [PartialUpdateMemberRequestBodyDto](docs/PartialUpdateMemberRequestBodyDto.md)
- [PartialUpdateOrganizationRequestBodyDto](docs/PartialUpdateOrganizationRequestBodyDto.md)
- [PartialUpdateRecurringFinancialRecordRequestBodyDto](docs/PartialUpdateRecurringFinancialRecordRequestBodyDto.md)
- [PartialUpdateSubcategoryRequestBodyDto](docs/PartialUpdateSubcategoryRequestBodyDto.md)
- [PartialUpdateSubscriptionRequestBodyDto](docs/PartialUpdateSubscriptionRequestBodyDto.md)
- [PartialUpdateTagRequestBodyDto](docs/PartialUpdateTagRequestBodyDto.md)
- [ProcessExportResourceJobRequestBodyDto](docs/ProcessExportResourceJobRequestBodyDto.md)
- [ProcessExportResourceJobRequestBodyDtoRequester](docs/ProcessExportResourceJobRequestBodyDtoRequester.md)
- [ProcessExportResourceJobRequestBodyDtoRequesterOrganization](docs/ProcessExportResourceJobRequestBodyDtoRequesterOrganization.md)
- [ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner](docs/ProcessExportResourceJobRequestBodyDtoRequesterOrganizationChildrenInner.md)
- [ProcessExportResourceJobRequestBodyDtoRequesterOrganizationParent](docs/ProcessExportResourceJobRequestBodyDtoRequesterOrganizationParent.md)
- [ProspectFinancialRecordDto](docs/ProspectFinancialRecordDto.md)
- [ProspectInstallmentFinancialRecordRequestBodyDto](docs/ProspectInstallmentFinancialRecordRequestBodyDto.md)
- [ProspectRecurringFinancialRecordRequestBodyDto](docs/ProspectRecurringFinancialRecordRequestBodyDto.md)
- [QueryResponseDto](docs/QueryResponseDto.md)
- [ReconcileBankTransactionRequestBodyDto](docs/ReconcileBankTransactionRequestBodyDto.md)
- [RecurringFinancialRecordDto](docs/RecurringFinancialRecordDto.md)
- [RecurringFinancialRecordsPageDto](docs/RecurringFinancialRecordsPageDto.md)
- [RecurringFinancialRecordsPageDtoItemsInner](docs/RecurringFinancialRecordsPageDtoItemsInner.md)
- [RemoveBankAccountRequestBodyDto](docs/RemoveBankAccountRequestBodyDto.md)
- [RemoveContactRequestBodyDto](docs/RemoveContactRequestBodyDto.md)
- [RemoveFileRequestBodyDto](docs/RemoveFileRequestBodyDto.md)
- [RemoveFinancialRecordRequestBodyDto](docs/RemoveFinancialRecordRequestBodyDto.md)
- [RemoveInstallmentFinancialRecordRequestBodyDto](docs/RemoveInstallmentFinancialRecordRequestBodyDto.md)
- [RemoveMemberRequestBodyDto](docs/RemoveMemberRequestBodyDto.md)
- [RemoveRecurringFinancialRecordRequestBodyDto](docs/RemoveRecurringFinancialRecordRequestBodyDto.md)
- [RemoveSubcategoryRequestBodyDto](docs/RemoveSubcategoryRequestBodyDto.md)
- [RemoveTagRequestBodyDto](docs/RemoveTagRequestBodyDto.md)
- [RevokeInviteRequestBodyDto](docs/RevokeInviteRequestBodyDto.md)
- [ScheduleRecurringFinancialRecordsSeedingRequestBodyDto](docs/ScheduleRecurringFinancialRecordsSeedingRequestBodyDto.md)
- [SeedRecurringFinancialRecordsRequestBodyDto](docs/SeedRecurringFinancialRecordsRequestBodyDto.md)
- [ShouldAiSuggestActionRequestBodyDto](docs/ShouldAiSuggestActionRequestBodyDto.md)
- [ShouldAiSuggestActionRequestBodyDtoRequester](docs/ShouldAiSuggestActionRequestBodyDtoRequester.md)
- [ShouldAiSuggestActionRequestBodyDtoTransactionData](docs/ShouldAiSuggestActionRequestBodyDtoTransactionData.md)
- [ShouldAiSuggestActionResponseDto](docs/ShouldAiSuggestActionResponseDto.md)
- [SignedUrlEntity](docs/SignedUrlEntity.md)
- [SubcategoriesPageEntity](docs/SubcategoriesPageEntity.md)
- [SubcategoriesPageEntityItemsInner](docs/SubcategoriesPageEntityItemsInner.md)
- [SubcategoryEntity](docs/SubcategoryEntity.md)
- [SubscriptionEntity](docs/SubscriptionEntity.md)
- [SystemCalculateSearchVariationsRequestBodyDto](docs/SystemCalculateSearchVariationsRequestBodyDto.md)
- [SystemFinancialRecordsPageDto](docs/SystemFinancialRecordsPageDto.md)
- [SystemFinancialRecordsPageDtoAggregatedResultReport](docs/SystemFinancialRecordsPageDtoAggregatedResultReport.md)
- [SystemFinancialRecordsPageDtoExportedExcelFile](docs/SystemFinancialRecordsPageDtoExportedExcelFile.md)
- [SystemFinancialRecordsPageDtoExportedPdfListFile](docs/SystemFinancialRecordsPageDtoExportedPdfListFile.md)
- [SystemFinancialRecordsPageDtoExportedPdfTableFile](docs/SystemFinancialRecordsPageDtoExportedPdfTableFile.md)
- [SystemFinancialRecordsPageDtoItemsInner](docs/SystemFinancialRecordsPageDtoItemsInner.md)
- [SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto](docs/SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto.md)
- [SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto](docs/SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto.md)
- [SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories](docs/SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories.md)
- [SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner](docs/SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner.md)
- [TagEntity](docs/TagEntity.md)
- [TagsPageEntity](docs/TagsPageEntity.md)
- [UnlinkAllRadarItemsRequestBodyDto](docs/UnlinkAllRadarItemsRequestBodyDto.md)
- [UnlinkFinancialRecordsRequestBodyDto](docs/UnlinkFinancialRecordsRequestBodyDto.md)
- [UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto](docs/UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto.md)
- [UpdateOrganizationRequestBodyDto](docs/UpdateOrganizationRequestBodyDto.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `3.0.0`
- Package version: `3.0.0`
- Generator version: `7.18.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
