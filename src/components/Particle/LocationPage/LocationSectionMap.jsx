import React, { useState } from 'react'
import { Flex } from '@chakra-ui/core'
import GoogleMapReact from 'google-map-react'

function LocationSectionMap () {
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
    <Flex height="30rem" width="100%" className="location-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
        defaultCenter={initial.map.center}
        defaultZoom={initial.map.zoom}
        options={{ streetViewControl: true }}
      />
    </Flex>
  )
}

export default LocationSectionMap
