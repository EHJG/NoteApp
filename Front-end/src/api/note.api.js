import axios from 'axios'

const noteApi = axios.create({
    baseURL:'http://127.0.0.1:8000/notes/api/v1/notes/'
})

export const getAllNotes = () => noteApi.get('/')

export const createNote = (note) => noteApi.post('/', note)

export const deleteNote = (id) => noteApi.delete(`/${id}`)

export const updateNote = (id, note) => noteApi.put(`/${id}/`, note)

export const getNote = (id) => noteApi.get(`/${id}/`)