import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Camera from './Camera'
import Renderer from './Renderer'
import Resources from './Utils/Resources'
import sources from './sources'
import World from './World/World'
// import Debug from './Utils/Debug'


let instance = null

export default class Experience
{
    constructor(canvas)
    {
        if(instance)
        {
            return instance
        }
        instance = this
        window.experience = this

        this.canvas = canvas

        // this.debug = new Debug()
        this.scene = new THREE.Scene()
        this.sizes = new Sizes()
        this.resources = new Resources(sources)
        this.time = new Time()
        this.world = new World()
        this.camera = new Camera()
        this.renderer = new Renderer()



        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        this.time.on('tick', () =>
        {
            this.update()
        })

    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()

    }

    update()
    {
        this.camera.update()
        this.renderer.update()
    }




}