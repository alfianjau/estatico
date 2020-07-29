import React, { useState } from 'react'
import { Flex } from '@chakra-ui/core'
import GoogleMapReact from 'google-map-react'

function ListingMap (props) {
  const [initial] = useState({
    map: {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
    },
  })

  return (
    <Flex width="100%" className="listings-map" {...props}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
        defaultCenter={initial.map.center}
        defaultZoom={initial.map.zoom}
        options={props.options}
      />
    </Flex>
  )
}

export default ListingMap
