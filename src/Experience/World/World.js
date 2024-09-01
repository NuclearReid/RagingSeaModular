import * as THREE from 'three'
import Experience from "../Experience";
import Environment from "./Environment";
import Water from './Water'
import Ship from './Ship';

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        //Test Mesh
        /* const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )

        this.scene.add(testMesh) */


        this.resources.on('ready', () =>
        {
            this.water = new Water()
            this.ship = new Ship()
            this.environment = new Environment()
        })

    }
    update()
    {
        if(this.water)
        {
            this.water.update()
        }
    }
}