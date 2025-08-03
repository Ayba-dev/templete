import type { SVGProps } from '../../model/types.ts'

export default ({ size, ...props }: SVGProps) => (
  <svg width={size} height={size} viewBox="0 0 112 124" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_d_872_19244)">
      <path d="M36 44C36 32.9543 44.9543 24 56 24C67.0457 24 76 32.9543 76 44C76 55.0457 67.0457 64 56 64C44.9543 64 36 55.0457 36 44Z" fill="white"/>
      <path d="M56 24.5C66.7696 24.5 75.5 33.2304 75.5 44C75.5 54.7696 66.7696 63.5 56 63.5C45.2304 63.5 36.5 54.7696 36.5 44C36.5 33.2304 45.2304 24.5 56 24.5Z" stroke="#16A34A"/>
      <g clip-path="url(#clip0_872_19244)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 36.6665V51.3332H48.6667V36.6665H50Z" fill="#16A34A"/>
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M48.6667 38.3332C48.6667 37.965 48.9651 37.6665 49.3333 37.6665H62.4172C63.1906 37.6665 63.6713 38.5069 63.2791 39.1735L61.0366 42.9858C60.6684 43.6117 60.6684 44.388 61.0366 45.0139L63.2791 48.8261C63.6713 49.4928 63.1906 50.3332 62.4172 50.3332H49.3333C48.9651 50.3332 48.6667 50.0347 48.6667 49.6665V38.3332Z" fill="#16A34A"/>
      </g>
      <rect x="55" y="64" width="2" height="12" fill="#16A34A"/>
    </g>
    <defs>
      <filter id="filter0_d_872_19244" x="0" y="0" width="112" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="12"/>
        <feGaussianBlur stdDeviation="18"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_19244"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_872_19244" result="shape"/>
      </filter>
      <clipPath id="clip0_872_19244">
        <rect width="16" height="16" fill="white" transform="translate(48 36)"/>
      </clipPath>
    </defs>
  </svg>

)
