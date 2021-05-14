import * as functions from "firebase-functions";
import * as express from 'express'
import { addEntry,deleteEntry,getAllEntries, updateEntry, } from './entryController'

const appT = express()

appT.get('/', (req,res)=> res.status(200).send('Hey there!'))
appT.post('/entries', addEntry)
appT.get('/entries', getAllEntries)
appT.patch('/entries/:entryId', updateEntry)
appT.delete('/entries/:entryId', deleteEntry)


exports.app = functions.https.onRequest(appT)
