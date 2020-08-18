import createQuery  from './serviceConfigurations'
import tagImage     from './tagImage'

const sendImages = (pathlist, servicesToSendTo, configuration) => {
    
    
    // Construct queries from configurations of selected services
    const queriesBasedOnConf = servicesToSendTo
        .map(service => configuration[service])
        .map(configuration => pathlist
            .filter(path => path.selected)
            .map(path => createQuery(configuration, path)))
        .flat()

    const promises = queriesBasedOnConf.map(q => tagImage(q))
    
    return Promise.all(promises).then(values => {
        const result = values.flat() // values is a nested array: each service is it's own array

        console.log(result)

        return result
    })
    

}

export default sendImages