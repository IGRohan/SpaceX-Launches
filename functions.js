module.exports = {
    /**
     * 
     * @param {id} id ID of the launchpad
     * 
     * @returns Launchpad Name (String)
     * 
     */
    getLaunchpad(id) {
        if(id === '5e9e4501f5090910d4566f83') {
            return 'Vandenberg Air Force Base Space Launch Complex 3W'
        } else if(id === '5e9e4501f509094ba4566f84') {
            return 'Cape Canaveral Space Force Station Space Launch Complex 40'
        } else if(id === '5e9e4502f5090927f8566f85') {
            return 'SpaceX South Texas Launch Site'
        } else if(id === '5e9e4502f509092b78566f87') {
            return 'Vandenberg Air Force Base Space Launch Complex 4E'
        } else if(id === '5e9e4502f509094188566f88') {
            return 'Kennedy Space Center Historic Launch Complex 39A'
        }
        return 'Unknown'
    },
    
    /**
     * 
     * @param {id} id ID of the rocket
     * 
     * @returns Rocket Image URL (String)
     * 
     */
    getRocket(id) {
        const falcon9 = require('./data/falcon9.json')
        const falconheavy = require('./data/falconheavy.json')
        const starship = require('./data/starship.json')
        if(id === '5e9d0d95eda69973a809d1ec') {
            return falcon9
        } else if(id === '5e9d0d95eda69974db09d1ed') {
            return falconheavy
        } else if(id === '5e9d0d96eda699382d09d1ee') {
            return starship
        }
    }
}