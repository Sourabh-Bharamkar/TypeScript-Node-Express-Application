import express from 'express'

const app=express();

import bodyParser from 'body-parser';
import todosRoutes from './routes/todos'

app.use(bodyParser.json())
app.use(todosRoutes)

app.listen(3000,()=>{
 console.log('Listening on PORT 3000')
})