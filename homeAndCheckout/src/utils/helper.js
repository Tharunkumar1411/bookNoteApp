import { REGX_FORMET_AMOUNT } from "./constants"

export const formatAmount = (amount) => {
    if(amount){
        return `₹ ${Number(amount)?.toFixed(2)?.toString()?.replace(REGX_FORMET_AMOUNT, '')}`
    }
}