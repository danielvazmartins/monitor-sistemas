interface Service {
    name: string,
    url: string
}

export interface System {
    name: string
    services: Service[]
}