import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set)=>{
    return {
        phase : "ready",
        score: 0,
        land: [],
        setLand: (landObj) => {
            set((state) => ({
                land : [...state.land, landObj],
            }))
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