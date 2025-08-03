import Number from '../icons/Number.tsx'
import Telegram from '../icons/Telegram'
import Whatsapp from '../icons/Whatsapp.tsx'
import MarkerActive from '../icons/map/IconActive.tsx'
import MarkerSelected from '../icons/map/IconSelect.tsx'
import MarkerGreen from '../icons/map/IconGreen.tsx'
import MarkerPin from '../icons/map/IconPin.tsx'
import Logo from '@shared/icons/iconpack/icons/Logo.tsx'
import Delivery from '@shared/icons/iconpack/icons/Delivery.tsx'

export const iconMap = {
  markerActive: MarkerActive,
  markerSelected: MarkerSelected,
  markerGreen: MarkerGreen,
  markerPin: MarkerPin,
  telegram: Telegram,
  whatsapp: Whatsapp,
  number: Number,
  logo: Logo,
  delivery: Delivery
} as const
