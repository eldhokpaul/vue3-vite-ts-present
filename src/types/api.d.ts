export interface Tab {
  id: string
  name: string
  title: string
  icon: string
  active: string[]
  disabled: string[]
  inactive: string[]
  name: string
}

export interface Plugin {
  id: string
  name: string
  title: string
  description: string
}

export interface Dashboard {
  tabs: string[]
  tabdata: Record<string, Tab>
  plugins: Record<string, Plugin>
}

export interface Root {
  data: Dashboard
  errors: any
}
