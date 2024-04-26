const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("<h1>Welcome to root URL of Server</h1>"); 
}); 

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});