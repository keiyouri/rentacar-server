import { getAlquileres, createAlquiler, updateAlquiler, deleteAlquiler } from '../../models/alquiler';
import { authMiddleware } from '../../middleware/auth';

export default function handler(req, res) {
    authMiddleware(req, res, () => {
        switch (req.method) {
            case 'GET':
                res.status(200).json(getAlquileres());
                break;
            case 'POST':
                const nuevoAlquiler = createAlquiler(req.body);
                res.status(201).json(nuevoAlquiler);
                break;
            case 'PUT':
                const { id, ...updatedAlquiler } = req.body;
                const alquilerActualizado = updateAlquiler(id, updatedAlquiler);
                if (alquilerActualizado) {
                    res.status(200).json(alquilerActualizado);
                } else {
                    res.status(404).json({ message: 'Alquiler no encontrado' });
                }
                break;
            case 'DELETE':
                const { id: idToDelete } = req.body;
                const alquilerEliminado = deleteAlquiler(idToDelete);
                if (alquilerEliminado) {
                    res.status(200).json(alquilerEliminado);
                } else {
                    res.status(404).json({ message: 'Alquiler no encontrado' });
                }
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
}
