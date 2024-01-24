import { useEffect, useState } from 'react'
import data from '../data/rick.json'
import PackingListItem from './PackingListItem'

// const customData = [
//   {
//       "name": "Bass Guitar",
//       "isPacked": true
//   },
//   {
//       "name": "Driving License",
//       "isPacked": true
//   },
//   {
//       "name": "Photo of the family",
//       "isPacked": false
//   }
// ];

export default function PackingList() {
 
    // const [items, setItems] = useState(customData)

    // function markAsPacked(index) {
    //   setItems([...items].map((item, i) => {
    //     if(i === index) {
    //       return {
    //         name: item.name,
    //         isPacked: !item.isPacked
    //       }
    //     }
    //     else {
    //       return item
    //     }
    //   }))
    // }

    return (
        <>
        <h1>Rick's Road Trip Packing List</h1>
        { data.items.map((item, index) => (
          <PackingListItem index={index} name={item.name} isPacked={item.isPacked} />
        )) }
        </>
    )
}