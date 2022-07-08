import {AppDataSource} from '../src/database/database'

AppDataSource.initialize()
    .then(() => {
        console.log(`Data Source has been initialized! ${Date.now()}`)
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
});