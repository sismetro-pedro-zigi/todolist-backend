const express = require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("API está funcional");
});

app.listen(PORT, () => {
    console.log(`Server está rodando na porta ${PORT}`);
});