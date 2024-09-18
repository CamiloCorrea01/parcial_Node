git clone https://github.com/CamiloCorrea01/parcial_Node.git
cd parcial_Node

INTERFAZ
-ver productos
-agregar productos

Endpoints
GET /product: Devuelve una lista de todos los productos en formato JSON.

POST /product: Permite agregar un nuevo producto. El cuerpo de la solicitud debe contener un objeto JSON con los siguientes campos:

id: ID del producto
nombre: Nombre del producto
precio: Precio del producto
departamento: Departamento donde se encuentra el producto
ciudad: Ciudad donde se encuentra el producto

Ejemplo de Datos
El formulario de agregar producto requiere los siguientes campos:

ID: Número único para el producto
Nombre: Nombre descriptivo del producto
Precio: Precio del producto en formato numérico
Departamento: Departamento donde se encuentra el producto
Ciudad: Ciudad donde se encuentra el producto
