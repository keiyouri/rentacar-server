import { getClientes, createCliente, updateCliente, deleteCliente } from '../../models/cliente';
import { authMiddleware } from '../../middleware/auth';

export default function handler(req, res) {
    authMiddleware(req, res, () => {
        switch (req.method) {
            case 'GET':
                res.status(200).json(getClientes());
                break;
            case 'POST':
                const nuevoCliente = createCliente(req.body);
                res.status(201).json(nuevoCliente);
                break;
            case 'PUT':
                const { id, ...updatedCliente } = req.body;
                const clienteActualizado = updateCliente(id, updatedCliente);
                if (clienteActualizado) {
                    res.status(200).json(clienteActualizado);
                } else {
                    res.status(404).json({ message: 'Cliente no encontrado' });
                }
                break;
            case 'DELETE':
                const { id: idToDelete } = req.body;
                const clienteEliminado = deleteCliente(idToDelete);
                if (clienteEliminado) {
                    res.status(200).json(clienteEliminado);
                } else {
                    res.status(404).json({ message: 'Cliente no encontrado' });
                }
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
}
