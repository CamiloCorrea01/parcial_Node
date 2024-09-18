// productos en memoria
let productos = [
    { id: 1, nombre: 'Producto A', precio: 10, departamento: "Boyacá", ciudad: "Duitama" },
    { id: 2, nombre: 'Producto B', precio: 15, departamento: "Boyacá", ciudad: "Sogamoso"},
    { id: 3, nombre: 'Producto C', precio: 20, departamento: "Cundinamarca", ciudad:"Chia" },
    { id: 4, nombre: 'Producto d', precio: 34, departamento: "Cundinamarca", ciudad:"Bogotá" }
    ];
    
    module.exports = {
    'findAll': async (req, res) => {
        try {
        return res.status(200).json({ state: "Success", data: productos });
        } catch (err) {
        return res.status(500).json({ state: "Error", data: null });
        }
    },
    
    'findById': async (req, res) => {
        const { id } = req.params;
        const producto = productos.find(p => p.id === parseInt(id));
    
        try {
        if (!producto) {
            return res.status(404).json({ state: "Error", message: "Producto no encontrado" });
        }
        return res.status(200).json({ state: "Success", data: producto });
        } catch (err) {
        return res.status(500).json({ state: "Error", data: null });
        }
    },
    // {
    //     "id": 4,
    //     "nombre": "Producto D",
    //     "precio": 25,
    //     "departamento": "Boyacá",
    //      "ciudad": "Tibasosa"
    //   }
    'save': async (req, res) => {
        const { id, nombre, precio, departamento,ciudad } = req.body;
    
        try {
        productos.push({ id, nombre, precio, departamento,ciudad});
        return res.status(200).json({ state: "Success", data: { id, nombre, precio, departamento,ciudad} });
        } catch (err) {
        return res.status(500).json({ state: "Error", data: null });
        }
    },
    // {
    //     "nombre": "Producto D Modificado",
    //     "precio": 30,
    //     "departamento" : "Boyacá",
    //     "ciudad": "Duitama"
    //   }
    'update': async (req, res) => {
        const { idR } = req.params;
        const { id, nombre, precio,departamento,ciudad } = req.body;
    
        try {
        let producto = productos.find(p => p.id === parseInt(idR));
        if (!producto) {
            return res.status(404).json({ state: "Error", message: "Producto no encontrado" });
        }
    
          // Actualiza los campos
        producto.nombre = nombre;
        producto.precio = precio;
        producto.departamento = departamento ;
        producto.ciudad = ciudad;
    
        return res.status(200).json({ state: "Success", data: producto });
        } catch (err) {
        return res.status(500).json({ state: "Error", data: null });
        }
    },
    };
    