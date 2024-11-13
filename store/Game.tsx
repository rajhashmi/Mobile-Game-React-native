import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set,get)=>{
    return {
        phase : "ready",
        score: 0,
        land: [],
        setLand: (landObj) => {
            set((state) => ({
                land : [...state.land, landObj],
            }))
        },
        getLand: () => {
            return get().land;  
        },
        start: () =>
            {
                set((state) =>
                {
                    if(state.phase === 'ready')
                        return { phase: 'playing'}
                    return {}
                })
        }
    }
}))