export interface CompanyDetails {
    name: string
    country: string
    city: string
    type: number
    address: string
    link: string
    workInterval: []
}

export interface ICompanyInfo {
    // info: CompanyDetails[]
    info: any
    rootHref?: string
    onlyDescription?: boolean
    index?: number
}