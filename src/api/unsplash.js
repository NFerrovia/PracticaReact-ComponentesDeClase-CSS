// import de axios para mejores solicitudes de red

import axios from 'axios';

// setup de axios a la API de unsplash.

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    // llave "confidencial" entregada por Unsplash a una cuenta dummy para el fin de esta aplicación de práctica.
    Authorization: 'Client-ID s7PO8AJh3qDUPOvW3hjAutYyKAKq-Gjlas3xEAy1WO8',
  },
});
