const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routes/task.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("API está funcional");
});

app.listen(PORT, () => {
    console.log(`Server está rodando na porta ${PORT}`);
});