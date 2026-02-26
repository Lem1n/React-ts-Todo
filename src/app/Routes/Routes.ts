export const ROUTES = {
    HOME: '/',
    TODO:'/:id'
} as const

export type PatchParams = {
    [ROUTES.TODO]: {
        id: string
    }
}

declare module "react-router-dom" {
    interface Register {
        params: PatchParams
    }
}


