import Ember from 'ember'

export default Ember.Route.extend
  model: -> @store.findAll 'tariff-plan'
