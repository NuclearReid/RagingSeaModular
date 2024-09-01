import EventEmitter from "./EventEmitter";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super() // needed cause it 'extends EventEmitter'

        // Options
        this.sources = sources

        // Setup
        this.items = {} // will have the loaded resources
        this.toLoad = this.sources.length // The number of sources to load
        this.loaded= 0 // The number of sources that have been loaded


        this.setLoaders()
        this.startLoading()
    }

    setLoaders() // setup the loaders
    {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading() // Start loading the loaders/what's in there
    {
        // Load each source
        for(const source of this.sources)
        {
            if(source.type === 'gltfModel') // look at source.js to see what source looks like
            {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file)=>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'texture') // look at source.js to see what source looks like
            {
                this.loaders.textureLoader.load(
                    source.path,
                    (file)=>
                    {
                       this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'cubeTexture') // look at source.js to see what source looks like
            {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file)=>
                    {
                       this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source, file) // To check how much has been loaded, and put the resources into '.items'
    {
        this.items[source.name] = file

        this.loaded++

        if(this.loaded === this.toLoad)
        {
            this.trigger('ready') // this goes to .world
        }
    }

}