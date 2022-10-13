import axios from "./axios.js";

const login = async () => {
    try {
        const response = await axios.post(`/login`, {
            username: 'tito20@gmail.com',
            password: 'asd123',
        });
    } catch (err) {
        console.log(err)
    }
}

const getProductAllProducts = async () => {
    try {
        const response = await axios.get(`/api/productos`, {
        });

            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

const getProductOneProduct = async (id) => {
try {
    const response = await axios.get(`/api/productos/${id}`, {
    });

        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};

const createProduct = async () => {
    try {
        const response = await axios.post(`/api/productos`, {
            timestamp: 1234567890,
            title: 'Nuevo producto Axios',
            code: 'Axi0',
            thumbnail: 'https://images.opencollective.com/axios/f4438d6/logo/256.png',
            price: 1000000,
            stock: 9999999,
        });

            console.log(response.data);
            await getProductOneProduct(response.data.id);
            console.log('SE MODIFICA NUEVO PRODUCTO')
            await modifyProduct(response.data.id)
            console.log('SE BORRA NUEVO PRODUCTO')
            await deleteProduct(response.data.id)
        } catch (err) {
            console.log(err);
    }
}

const modifyProduct = async (id) => {
    try {
        const response = await axios.put(`/api/productos/${id}`, {
            timestamp: 1234567890,
            title: 'Nuevo producto Axios (Modificado)',
            code: 'Axi0-v2',
            thumbnail: 'https://images.opencollective.com/axios/f4438d6/logo/256.png',
            price: 2000000,
            stock: 0,
        });

            console.log(response.data);
        } catch (err) {
            console.log(err);
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`/api/productos/${id}`, {
        });
            console.log(response.data);
        } catch (err) {
            console.log(err);
    }
}

await login()
console.log('TODOS LOS PRODUCTOS')
await getProductAllProducts();
console.log('SOLO PRODUCTO ID: 633b6b2a06ecd05b847e75b6')
await getProductOneProduct("633b6b2a06ecd05b847e75b6");
console.log('SE CREA NUEVO PRODUCTO AXIOS Y SE LISTA')
await createProduct();
