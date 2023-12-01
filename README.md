This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).



## Question A
- Bagaimana Manajer Produk menginginkan interaksi pengguna dengan text "More" kemudian hilang?
- Bagaimana dengan interaksi di upvote, downvotes, apakah hanya menjadi active/inactive, atau bisa terjadi perubahan apabila user mengingkan berganti vote?
- Apakah Image bisa di zoom atau diklik?
- Bagaimana tampilan ketika terjadi sebuah data kosong?
- Bagaimana tampilan ketika loading data, apa memakai loading biasa atau memakai placeholder?

## Question C1
### Struktur Data
- Menyimpan log pengguna ke backend, seperti minat (follow), dan like serta komentar yang sering dilakukan ke akun tertentu, dan jika diperlukan lokasi, serta contact telepon, untuk meningkatkan akurasi rekomendasi.
- Gunakan mekanisme caching untuk mengurangi penggunaan bandwidth.
### Penanganan Kasus Ekstrim:
Tidak Ada Pengguna/Komunitas Terkait:
- Atasi dengan menyediakan rekomendasi berdasarkan aktivitas umum atau tren saat itu.
- Berikan opsi untuk mengundang teman melalui integrasi dengan platform lain.

Terlalu Banyak Pengguna/Komunitas Terkait:
- Gunakan algoritma untuk menyesuaikan dan menyaring rekomendasi berdasarkan relevansi dan aktivitas terbaru.
- Implementasikan mekanisme pembatasan jumlah rekomendasi untuk menjaga antarmuka pengguna tetap bersih dan informatif.

### Pengujian Fitur:

Uji Antarmuka Pengguna:
Pastikan antarmuka pengguna itu nyaman dilihat dan tidak bikin bingung. Jadi, kalau buka aplikasi, semuanya harus berjalan mulus dan ngasih info yang jelas.

Uji Responsivitas dan Kecepatan:
Coba lihat gimana antarmukanya berubah pas buka pake perangkat yang beda-beda. pastikan aplikasinya tetap proper di segala ukuran layar. Dan yang penting, cek peformanya, biar user tidak mengeluh kalau aplikasi berat.

Uji Koneksi dan Caching:
Mengecek koneksi ke server, kita lakukan uji coba data yang diambil dengan itu response nya bagaimana. Dan pastinya, lihat juga gimana cara aplikasi nge-handle cache, agar hemat kuota dan cepet loadnya.

Uji Semua Bekerja dan Sesuai UI/UX:
Semua fitur di aplikasi harus berjalan dengan baik. Tombol serta action yang disediakan berjalan dengan normal dan fitur rekomendasi sudah berjalan secara realtime sesuai preferensi user, UI/UX-nya tetap enak dilihat dan tidak membuat user bingung.

Uji Kasus Ekstrim:
Kita kadang-kadang punya masalah yang tidak terduga, misalnya tiba-tiba tidak ada koneksi penguna atau malah terlalu banyak koneksi. Kita uji berkala supaya aplikasi tetap bisa jalan dan mendapat feedback yang sesuai jika terjadi case seperti itu.

Uji Error Handling:
pastikan tidak ada bug yang muncul di aplikasi. Kita tidak mau ada pesan error atau data yang hilang. Kita targetkan agar semua berjalan dengan sesuai dan sudah menyiapkan error trace apabila terjadi hal demikian baik di mobile maupun di server.



## Question C2
1. Pengumpulan Data Pengguna:
Aplikasi mobile dapat mengumpulkan data pengguna lokal di perangkat dan kemudian dikirim melalui API.
Pastikan kita memberikan notice atau privacy policy untuk user data apa aja yang akan kita kirim.

2. Analisis Pengguna dan Profiling:
Data pengguna yang dikirim ke server diolah untuk membuat profil user.
Gunakan algoritma analisis pola di server untuk mengidentifikasi preferensi user terkait, bisa menggunakan database graph dan penunjang lainnya di sisi server.

3. Rekomendasi melalui API:
Server menyediakan endpoint API untuk memberikan rekomendasi berbasis profil pengguna.
Aplikasi mobile memanggil API ini dan menerima rekomendasi yang sesuai.

4. Terus berkembang mengikuti:
Terapkan model machine learning atau pola di server yang dapat diperbarui secara berkala dengan data pengguna yang semakin banyak preferensinya untuk mendapat hasil yang akurat dan realtime.

5. Pemfilteran Konten dan Kontrol Pengguna:
Implementasikan filter dan kontrol pengguna di server untuk memastikan rekomendasi sesuai dengan kebijakan dan preferensi pengguna.

6. Optimisasi Pengalaman Pengguna di Aplikasi Mobile:
Sesuaikan tampilan rekomendasi di aplikasi mobile dengan desain dan kebutuhan pengguna lokal.
Pastikan rekomendasi dapat diakses dan diintegrasikan secara mulus dalam antarmuka pengguna aplikasi mobile.

7. Pengukuran Peforma:
bikin metrik khusus di server buat mengecek seberapa bagus kerja sistem rekomendasinya. Dan yang penting, dengerin feedback dari pengguna di aplikasi mobile buat perbaikan lebih lanjut.

8. Sinkronisasi Data Secara Aman:
pastikan data pengguna aman dan sinkron antara aplikasi mobile dan server itu lancar. tidak boleh data pengguna yang jadi berantakan.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
