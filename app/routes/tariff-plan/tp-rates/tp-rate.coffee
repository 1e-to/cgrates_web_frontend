import Ember from 'ember'

export default Ember.Route.extend
  model: (params) -> @store.find('tp-rate', params['tp-rate_id'])
