import React from 'react'
import Seriescomponent from '../guitarSelectionComponents/Seriescomponent'
import Shapeselection from '../guitarSelectionComponents/Shapeselection'
import Woodselection from '../guitarSelectionComponents/Woodselection'
import Cutawaypickup from '../guitarSelectionComponents/Cutawaypickup'
import Ownselection from '../guitarSelectionComponents/Ownselection'
import Compare from '../guitarSelectionComponents/Compare'
import Customshop from '../../customshop/Customshop'

const Selections = [
    {
        type: 'Natural Series',
        img: 'temp',
        path: '/naturalseries',
        component: <Seriescomponent />
    }
    ,
    {
        type: 'Deluxe Series',
        img: 'temp',
        path: '/deluxeseries',
        component: <Seriescomponent />
    },
    {
        type: 'Premium Series',
        img: 'temp',
        path: '/premiumseries',
        component: <Seriescomponent />
    },
    {
        type: 'Signature Series',
        img: 'temp',
        path: '/signatureseries',
        component: <Seriescomponent />
    },
    {
        type: 'Edition Series',
        img: 'temp',
        path: '/editionseries',
        component: <Seriescomponent />
    },
    {
        type: 'Custom Shop',
        img: 'temp',
        path: '/customshop',
        component: <Customshop />
    },
    {
        type: 'Shape Selection',
        img: 'temp',
        path: '/shapeselection',
        component: <Shapeselection />
    },
    {
        type: 'Wood Selection',
        img: 'temp',
        path: '/woodselection',
        component: <Woodselection />
    },
    {
        type: 'Cutaway/Pickup',
        img: 'temp',
        path: '/cutawaypickup',
        component: <Cutawaypickup />
    },
    {
        type: 'Own Selection',
        img: 'temp',
        path: '/ownselection',
        component: <Ownselection />
    },
    {
        type: 'Compare',
        img: 'temp',
        path: '/compare',
        component: <Compare />
    }
]

export default Selections