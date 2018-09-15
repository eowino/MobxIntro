import { observable, computed, action } from 'mobx';

const T = new class Temperature {
    @observable unit = 'C'
    @observable temperatureCelsius = '25'

    @computed get temperatureKelvin() {
        return this.temperatureCelsius * (9/5) + 32
    }
    
    @computed get temperatureFahrenheit() {
        return this.temperatureCelsius + 273.15
    }

    @computed get temperature() {
        switch(this.unit) {
            case "K": return this.temperatureKelvin + "°K"
            case "F": return this.temperatureFahrenheit + "°F"
            default: return this.temperatureCelsius + "°C"
        }
    }

    @action setUnit(newUnit) {
        this.unit = newUnit
    }
    
    @action setTemperature(temperature) {
        this.temperatureCelsius = temperature
    }

    @action setUnitTemperature(unit, temperature) {
        this.unit = unit;
        this.temperatureCelsius = temperature;
    }
}

export default T;