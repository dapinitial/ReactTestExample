import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run a browser in the commandline
global.document = jsdom.jsdom('<!doctype html><html lang="en"><body></body></html>');
global.window = global.document.defaultView;
// Help jQuery to make use of the window variable
const $ = jquery(global.window);

// Build 'renderComponent' help that should render a given React class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // Produces the HTML from our instance
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// Setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
