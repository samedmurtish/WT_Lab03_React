// Yeni görev için benzersiz kimlik üretir, örn. "m3x9k2-a7f1q".
// (crypto.randomUUID yalnızca güvenli bağlamda çalışır; bu yöntem her yerde çalışır.)
export function yeniKimlik() {
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7)
}
