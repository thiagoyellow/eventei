import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import  App  from './App'

createServer({
  models: {
    event: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/eventos', () => {
      return this.schema.all('events')
    })

    this.post('/eventos', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('event', data)
      
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // name, file, address, complement, uf, city, date, time, price, type
