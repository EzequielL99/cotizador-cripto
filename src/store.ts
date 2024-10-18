import { create } from 'zustand';
import axios from 'axios';

async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    const data = await axios(url)
    console.log(data);
}

export const useCryptoStore = create(() => ({
    fetchCryptos: () => {
        getCryptos()
    }
}))