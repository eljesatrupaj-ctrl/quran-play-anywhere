export interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  style: string;
  // server: 'everyayah' uses https://everyayah.com/data/{folder}/
  folder: string;
}

// 30+ recitues — audio nga everyayah.com (falas, pa API key, mbulim i plotë)
export const RECITERS: Reciter[] = [
  { id: "alafasy", name: "Mishary Alafasy", arabicName: "مشاري العفاسي", style: "Murattal", folder: "Alafasy_128kbps" },
  { id: "sudais", name: "Abdurrahman As-Sudais", arabicName: "عبدالرحمن السديس", style: "Murattal", folder: "Abdurrahmaan_As-Sudais_192kbps" },
  { id: "shuraim", name: "Saud Ash-Shuraim", arabicName: "سعود الشريم", style: "Murattal", folder: "Saood_ash-Shuraym_128kbps" },
  { id: "husary", name: "Mahmoud Al-Husary", arabicName: "محمود الحصري", style: "Murattal", folder: "Husary_128kbps" },
  { id: "husary_mujawwad", name: "Al-Husary (Mujawwad)", arabicName: "الحصري (مجود)", style: "Mujawwad", folder: "Husary_Mujawwad_64kbps" },
  { id: "minshawi", name: "Mohamed Al-Minshawi", arabicName: "محمد المنشاوي", style: "Murattal", folder: "Minshawy_Murattal_128kbps" },
  { id: "minshawi_mujawwad", name: "Al-Minshawi (Mujawwad)", arabicName: "المنشاوي (مجود)", style: "Mujawwad", folder: "Minshawy_Mujawwad_64kbps" },
  { id: "abdulbasit", name: "Abdul Basit Abdul Samad", arabicName: "عبدالباسط عبدالصمد", style: "Murattal", folder: "Abdul_Basit_Murattal_192kbps" },
  { id: "abdulbasit_mujawwad", name: "Abdul Basit (Mujawwad)", arabicName: "عبدالباسط (مجود)", style: "Mujawwad", folder: "Abdul_Basit_Mujawwad_128kbps" },
  { id: "muaiqly", name: "Maher Al-Muaiqly", arabicName: "ماهر المعيقلي", style: "Murattal", folder: "MaherAlMuaiqly128kbps" },
  { id: "ajmi", name: "Ahmed Al-Ajmi", arabicName: "أحمد العجمي", style: "Murattal", folder: "ahmed_ibn_ali_al_ajamy_128kbps" },
  { id: "shaatree", name: "Abu Bakr Ash-Shaatree", arabicName: "أبو بكر الشاطري", style: "Murattal", folder: "Abu_Bakr_Ash-Shaatree_128kbps" },
  { id: "hudhaify", name: "Ali Al-Hudhaify", arabicName: "علي الحذيفي", style: "Murattal", folder: "Hudhaify_128kbps" },
  { id: "ayyoub", name: "Muhammad Ayyoub", arabicName: "محمد أيوب", style: "Murattal", folder: "Muhammad_Ayyoub_128kbps" },
  { id: "jibreel", name: "Muhammad Jibreel", arabicName: "محمد جبريل", style: "Murattal", folder: "Muhammad_Jibreel_128kbps" },
  { id: "rifai", name: "Hani Ar-Rifai", arabicName: "هاني الرفاعي", style: "Murattal", folder: "Hani_Rifai_192kbps" },
  { id: "basfar", name: "Abdullah Basfar", arabicName: "عبدالله بصفر", style: "Murattal", folder: "Abdullah_Basfar_192kbps" },
  { id: "matrood", name: "Abdullah Al-Matrood", arabicName: "عبدالله المطرود", style: "Murattal", folder: "Abdullaah_3awwaad_Al-Juhaynee_128kbps" },
  { id: "ghamdi", name: "Saad Al-Ghamdi", arabicName: "سعد الغامدي", style: "Murattal", folder: "Ghamadi_40kbps" },
  { id: "akhdar", name: "Ibrahim Al-Akhdar", arabicName: "إبراهيم الأخضر", style: "Murattal", folder: "Ibrahim_Akhdar_32kbps" },
  { id: "tablawi", name: "Mohammad At-Tablawi", arabicName: "محمد الطبلاوي", style: "Mujawwad", folder: "mahmood_ali_al_banna_32kbps" },
  { id: "banna", name: "Mahmoud Al-Banna", arabicName: "محمود البنا", style: "Murattal", folder: "mahmood_ali_al_banna_32kbps" },
  { id: "qatami", name: "Nasser Al-Qatami", arabicName: "ناصر القطامي", style: "Murattal", folder: "Nasser_Alqatami_128kbps" },
  { id: "yasser", name: "Yasser Ad-Dosari", arabicName: "ياسر الدوسري", style: "Murattal", folder: "Yasser_Ad-Dussary_128kbps" },
  { id: "hawashi", name: "Salah Al-Budair", arabicName: "صلاح البدير", style: "Murattal", folder: "Salaah_AbdulRahman_Bukhatir_128kbps" },
  { id: "juhany", name: "Abdullah Al-Juhany", arabicName: "عبدالله الجهني", style: "Murattal", folder: "Abdullaah_3awwaad_Al-Juhaynee_128kbps" },
  { id: "tunaiji", name: "Khalifa At-Tunaiji", arabicName: "خليفة الطنيجي", style: "Murattal", folder: "khalefa_al_tunaiji_64kbps" },
  { id: "soufi", name: "Abdurrashid Sufi", arabicName: "عبدالرشيد صوفي", style: "Murattal", folder: "Abdul_Rashid_Sufi_192kbps" },
  { id: "hajjaj", name: "Hajjaj Al-Hindawi", arabicName: "حجاج الهنداوي", style: "Murattal", folder: "Hajjaj_Hindawi_128kbps" },
  { id: "sowaid", name: "Ayman Sowaid", arabicName: "أيمن سويد", style: "Murattal", folder: "Ayman_Sowaid_64kbps" },
  { id: "parhizgar", name: "Shahriar Parhizgar", arabicName: "شهريار پرهیزگار", style: "Murattal", folder: "Parhizgar_48kbps" },
  { id: "walk", name: "Ibrahim Walk (English)", arabicName: "ترجمة إنجليزية", style: "Translation", folder: "English/Sahih_Intnl_Ibrahim_Walk_192kbps" },
];
