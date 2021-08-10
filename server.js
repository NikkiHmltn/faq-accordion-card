const express = require('express')
const app = express()
const path = require('path');

const PORT = process.env.PORT || 4000

app.use(express.static(__dirname + '/public'));

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(PORT, () => {
    console.log("Up and running!")
})