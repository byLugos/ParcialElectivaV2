const express = require('express')
const app = express()
app.set('PORT',process.env.PORT || 3000)


app.listen(app.get('PORT'), ()=>console.log(`Server Ready at port ${app.get('PORT')}`))