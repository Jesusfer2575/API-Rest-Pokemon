"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { IndexPage, GetPokemonByNumber, PostPokemon, GetAllPokemon, GetPokemonByName, RemovePokemonByNumber, } = require('./Pokemon/controller');
const endpoints = {
    name: 'pokemon',
    endpoints: [
        {
            path: '',
            method: 'get',
            handler: GetAllPokemon
        },
        {
            path: 'number/:id',
            method: 'get',
            handler: GetPokemonByNumber
        },
        {
            path: 'name/:name',
            method: 'get',
            handler: GetPokemonByName
        },
        {
            path: '',
            method: 'post',
            handler: PostPokemon
        },
        {
            path: 'name/:name',
            method: 'post',
            handler: PostPokemon
        },
        {
            path: 'number/:id',
            method: 'delete',
            handler: RemovePokemonByNumber
        },
    ]
};
module.exports = endpoints;
