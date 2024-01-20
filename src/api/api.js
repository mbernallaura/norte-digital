export let norteDigital = {
    id: 1,
    username: 'roberto',
    password: '1234',
    costomers:[
        {
            id: 1,
            name: 'Diego Martinez',
            branches:[
                {
                    id:1,
                    nameBranch: 'Colombia',
                    currency: 'COP',
                    products:[
                        {
                            id: 1,
                            name: 'Cuaderno',
                            price: 1500,
                        },
                        {
                            id: 2,
                            name: 'Regla',
                            price: 3000
                        }
                    ],
                    sales:[]
                },
                {
                    id:2,
                    nameBranch: 'México',
                    currency: 'MXN',
                    products:[
                        {
                            id: 1,
                            name: 'Teclado',
                            price: 1200,
                        },
                        {
                            id: 2,
                            name: 'Audifonos',
                            price: 470
                        }
                    ],
                    sales:[]
                }
            ],
        },
        {
            id: 2,
            name: 'Camila Suarez',
            branches:[
                {
                    id:1,
                    nameBranch: 'Argentina',
                    currency: 'ARS',
                    products:[
                        {
                            id: 1,
                            name: 'Blusa',
                            price: 15000,
                        },
                        {
                            id: 2,
                            name: 'Jean',
                            price: 19000
                        },
                        {
                            id: 2,
                            name: 'Medias',
                            price: 1500
                        }
                    ],
                    sales:[]
                }
            ],
        }
    ]
};