import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

chaiJquery(chai, chai.util, jquery);

function renderComponent(ComponentClass, props = {}, state = {}) {
  //console.log('state', state);
  //const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  const componentInstance = TestUtils.renderIntoDocument(

    //<Provider store={createStoreWithMiddleware(reducers)}>
    <Provider store={createStore(reducers, state, applyMiddleware(thunk))}>
      <ComponentClass {...props} />
    </Provider>
  );

  return jquery(ReactDOM.findDOMNode(componentInstance));
}

window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

jquery.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
