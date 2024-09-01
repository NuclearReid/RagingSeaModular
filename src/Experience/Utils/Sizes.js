import EventEmitter from "./EventEmitter"

export default class Sizes extends EventEmitter
{
    constructor()
    {
        super() // If I'm extending a class, I NEED to call a super()


        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () =>
        {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
            this.trigger('resize') // When a resize happens, there is a 'resize' trigger (the trigger can be whatever string I want)
        })
    }


}