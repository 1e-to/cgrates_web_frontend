import Controller from '@ember/controller';
import QueryControllerMixin from 'cgrates-web-frontend/mixins/query-controller-mixin';
import { task } from 'ember-concurrency';

export default Controller.extend(QueryControllerMixin, {
  queryParams: Object.freeze(['rate', 'supplierName', 'prefix', 'insertedAtGt', 'insertedAtLt', 'page', 'pageSize']),
  rate:         null,
  supplierName: null,
  prefix:       null,
  insertedAtLt: null,
  insertedAtGt: null,

  permittedFilters: Object.freeze([
    'rate', 'supplierName', 'prefix', 'insertedAtGt', 'insertedAtLt'
  ]),
 
  resolve: task(function * () {
    try {
      yield store.createRecord('raw-supplier-resolve-job', {tpid: this.get('tariffPlan.id')})
      yield store.save()
      this.get('flashMessages').success('Resolve job is starting'); 
    } catch (e) { 
      this.get('flashMessages').danger('Somethings went wrong'); 
    }      
  }),
});

