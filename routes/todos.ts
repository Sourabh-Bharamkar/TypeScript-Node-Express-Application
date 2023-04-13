import express from 'express'
const router = express.Router()

import { Todo } from '../models/todo'

const todos: Todo[] = []

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos, success: true })
})

router.post('/add', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }

    todos.push(newTodo)
    res.status(201).json({ success: true, message: 'Successfully created' })
})


router.post('/delete', (req, res, next) => {
    const id = req.body.id;
    const todoIndex = todos.findIndex((element) => {
        console.groupCollapsed(element.id)
        console.log(id)
        if (element.id == id) {
            console.log('id and index are matched')
            return
        }
        
    })

    if (todoIndex!=-1) {
        todos.splice(todoIndex, 1)
        res.status(200).json({ success: true, message: 'deleted successfully' })
    }

    else {
        res.status(404).json({ success: false, message: 'item not found' })
    }
})


router.post('/edit', (req, res, next) => {
    const { id, text } = req.body;
    console.log(id)
    const todoIndex = todos.findIndex((element) => {
        return element.id == id;
    })

    console.log(todoIndex)

    if (todoIndex!=-1) {
        todos.splice(todoIndex, 1, req.body)
        res.status(200).json({ success: true, message: 'item eidted successfully' })
    }

    else {
        res.status(404).json({ success: false, message: 'item not found' })
    }


})

export default router;