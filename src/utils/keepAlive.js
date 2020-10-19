import {getCategories} from '../components/apiCore'
import cron from 'node-cron'




const keepAlive = (() => {
   
    const cronJob = cron.schedule('0 */25 * * * *', () => {
  
      getCategories()
        .then(res => console.log(`response-ok: ${res.ok}, status: ${res.status}`)
        .catch(err => console.log(err) )
        )
    });
  
    cronJob.start();
  })

  export default keepAlive


