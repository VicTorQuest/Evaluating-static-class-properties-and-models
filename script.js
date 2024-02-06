// creating a class
class showingStaticClass {
    //instance projperties
    usa = 'north america'
    russia = 'europe'
    china = 'asia'
    brazil = 'south america'
    nigeria = 'africa'
    new_zealand = 'australia'

    // class property
    static defaultContinent = 'africa'



    // instance method

    totalPopulatiuon () {
        console.log('Africa: 1.216 billion')
        console.log('North America: 579 million')
        console.log('South America: 422.5 million')
        console.log('Asia: 4.561 billion')
        console.log('Europe: 746.4 million')
        console.log('australia: 25.69 million')
        console.log('Antartica: 1,300 to 5,100 (seasonal)')
    }


    // class method
    static totalCountries() {
        console.log('Africa: 54')
        console.log('North America: 23')
        console.log('South America: 12')
        console.log('Asia: 48')
        console.log('Europe: 50')
        console.log('Australia: 3')
        console.log('Antartica: 0')
    }
    

}

// creating an instace of the class
const continents = new showingStaticClass()


// accessing the instance properties
console.log(continents.russia)
console.log(continents.usa)
console.log(continents.china)
console.log(continents.brazil)
console.log(continents.nigeria)
console.log(continents.new_zealand)

console.log('-----')


// accessing the class static property
console.log(showingStaticClass.defaultContinent)


console.log('-----')

// accessing the instance method
continents.totalPopulatiuon()


console.log('-----')

// acessing the class static method
showingStaticClass.totalCountries()
