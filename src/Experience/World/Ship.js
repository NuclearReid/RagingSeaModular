import * as THREE from 'three'
import Experience from '../Experience'

export default class ship
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time


        this.resource = this.resources.items.shipModel

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.05, 0.05, 0.05)
        this.model.position.set(0, 0.1, 0)
        
        this.scene.add(this.model)
    }

    update()
    {

    }
}