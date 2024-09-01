import Experience from "../Experience";
import * as THREE from 'three'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setSunlight()
        this.setDirectionalLight()
    }

    setSunlight()
    {
        this.sunLight = new THREE.AmbientLight('#ffffff')
        this.scene.add(this.sunLight)
    }
    setDirectionalLight()
    {
        this.directionalLight = new THREE.DirectionalLight('#4da4f166', 1.2)
        this.directionalLight.position.set(1, 2, 1)
        this.scene.add(this.directionalLight)
        this.directionalLightHelper = new THREE.DirectionalLightHelper(this.directionalLight)
        this.scene.add(this.directionalLightHelper)
        this.directionalLightHelper.visible = false


    }
}