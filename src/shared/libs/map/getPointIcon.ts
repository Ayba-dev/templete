import L from 'leaflet'
// поправь путь до своего типа

export const getPointIcon = (
  point: any,
  activeId: null | string,
  selectedOrderIds: any[],
) => {
  if (selectedOrderIds.some((order) => order.id === point.id)) {
    return new L.Icon({
      iconUrl: '/new/assets/mapLogo/Point-select.svg',
      iconSize: [122, 122],
      iconAnchor: [51, 56],
      popupAnchor: [0, -32],
    })
  }

  if (activeId === point.id) {
    return new L.Icon({
      iconUrl: '/new/assets/mapLogo/Point-active.svg',
      iconSize: [122, 122],
      iconAnchor: [51, 56],
      popupAnchor: [0, -32],
    })
  }

  const iconUrl =
    point.status === 'waiting'
      ? '/new/assets/mapLogo/Point-green.svg'
      : '/new/assets/mapLogo/Point-pin.svg'

  return new L.Icon({
    iconUrl,
    iconSize: [52, 52],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}
