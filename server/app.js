const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 9000;


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});