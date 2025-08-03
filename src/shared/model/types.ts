export const UserRole = {
  Administrator: 'administrator',
  AdministratorCIB: 'administratorcib',
  Manager: 'manager',
  Controller: 'controller',
  SuperController: 'super_controller',
  Supervisor: 'supervisor',
  Consultant: 'consultant',
  Author: 'author',
  Executor: 'executor',
  Deliveryman: 'deliveryman',
  ControllerUKC: 'logistic_control',
  Specialist: 'specialist',
  SPECIALIST_B2B: 'specialistb2b',
  ONLY_VIEW: 'only_view',
} as const
export type UserRole = (typeof UserRole)[keyof typeof UserRole]

export interface UserPermissions {
  can_credit?: boolean
  can_installment?: boolean
  can_cards?: boolean
  can_mkassa?: boolean
  can_mpost?: boolean
  can_mbusiness?: boolean
  can_open_mbusiness?: boolean
  can_uni_murabaha?: boolean
  can_murabaha?: boolean
  can_hasan?: boolean
  can_m_junior?: boolean
  can_nonresident_card?: boolean
  can_mqr?: boolean
  can_rko?: boolean
  can_chenge_tarif?: boolean
  can_removal_pos?: boolean
  can_chenge_pos?: boolean
  delivery_can_cart?: boolean
  delivery_can_mpost?: boolean
  can_technical_support?: boolean
  сan_subscribe_services?: boolean
  can_kartomat?: boolean
  can_m_bonus?: boolean
}

export interface UserObject extends UserPermissions {
  supervisor?: string
  // region?: Region
  phone: string
  tgm_username: string
  email: string
  first_name: string
  last_login?: string
  last_name: string
  middle_name: string
  id: number
  role: UserRole
  is_active: boolean
  avatar: string
  tgm_user_id: string
  jira_id?: number | string
  units_lending?: {
    id: number
    code: string
    name: string
  }
  inn?: string
  // type_division?: DivisionType
  // main_branch?: UnitBranch
  // branches?: UnitBranch
  project?: number
  executor?: string
  // kartomat?: Kartomat[]
}

export interface ApiError {
  status: number
  data?: {
    type: string
    errors?: Array<{
      code: string
      detail: string
      attr: string
    }>
  }
}
