import * as React from 'react'
import * as Styled from './styled'
import { MapProps } from './types'
import ArcGISMap from '@arcgis/core/Map'
import esriConfig from '@arcgis/core/config'
import Graphic from '@arcgis/core/Graphic'
import Point from '@arcgis/core/geometry/Point'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import MapView from '@arcgis/core/views/MapView'

export const Map = ({ lat, lng }: MapProps) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref.current) {
      esriConfig.apiKey =
        'AAPKd57f2ae172ff4db1bb4d7c011dc66cd0-Hxsr_s2YUznHolDxLQUX73vy5JKCUksRljFAj5leIzl7AqCKAz_p4-G0ThJyyb1'

      const map = new ArcGISMap({
        basemap: 'gray-vector',
      })

      new MapView({
        map,
        container: ref.current,
        center: [lng, lat],
        zoom: 8,
      })

      const graphicsLayer = new GraphicsLayer()
      map.add(graphicsLayer)

      const point = new Point({
        longitude: lng,
        latitude: lat,
      })

      const simpleMarkerSymbol = {
        type: 'country-capital',
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1,
        },
      }

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      })

      graphicsLayer.add(pointGraphic)
    }
  }, [lat, lng])

  return (
    <Styled.Container>
      <Styled.Map ref={ref} />
    </Styled.Container>
  )
}
