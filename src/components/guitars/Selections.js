import Series_component from './Series_component'
import Compare from '../Compare'

const Selections = [
    {
        type: 'Natural Series',
        img: 'temp',
        path: '/naturalseries',
        component: Series_component,
        category: 'naturalSeries'
    }, {
        type: 'Deluxe Series',
        img: 'temp',
        path: '/deluxeseries',
        component: Series_component,
        category: 'deluxeSeries'
    }, {
        type: 'Premium Series',
        img: 'temp',
        path: '/premiumseries',
        component: Series_component,
        category: 'premiumSeries'
    }, {
        type: 'Signature Series',
        img: 'temp',
        path: '/signatureseries',
        component: Series_component,
        category: 'signatureSeries'
    }, {
        type: 'Compare',
        img: 'temp',
        path: '/compare',
        component: Compare,
        category: ''
    }
]

export default Selections