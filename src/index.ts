import { AppDataSource } from "./data-source"

AppDataSource.initialize()
.then(async () => {
    console.log('server has started');
})
.catch(error => console.log(error))
