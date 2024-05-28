const express = require('express')
const Router = express.Router()
const con = require('../database/db')


Router.get('/', (req, res) =>{
    con.query('SELECT * FROM hotels', (err, results) => {
        if (err) throw err;
        res.render('list', { hotels: results });
      })
})
Router.get('/new', (req, res) => {
    res.render('create');
  });
  
Router.post('/new', (req, res) => {
    const { name, price } = req.body;
    connection.query('INSERT INTO hotels (name, price) VALUES (?, ?)', [name, price], (err, results) => {
        if (err) throw err;
        res.redirect('/hotels');
    });
});
  
// Edit hotel
Router.get('/edit/:id', (req, res) => {
    const { id } = req.params.id;
    connection.query('SELECT * FROM hotels WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('edit', { hotel: results[0] });
    });
});
  
Router.post('/edit/:id', (req, res) => {
    const { id } = req.params.id;
    const { name, price } = req.body;
    connection.query('UPDATE hotels SET name = ?, price = ? WHERE id = ?', [name, price, id], (err, results) => {
        if (err) throw err;
        res.redirect('/hotels');
    });
});
  
  // Delete hotel
Router.post('/delete/:id', (req, res) => {
    const { id } = req.params.id;
    connection.query('DELETE FROM hotels WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.redirect('/hotels');
    });
});
  
module.exports = Router;