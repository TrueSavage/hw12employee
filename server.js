const express = require('express')
const { join } = require('path')
const mysql = require('mysql')
const mysql2 = require('mysql2')
const sequelize = require('sequelize')
const maps = require('maps')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.listen(3000)
