import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [
        {
            title: "tomato",
            price: 119.90,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "vegetables"
        },
        {
            title: "potato",
            price: 12.99,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "vegetables"
        },
        {
            title: "pumpkin",
            price: 2.99,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "vegetables"
        },
        {
            title: "beetroot",
            price: 7.85,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1506807803488-8eafc15316c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "vegetables"
        },
        {
            title: "strawberry",
            price: 7.85,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "fruits"
        },
        {
            title: "apple",
            price: 2.99,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1512578659172-63a4634c05ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "fruits"
        },
        {
            title: "banana",
            price: 7.85,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1561058325-8c99b449e3b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "fruits"
        },{
            title: "citrus",
            price: 2.99,
            description: "raandom shandiz",
            imageUrl: "https://images.unsplash.com/photo-1461534204375-bd3ba51cca78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            supplier: "name of supplier",
            category: "fruits"
        }
    ],
    categories: [
        {
            name: "vegetables",
            imageUrl: "/vegies/lattuce.jpg"
        },
        {
            name: "fruits",
            imageUrl: "https://images.unsplash.com/photo-1461534204375-bd3ba51cca78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
    ],
    suppliers: [
        {
            name: "dunno",
            imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
            products: ["fruit", "vegetable", "more"],
            locations: ["pretoria", "johannesburg", "east london"],
            telephone: "0124356157",
            email: "dunno@market.com"
        },
        {
            name: "toys4u",
            imageUrl: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
            products: ["toys"],
            locations: ["pretoria", "johannesburg", "east london"],
            telephone: "0124356157",
            email: "dunno@market.com"
        }
    ]
}


const reducer = (state = initialState, action) => {
    switch(action) {
        case actionTypes.ADDTO_CART: 
            return state;
        default:
            return state;
    }
}


export default reducer;