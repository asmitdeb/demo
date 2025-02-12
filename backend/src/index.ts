import express from 'express'
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.status(200).json({message: "mechatronics"});
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})