// 


const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db')


router.get('/', async (req, res) => {
    try {
            const activities = await Activity.findAll({  // get para el select en el front que ordena por actividades
                include: Country  
                })
                return res.json(activities) 
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    const { nombre, dificultad, duracion, temporada, pais} = req.body
        console.log(pais)
    try {
        const newActivity = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada
        })

        const pushCountry = await Country.findOne({
            where: {
                id: pais,
            }
        })
        await newActivity.addCountry(pushCountry) 
        res.sendStatus(201)

    } catch (error) {
        res.send(error)
    }
})

//pensar router.delete /:name
router.delete("/:name", async (req, res, next) => {
  const { name } = req.params;
  try {
    const activity = await Activity.destroy({
      where: {
        name
      }
    });

   res.json(activity)
  }catch(err){
      next(err)
  }
 })


 module.exports = router;

//-----------------------------------------------
//  router.get a / devuelve todas las actividades
// router.get("/", async (req, res) => {
//     const allActs = await allActivities();
//     res.status(200).send(allActs)
// })


// router.post('/activities', async (req, res)=>{
//     try{
//     const {countryId, nombre, dificultad, duracion, temporada}=req.body;

//     const [activities] = await Activities.create({
//         where: {
//             nombre,
//             dificultad,
//             duracion,
//             temporada
//     });

//     await activities.setCountries(countryId);
//      res.json(activities);
//     }catch(error){
//         (error);
//     }
    
//     });



//  ruta put
//   const updateActivityName = async(req, res) => {
//     await Activities.update({
//             nombre: req.body.nombre
//         }, {
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((activities) => {
//             res.status(200).json({ msg: `activity ${activities} modified!` });
//         })
//         .catch(err => console.log(err))
// };