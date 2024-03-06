const express =require('express')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} =require('../controllers/workoutController')
const router = express.Router() 


// get  all workouts 

router.get('/',getWorkouts)

//get a single wourkout 
router.get('/:id',getWorkout)

//POST a new workout 
router.post('/',createWorkout)
//delete a workout 
router.delete('/:id',deleteWorkout)

//update a workoutt 
router.patch('/:id',updateWorkout)

module.exports = router