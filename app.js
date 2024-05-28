const express = require('express')
const PORT = 5000
const bodyParser = require('body-parser');
const hotelsRoutes = require('./routes/hotels')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/hotels', hotelsRoutes)


app.get('/', (req, res) => {
    res.render('index', { title: 'Hello Gooup1' });
  });

  
app.listen(PORT, () =>{
    console.log('Server run on https://localhost:', PORT)
})