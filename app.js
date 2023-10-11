const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send("How are you,I am good")

})
app.listen(8080, () => {
    console.log("Server running 8080");
})