import EventEmitter from "./EventEmitter";
import Experience from "../Experience";


let assetsReady = false
export default class Time extends EventEmitter
{
    constructor()
    {
        super()
        
        // Setup
        this.experience = new Experience()
        this.resources = this.experience.resources

        this.start = Date.now() // The start of the time stamp
        this.current = this.start 
        this.elapsed = 0
        this.delta = 16 // This is 16 cause that's about how long in ms a frame is at 60fps


        // I can't figure this out yet
        // Update uTime uniform
        // this.uTime = this.experience.world.water



        window.requestAnimationFrame(() => // Don't call tick() immediatly cause then the delta will be 0 and can cause issues
        {
            this.tick()
        })

    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start
              
        this.resources.on('ready', () =>
        {
            assetsReady = true
            // console.log(this.experience.world.water.waterMaterial.uniforms.uTime.value)
           
        })
        if(assetsReady)
        {
            this.experience.world.water.waterMaterial.uniforms.uTime.value = this.elapsed * 0.001

            // console.log(this.experience.world.ship.model.rotation.y)

            this.experience.world.ship.model.rotation.z = 0.25 * Math.sin(this.elapsed * 0.0009)

            
            // console.log(this.experience.world.water.waterMaterial.uniforms.uTime.value )

        }
        

        this.trigger('tick')

        window.requestAnimationFrame(() =>
            {
                this.tick()
            })
    }
}