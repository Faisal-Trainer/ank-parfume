/* 
   ANK PARFUME — products.js
   Unified product data extracted from price lists and image directory.
*/

const products = [
  // MEN
  {
    name: "Armani SWY",
    cat: "men",
    desc: "Aromatic fougère yang elegan. Si Armani tapi lebih berani dan maskulin.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/Armani SWY.webp",
    altimg: "Armani SWY | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Acqua di Gio",
    cat: "men",
    desc: "Kesegaran laut Mediterania yang ikonik. Klasik, segar, dan maskulin.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Acqua Di Gio.webp",
    altimg: "Acqua di Gio | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Bulgari Extreme",
    cat: "men",
    desc: "Citrus woody yang tajam. Ketegasan yang bersih — first impression terbaik.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/Bulgari Extreem.webp",
    altimg: "Bulgari Extreme | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Creed Aventus",
    cat: "men",
    desc: 'Fruity chypre premium. Dikenal sebagai "raja parfum" dunia — berasa eksklusif.',
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Creed Aventus.webp",
    altimg: "Creed Aventus | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "CH Men 212",
    cat: "men",
    desc: "Modern, urban, dan penuh energi. Cocok untuk pria yang dinamis.",
    prices: { p30: 70000, p50: 110000, p100: 160000 },
    image: "img/ank perfume product/CH Men 212.webp",
    altimg: "CH Men 212 | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Dunhill Blue",
    cat: "men",
    desc: "Aquatic woody yang segar. Teman setia pria aktif dari pagi hingga malam.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Dunhill Blue.webp",
    altimg: "Dunhill Blue | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Dior Sauvage",
    cat: "men",
    desc: "Segar ambisius. Lavender & bergamot — parfum paling ikonik & terlaris.",
    prices: { p30: 80000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Dior Sauvage.webp",
    altimg: "Dior Sauvage | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Ehsas",
    cat: "men",
    desc: "Aroma khas Timur Tengah yang hangat dan memikat. Sangat tahan lama.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/Ehsas.webp",
    altimg: "Ehsas | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Mont Blanc Legend",
    cat: "men",
    desc: "Lavender fougère yang bersih. Elegan tanpa berlebihan, cocok untuk kantor.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/Mont Blanc Legend.webp",
    altimg: "Mont Blanc Legend | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "One Million Lucky",
    cat: "men",
    desc: "Woody spicy yang bold. Keberuntungan dalam botol berbentuk batangan emas.",
    prices: { p30: 85000, p50: 135000, p100: 190000 },
    image: "img/ank perfume product/One Million Lucky.webp",
    altimg: "One Million Lucky | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Polo Sport",
    cat: "men",
    desc: "Aroma segar untuk jiwa sporty. Memberikan energi instan sepanjang hari.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Polo Sport.webp",
    altimg: "Polo Sport | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Versace Eros",
    cat: "men",
    desc: "Aquatic ambergris segar. Semangat Mediterania yang selalu relevan.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Vesace eros.webp",
    altimg: "Versace Eros | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "212 VIP Men",
    cat: "men",
    desc: "Woody musky urban. Untuk pria kota yang percaya diri dan penuh karisma.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/212 VIP Men.webp",
    altimg: "212 VIP Men | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Davidoff Cool Water",
    cat: "men",
    desc: "Kesegaran laut sejati. Bersih, tajam, dan sangat maskulin.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Davidor Water Intern.webp",
    altimg: "Davidoff Cool Water | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "YSL Y",
    cat: "men",
    desc: "Aromatic fougère modern. Representasi pria yang berani mengejar mimpi.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/YSL Y.webp",
    altimg: "YSL Y | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Aigner Blue Emotion",
    cat: "men",
    desc: "Aroma citrus floral yang menyejukkan. Cocok untuk iklim tropis.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Aigner Blue Emotion.webp",
    altimg: "Aigner Blue Emotion | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Zara Home Man",
    cat: "men",
    desc: "Nuansa kayu yang menenangkan. Memberikan kesan pria yang rapi dan elegan.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/Zara Home Man.webp",
    altimg: "Zara Home Man | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Jaguar Blue",
    cat: "men",
    desc: "Aromatic spicy yang klasik. Ketangguhan Jaguar dalam wujud wewangian.",
    prices: { p30: 70000, p50: 110000, p100: 160000 },
    image: "img/ank perfume product/Jaguar Blue.webp",
    altimg: "Jaguar Blue | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Afnan 9PM",
    cat: "men",
    desc: "Wangi manis vanilla yang menggoda. Pilihan tepat untuk acara malam hari.",
    prices: { p30: 80000, p50: 127000, p100: 182000 },
    image: "img/ank perfume product/Afnan 9 Pm.webp",
    altimg: "Afnan 9PM | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Bulgari Aqua",
    cat: "men",
    desc: "Aroma laut yang dalam dan misterius. Memberikan kesan segar yang eksklusif.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Bulgari Aqua.webp",
    altimg: "Bulgari Aqua | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Hawas Ice",
    cat: "men",
    desc: "Ledakan kesegaran mentol dan buah. Sangat memikat dan tahan lama.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Hawas Ice.webp",
    altimg: "Hawas Ice | Produk Ank Parfume Bukittinggi"
  },

  // WOMEN
  {
    name: "Ariana Grande",
    cat: "women",
    desc: "Manis seperti permen dan marshmallow. Playful, muda, dan ceria.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Ariana Grande.webp",
    altimg: "Ariana Grande | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Armani My Way",
    cat: "women",
    desc: "Woody floral yang hangat. Terinspirasi perjalanan dunia, cocok untuk petualang.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Armanu My Way.webp",
    altimg: "Armani My Way | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Alien Goddess",
    cat: "women",
    desc: "Woody amber yang misterius. Kekuatan dan keanggunan dalam satu semprot.",
    prices: { p30: 75000, p50: 120000, p100: 175000 },
    image: "img/ank perfume product/Allien Goddes.webp",
    altimg: "Alien Goddess | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Burberry Her",
    cat: "women",
    desc: "Fruity floral yang modern. Keanggunan London dalam nuansa buah beri.",
    prices: { p30: 68000, p50: 105000, p100: 160000 },
    image: "img/ank perfume product/Burberry Her.webp",
    altimg: "Burberry Her | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "D&G Light Blue",
    cat: "women",
    desc: "Citrus segar khas Mediterania. Ringan, menyenangkan, cocok untuk daily wear.",
    prices: { p30: 75000, p50: 120000, p100: 170000 },
    image: "img/ank perfume product/D&G Light Blue.webp",
    altimg: "D&G Light Blue | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Escada Cherry",
    cat: "women",
    desc: "Fruity floral ceria. Cherry yang meledak di kulit, ceria sepanjang hari.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Escada Cherry.webp",
    altimg: "Escada Cherry | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Escada M. Blossom",
    cat: "women",
    desc: "Wangi musim panas yang eksotis. Perpaduan nanas dan bunga tropis.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Escada Miami Blossom.webp",
    altimg: "Escada M. Blossom | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Gucci Flora Gardenia",
    cat: "women",
    desc: "Perpaduan gardenia dan bergamot yang sensual. Feminitas dalam bentuk botol.",
    prices: { p30: 80000, p50: 127000, p100: 182000 },
    image: "img/ank perfume product/Gucci Floral Gardenia.webp",
    altimg: "Gucci Flora Gardenia | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Gucci Bloom",
    cat: "women",
    desc: "Floral putih yang murni & feminim. Dipakai sekali, diingat selamanya.",
    prices: { p30: 83000, p50: 130000, p100: 185000 },
    image: "img/ank perfume product/Gucci Bloom.webp",
    altimg: "Gucci Bloom | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Jo Malone Peony",
    cat: "women",
    desc: "Segar dan elegan. Bunga peoni yang mekar lembut di kulitmu sepanjang hari.",
    prices: { p30: 75000, p50: 120000, p100: 175000 },
    image: "img/ank perfume product/Jo Malone Peony.webp",
    altimg: "Jo Malone Peony | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Jo Malone English Pear",
    cat: "women",
    desc: "Wangi buah pir yang matang dan manis. Segar, bersih, dan sangat berkelas.",
    prices: { p30: 75000, p50: 120000, p100: 175000 },
    image: "img/ank perfume product/Jo Malone E Pear.webp",
    altimg: "Jo Malone English Pear | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "NGT Floral",
    cat: "women",
    desc: "Aroma bunga yang lembut and menenangkan. Memberikan rasa percaya diri alami.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/NGT.webp",
    altimg: "NGT Floral | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Paris Hilton Siren",
    cat: "women",
    desc: "Fruity floral yang manis and menggoda. Pancarkan pesona bintang dalam dirimu.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Paris Hilton Shiren.webp",
    altimg: "Paris Hilton Siren | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Prada Paradoxe",
    cat: "women",
    desc: "Floral musky modern. Kontradiksi yang memikat — dinamis namun tetap feminin.",
    prices: { p30: 81000, p50: 130000, p100: 185000 },
    image: "img/ank perfume product/Prada Paradoxce.webp",
    altimg: "Prada Paradoxe | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Pink Chiffon",
    cat: "women",
    desc: "Manis & playful. Aroma buah and bunga ringan yang cocok untuk wanita energik.",
    prices: { p30: 85000, p50: 153000, p100: 190000 },
    image: "img/ank perfume product/Pink Chiffon.webp",
    altimg: "Pink Chiffon | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Pramugari",
    cat: "women",
    desc: "Wangi bersih and profesional. Klasik yang selalu disukai banyak orang.",
    prices: { p30: 75000, p50: 120000, p100: 175000 },
    image: "img/ank perfume product/Pramugari.webp",
    altimg: "Pramugari | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Romantic Wish",
    cat: "women",
    desc: "Aroma romantis yang memikat hati. Sempurna untuk kencan malam yang manis.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Romantic Wish.webp",
    altimg: "Romantic Wish | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Sarah Jessica P",
    cat: "women",
    desc: "Floral woody yang elegan. Karakter yang kuat and mempesona.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Sara Jesica Parker.webp",
    altimg: "Sarah Jessica P | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Selena Gomez",
    cat: "women",
    desc: "Fruity manis yang penuh energi. Cocok untuk aktivitas sehari-hari.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Selena Gomez.webp",
    altimg: "Selena Gomez | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Taylor Swift",
    cat: "women",
    desc: "Aroma sweet floral yang memikat. Sentuhan magis dalam setiap semprotan.",
    prices: { p30: 68000, p50: 105000, p100: 165000 },
    image: "img/ank perfume product/Taylor Swift.webp",
    altimg: "Taylor Swift | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "VS Scandalous",
    cat: "women",
    desc: "Wangi floral fruity yang berani. Tampilkan sisi misteriusmu yang menawan.",
    prices: { p30: 80000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/VS Scandalous.webp",
    altimg: "VS Scandalous | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "VS Bombshell",
    cat: "women",
    desc: "Wangi fruity floral paling populer. Segar, manis, and bikin percaya diri.",
    prices: { p30: 80000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/FS Boomsheel.webp",
    altimg: "VS Bombshell | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Wesal",
    cat: "women",
    desc: "Aroma floral yang dalam and bersahaja. Menampilkan sisi elegan wanita.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Wesal.webp",
    altimg: "Wesal | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "YSL Libre",
    cat: "women",
    desc: "Sensual and berani. Lavender bertemu vanilla — ikon kemandirian wanita modern.",
    prices: { p30: 85000, p50: 135000, p100: 190000 },
    image: "img/ank perfume product/YSL Libre.webp",
    altimg: "YSL Libre | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Zara With Love",
    cat: "women",
    desc: "Floral manis yang lembut. Memberikan kesan hangat and penyayang.",
    prices: { p30: 78000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/Zara With Love.webp",
    altimg: "Zara With Love | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Zwitsal",
    cat: "women",
    desc: "Wangi bedak bayi yang menenangkan. Bersih, lembut, and bikin nyaman.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Zwitsal.webp",
    altimg: "Zwitsal | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Vanilla Ice",
    cat: "women",
    desc: "Vanilla dingin yang menyegarkan. Manis tapi tetap terasa sejuk di kulit.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Vanilla Ice.webp",
    altimg: "Vanilla Ice | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Vanilla Cake",
    cat: "women",
    desc: "Wangi kue vanilla yang lezat. Manis yang menggugah selera sepanjang hari.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Vanilla Cake.webp",
    altimg: "Vanilla Cake | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "212 Sexy Lady",
    cat: "women",
    desc: "Oriental floral yang sensual. Memberikan kesan wanita urban yang memikat.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/212 Sexy Lady.webp",
    altimg: "212 Sexy Lady | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Delina de Marly",
    cat: "women",
    desc: "Wangi turkish rose yang mewah. Sangat eksklusif and tahan lama.",
    prices: { p30: 75000, p50: 120000, p100: 175000 },
    image: "img/ank perfume product/Dellina De Marley.webp",
    altimg: "Delina de Marly | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Incanto Shine",
    cat: "women",
    desc: "Fruity floral yang berkilau. Memberikan energi positif and keceriaan.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Inchanto Shine.webp",
    altimg: "Incanto Shine | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Aqua Kiss",
    cat: "women",
    desc: "Aroma laut and bunga freesia. Segar seperti udara pantai di pagi hari.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/VS Aqua Kiss.webp",
    altimg: "Aqua Kiss | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "LV Les Sables Roses",
    cat: "women",
    desc: "Perpaduan mawar and oud yang mistis. Kesan mewah yang tak terlupakan.",
    prices: { p30: 75000, p50: 120000, p100: 175000 },
    image: "img/ank perfume product/LV Less Sables.webp",
    altimg: "LV Les Sables Roses | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Kirke Tiziana Terenzi",
    cat: "women",
    desc: "Fruity chypre yang magis. Aroma buah-buahan eksotis yang memikat.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Kirke T Terenzi.webp",
    altimg: "Kirke Tiziana Terenzi | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Bulgari Omnia Amethyste",
    cat: "women",
    desc: "Aroma bunga iris and mawar di pagi hari. Elegan, feminin, and berkelas.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Bulgari Omnia Amethis.webp",
    altimg: "Bulgari Omnia Amethyste | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Escada Sexy Graffiti",
    cat: "women",
    desc: "Manisnya buah stroberi and raspberry. Sangat ceria and menggoda.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Escada Sexy Gravity.webp",
    altimg: "Escada Sexy Graffiti | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "YSL Mon Paris",
    cat: "women",
    desc: "Wangi chypre fruity yang romantis. Terinspirasi dari kota cinta, Paris.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/YSL Mon Paris.webp",
    altimg: "YSL Mon Paris | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Armani Si",
    cat: "women",
    desc: "Cassis and vanilla yang modern. Ungkapan kekuatan and aura feminin.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Armani SI.webp",
    altimg: "Armani Si | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Zara Orchid",
    cat: "women",
    desc: "Aroma orchid yang segar and floral. Memberikan kesan wanita yang bersih.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Zara Orchid.webp",
    altimg: "Zara Orchid | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Miss Dior",
    cat: "women",
    desc: "Rosy chypre yang romantis. Ungkapan cinta dari Dior untuk jiwa yang bebas.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Gucci Bloom.webp",
    altimg: "Miss Dior | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Dior J'adore",
    cat: "women",
    desc: "Aroma floral mewah yang tak lekang waktu. Klasik sejati untuk hari istimewa.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/Dior J Adore.webp",
    altimg: "Dior J'adore | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Benetton Pink",
    cat: "women",
    desc: "Fruity floral yang manis and energik. Memberikan semangat sepanjang hari.",
    prices: { p30: 70000, p50: 110000, p100: 178000 },
    image: "img/ank perfume product/Benneton Pink.webp",
    altimg: "Benetton Pink | Produk Ank Parfume Bukittinggi"
  },

  // UNISEX
  {
    name: "Anakash",
    cat: "unisex",
    desc: "Aroma unik yang menenangkan. Perpaduan sempurna untuk pria and wanita.",
    prices: { p30: 70000, p50: 105000, p100: 160000 },
    image: "img/ank perfume product/Ankash.webp",
    altimg: "Anakash | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Baccarat",
    cat: "unisex",
    desc: "Oud rose yang mewah. Aroma yang biasanya hanya ditemukan di parfum jutaan.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Baccarat.webp",
    altimg: "Baccarat | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Zara Black Amber",
    cat: "unisex",
    desc: "Wangi amber yang hangat and manis. Memberikan kesan misterius and elegan.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Zara Black Amber.webp",
    altimg: "Zara Black Amber | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "HMNS Orgasm",
    cat: "unisex",
    desc: "Wangi floral fruity yang adiktif. Sangat populer karena daya tariknya.",
    prices: { p30: 70000, p50: 105000, p100: 160000 },
    image: "img/ank perfume product/HMNS Orgam.webp",
    altimg: "HMNS Orgasm | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "HMNS Alpha",
    cat: "unisex",
    desc: "Segar and bersih dengan sentuhan kayu. Membuatmu tampil dominan.",
    prices: { p30: 70000, p50: 110000, p100: 170000 },
    image: "img/ank perfume product/HMNS Alpha.webp",
    altimg: "HMNS Alpha | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Mancera L. Vanilla",
    cat: "unisex",
    desc: "Vanilla musked yang hangat. Nyaman seperti pelukan — cocok untuk semua musim.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/Vanilla Cake.webp",
    altimg: "Mancera L. Vanilla | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "LV Ombre Nomade",
    cat: "unisex",
    desc: "Smoky oud amber. Petualangan gurun dalam semprot — statement parfum sejati.",
    prices: { p30: 75000, p50: 115000, p100: 170000 },
    image: "img/ank perfume product/LV Ombre Nomade.webp",
    altimg: "LV Ombre Nomade | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Mykonos California",
    cat: "unisex",
    desc: "Aroma musim panas yang ceria. Segar and memberikan rasa bahagia.",
    prices: { p30: 70000, p50: 105000, p100: 160000 },
    image: "img/ank perfume product/Mykonos California.webp",
    altimg: "Mykonos California | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Mykonos Pistachio",
    cat: "unisex",
    desc: "Wangi kacang pistachio yang unik and manis. Creamy and sangat menggoda.",
    prices: { p30: 67000, p50: 100000, p100: 150000 },
    image: "img/ank perfume product/Mykonos Phystacio.webp",
    altimg: "Mykonos Pistachio | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "SOTB",
    cat: "unisex",
    desc: "Sillage kuat, daya tahan luar biasa. Favorit pelanggan yang sering sold-out.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/SOTB.webp",
    altimg: "SOTB | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "Tamburins Chamo",
    cat: "unisex",
    desc: "Aquatic floral yang unik. K-beauty vibes, digemari oleh banyak anak muda.",
    prices: { p30: 70000, p50: 110000, p100: 165000 },
    image: "img/ank perfume product/Thamburins Chamo.webp",
    altimg: "Tamburins Chamo | Produk Ank Parfume Bukittinggi"
  },
  {
    name: "YSL Black Opium",
    cat: "unisex",
    desc: "Kopi & vanilla yang menggoda. Gelap, sensual, and bikin ketagihan.",
    prices: { p30: 80000, p50: 125000, p100: 180000 },
    image: "img/ank perfume product/YSL Black Opium.webp",
    altimg: "YSL Black Opium | Produk Ank Parfume Bukittinggi"
  }
];
