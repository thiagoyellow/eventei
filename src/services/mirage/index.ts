import { createServer, Factory, Model } from 'miragejs';

type Event = {
  name: string;
  file: string;
  address: string;
  complement: string;
  uf: string;
  city: string;
  date: string;
  time: string;
  price: number;
  type: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      event: Model.extend<Partial<Event>>({})
    },
    
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/eventos')
      this.post('/eventos')

      this.passthrough()
    }
  })

  return server;
}

// // name, file, address, complement, uf, city, date, time, price, type
