const { Router } = require('express')
const router = Router()

router.get("/api/productos-test", async (req, res) => {
    console.log('PRODUCTOS TEST')
    const response = await productoDao.listarAll()
    res.status(response.http_res).json('PRODUCTOS TEST')
    }
);

module.exports = router