const toys = [
    {
        id: 1,
        name: 'Buzz Lightyear',
        mfr: "Disney",
        price: 39.84,

    },

    {
        id: 2,
        name: "Woody",
        mfr: "Disney",
        price: 54.92,

    },

    {
        id: 3,
        name: "Rex",
        mfr: 'Disney',
        price: 12.99,

    }
]



const boPeep = {
    id:4,
    name: "Bo Peep",
    mfr: "Disney",
    price: 20.00,
}

toys.push(boPeep)

const ducky = {
    id:5,
    name:"Ducky",
    mfr:"Disney",
    price:8.81,
}

toys.push(ducky)

for (const toy of toys)
    toy.price = toy.price * 1.05

for (const toy of toys) {
    console.log(`The ${toy.name} action figure from ${toy.mfr} only costs the low low price of $${toy.price}!`)
}
