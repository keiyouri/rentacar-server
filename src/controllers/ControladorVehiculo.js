app.get('/api/vehiculos/:id', (req, res) => {
    const vehiculoId = parseInt(req.params.id);
    const vehiculo = getVehiculoById(vehiculoId);
    const clientes = alquileres
        .filter(alquiler => alquiler.vehiculoId === vehiculoId)
        .map(alquiler => ({ cliente: alquiler.cliente, tiempo: alquiler.tiempo }));

    res.json({ ...vehiculo, clientes });
});
