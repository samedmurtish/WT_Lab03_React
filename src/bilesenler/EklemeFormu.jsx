import { useState } from 'react'

// DENEY 3: kontrollü form. Yazılan metin bu bileşenin state'indedir.
export default function EklemeFormu({ onEkle }) {
  // DENEY 3 · ADIM 3:
  //   a) const [metin, setMetin] = useState('')
  //   b) input'a value={metin} ve onChange={(e) => setMetin(e.target.value)} verin
  //   c) gonder(e): e.preventDefault(); metin.trim() boşsa çık; değilse onEkle(metin.trim()) ve setMetin('')
  //   d) metin.trim() boşken "Ekle" düğmesi disabled olsun
  function gonder(e) {
    e.preventDefault()
  }

  return (
    <form className="ekle" onSubmit={gonder}>
      <input
        type="text"
        placeholder="Yeni görev, örn. Ekran görüntülerini al"
        maxLength={80}
        autoComplete="off"
        aria-label="Yeni görev"
      />
      <button type="submit" className="birincil">
        Ekle
      </button>
    </form>
  )
}
