'use strict'

import data from './data.json' assert { type: 'json' }

// NOTA: Estas funciones únicamente deben exportar los datos del JSON
//  sin procesarlos, como si de una BBDD se tratase

const { clientes, vehiculos, alquileres } = data;

// Obtener un solo elemento de una lista por ID
export const getElementById = (lista, id) => {
    return lista.find(elemento => elemento.id === id);
};

// Obtener alquileres por vehículo
export const getAlquileresPorVehiculo = (vehiculoId) => {
    return alquileres.filter(alquiler => alquiler.id_vehiculo === vehiculoId);
};

// Obtener alquileres por cliente
export const getAlquileresPorCliente = (clienteId) => {
    return alquileres.filter(alquiler => alquiler.id_cliente === clienteId);
};

// Obtener vehículos por cliente
export const getVehiculosPorCliente = (clienteId) => {
    const alquileresDelCliente = alquileres.filter(alquiler => alquiler.id_cliente === clienteId);
    const vehiculoIds = alquileresDelCliente.map(alquiler => alquiler.id_vehiculo);
    return vehiculos.filter(vehiculo => vehiculoIds.includes(vehiculo.id));
};

// Obtener clientes por vehículo
export const getClientesPorVehiculo = (vehiculoId) => {
    const alquileresDelVehiculo = alquileres.filter(alquiler => alquiler.id_vehiculo === vehiculoId);
    const clienteIds = alquileresDelVehiculo.map(alquiler => alquiler.id_cliente);
    return clientes.filter(cliente => clienteIds.includes(cliente.id));
};

// Obtener todos los clientes
export const getClientes = () => {
    return clientes;
};

// Añadir un nuevo cliente
export const addCliente = (cliente) => {
    cliente.id = clientes.length + 1;
    clientes.push(cliente);
    return cliente;
};

// Obtener todos los vehículos
export const getVehiculos = () => {
    return vehiculos;
};

// Añadir un nuevo vehículo
export const addVehiculo = (vehiculo) => {
    vehiculo.id = vehiculos.length + 1;
    vehiculos.push(vehiculo);
    return vehiculo;
};

// Obtener todos los alquileres
export const getAlquileres = () => {
    return alquileres;
};

// Añadir un nuevo alquiler
export const addAlquiler = (alquiler) => {
    alquiler.id = alquileres.length + 1;
    alquileres.push(alquiler);
    return alquiler;
};

// Obtener cliente por ID
export const getClienteById = (clienteId) => {
    return getElementById(clientes, clienteId);
};

// Obtener vehículo por ID
export const getVehiculoById = (vehiculoId) => {
    return getElementById(vehiculos, vehiculoId);
};

// Obtener alquiler por ID
export const getAlquilerById = (alquilerId) => {
    return getElementById(alquileres, alquilerId);
};