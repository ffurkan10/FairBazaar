# Next.js E-Commerce App

Bu proje **Next.js (App Router)** ve **JSON Server** kullanılarak geliştirilmiş basit bir e-ticaret uygulamasıdır.  
Uygulama ürün listeleme, sepet, favoriler, kullanıcı giriş kontrolü ve sipariş yönetimi gibi temel e-ticaret özelliklerini barındırır.  

---

## Özellikler

- **Ürün Listeleme**
  - FakeStore API üzerinden ürünler çekilir. (Vercel localhosta ulaşamadığı için fetch hatası veriyor. Bu yüzden server taraflı isteği de kullanmış olmak için          GetServerSide kullandım ve direkt fakestoreapiye istek attım. Client taraflı istek de atılabilir.)
  - Kategori bazlı filtreleme yapılabilir.
  - Detay sayfasında tek ürün görüntülenebilir.

- **Authentication**
  - JSON Server'da tanımlı kullanıcılarla login.
  - Login sonrası `AuthContext` içinde kullanıcı bilgileri saklanır.
  - Kullanıcıya özel favoriler ve sepet yönetimi.

- **Sepet Yönetimi (Cart)**
  - Ürünler sepete eklenebilir, miktar güncellenebilir veya çıkarılabilir.
  - LocalStorage ile persist edilir.
  - Kullanıcı login olduğunda JSON Server ile senkronize edilir (`carts` tablosu).

- **Favoriler**
  - Ürünler favorilere eklenebilir veya çıkarılabilir.
  - LocalStorage persist.
  - Kullanıcı login olduğunda JSON Server ile senkronize edilir (`users.favorites` alanı).

- **Sipariş Yönetimi**
  - Kullanıcı checkout yaptığında sipariş kaydedilir (`orders` tablosu).
  - Sipariş geçmişi profil sayfasında görüntülenebilir.
  - Sipariş detayları ürünlerle birlikte listelenir.

---

## Kullanılan Teknolojiler

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/) (UI)
- [Axios](https://axios-http.com/) (API istekleri)
- [JSON Server](https://github.com/typicode/json-server) (fake backend)

## Kurulum

### Klonlama
```bash
git clone [https://github.com/kullanici/ecommerce-nextjs.git](https://github.com/ffurkan10/FairBazaar.git)
```

### Bağımlılıkları yükle:
```bash
npm install
```

### Next.js uygulamasını başlat:
```bash
npm run dev
```

### Tarayıcıda aç:
http://localhost:3000
