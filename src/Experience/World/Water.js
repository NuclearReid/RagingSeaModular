import * as THREE from 'three'
import Experience from '../Experience'
import vertexWaterShader from './shaders/water/vertex.glsl'
import fragmentWaterShader from './shaders/water/fragment.glsl'

export default class Water
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.waterGeometry = new THREE.PlaneGeometry(3, 3, 512, 512)
    }

    setMaterial()
    {
        const debugObject = {}

        debugObject.surfaceColor = '#9bd8ff'
        debugObject.depthColor = '#186691'


        this.waterMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexWaterShader,
            fragmentShader: fragmentWaterShader,
            uniforms: {
                uTime: { value: 0 }, // update this in the tick function

                // Big Waves
                uBigWavesElevation: { value: 0.16 },
                uBigWavesFrequency: { value: new THREE.Vector2(4.0, 1.5)},
                uBigWaveSpeed: { value: 0.75},

                // Small Waves
                uSmallWavesElevation: { value: 0.15 },
                uSmallWavesFrequency: { value: 3.0 },
                uSmallWavesSpeed: { value: 0.25 },
                uSmallIterations: { value: 3.0 },

                // colors
                uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
                uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
                uColorOffSet: { value: 0.322},
                uColorMultiplier: { value: 2.39 },
            }
        })
    }

    setMesh()
    {
        const water = new THREE.Mesh(this.waterGeometry, this.waterMaterial)
        water.rotation.x = - Math.PI * 0.5
        this.scene.add(water)
    }
}