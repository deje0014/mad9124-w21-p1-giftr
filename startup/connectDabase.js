import mongoose from 'mongoose'

export default function () {
    mongoose
    .connect('mongodb://localhost:27017/mad9124', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(()=>{
        debug('Successfully connected to MongoDB')
    })
    .catch((err)=>{
        debug('Error connecting to MongoDB', err.message)
        process.exit(1)
    })
}