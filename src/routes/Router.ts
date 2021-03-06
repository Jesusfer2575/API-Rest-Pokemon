import Endpoint from '../interfaces/endpoint'

const express = require('express')
const router = express.Router()

const services = [
    require('../services/pokemon'),
]
services.forEach(service => {
    const { 
        name, 
        endpoints 
    }: Endpoint = service
    endpoints.forEach( endpoint => {
        const { 
            path, 
            method,
            handler 
        } = endpoint
        router[method](`/${name}/${path}`, handler);
    } )
});

module.exports = router