import { useEffect, useState } from 'react'

// DENEY 5: useState gibi çalışan, ama değeri localStorage'da saklayan özel hook.
// Kullanım: const [todolar, setTodolar] = useKaliciState('wt-lab3-todolar', ORNEK_TODOLAR)
export function useKaliciState(anahtar, baslangic) {
  // DENEY 5 · ADIM 1:
  //   a) Tembel başlangıç: useState(() => { ... }) içinde
  //        localStorage.getItem(anahtar) null değilse JSON.parse ile döndürün, null ise baslangic.
  //        try/catch ile sarın: bozuk kayıtta baslangic dönsün.
  //   b) useEffect: deger değiştikçe localStorage.setItem(anahtar, JSON.stringify(deger))
  //      Bağımlılıklar: [anahtar, deger]
  const [deger, setDeger] = useState(baslangic)
  useEffect(() => {}, [])
  return [deger, setDeger]
}
