export interface Reciter {
  id: string;
  name: string;
  arabicName: string;
  style: string;
  server: string;
}

// 30+ recitues — audio nga mp3quran.net (falas, pa API key, sure të plota)
export const RECITERS: Reciter[] = [
  { id: "alafasy", name: "Mishary Alafasy", arabicName: "مشاري العفاسي", style: "Murattal", server: "https://server8.mp3quran.net/afs/" },
  { id: "shuraim", name: "Saud Ash-Shuraim", arabicName: "سعود الشريم", style: "Murattal", server: "https://server7.mp3quran.net/shur/" },
  { id: "husary", name: "Mahmoud Al-Husary", arabicName: "محمود الحصري", style: "Murattal", server: "https://server13.mp3quran.net/husr/" },
  { id: "minshawi", name: "Mohamed Al-Minshawi", arabicName: "محمد المنشاوي", style: "Murattal", server: "https://server10.mp3quran.net/minsh/" },
  { id: "abdulbasit", name: "Abdul Basit Abdul Samad", arabicName: "عبدالباسط عبدالصمد", style: "Murattal", server: "https://server7.mp3quran.net/basit/" },
  { id: "muaiqly", name: "Maher Al-Muaiqly", arabicName: "ماهر المعيقلي", style: "Murattal", server: "https://server12.mp3quran.net/maher/" },
  { id: "ajmi", name: "Ahmed Al-Ajmi", arabicName: "أحمد العجمي", style: "Murattal", server: "https://server10.mp3quran.net/ajm/" },
  { id: "shaatree", name: "Abu Bakr Ash-Shaatree", arabicName: "أبو بكر الشاطري", style: "Murattal", server: "https://server11.mp3quran.net/shatri/" },
  { id: "ayyoub", name: "Muhammad Ayyoub", arabicName: "محمد أيوب", style: "Murattal", server: "https://server16.mp3quran.net/ayyoub2/Rewayat-Hafs-A-n-Assem/" },
  { id: "jibreel", name: "Muhammad Jibreel", arabicName: "محمد جبريل", style: "Murattal", server: "https://server8.mp3quran.net/jbrl/" },
  { id: "rifai", name: "Hani Ar-Rifai", arabicName: "هاني الرفاعي", style: "Murattal", server: "https://server8.mp3quran.net/hani/" },
  { id: "ghamdi", name: "Saad Al-Ghamdi", arabicName: "سعد الغامدي", style: "Murattal", server: "https://server7.mp3quran.net/s_gmd/" },
  { id: "akhdar", name: "Ibrahim Al-Akhdar", arabicName: "إبراهيم الأخضر", style: "Murattal", server: "https://server6.mp3quran.net/akdr/" },
  { id: "tablawi", name: "Mohammad At-Tablawi", arabicName: "محمد الطبلاوي", style: "Murattal", server: "https://server12.mp3quran.net/tblawi/" },
  { id: "banna", name: "Mahmoud Al-Banna", arabicName: "محمود البنا", style: "Murattal", server: "https://server8.mp3quran.net/bna/" },
  { id: "qatami", name: "Nasser Al-Qatami", arabicName: "ناصر القطامي", style: "Murattal", server: "https://server6.mp3quran.net/qtm/" },
  { id: "yasser", name: "Yasser Ad-Dosari", arabicName: "ياسر الدوسري", style: "Murattal", server: "https://server11.mp3quran.net/yasser/" },
  { id: "budair", name: "Salah Al-Budair", arabicName: "صلاح البدير", style: "Murattal", server: "https://server6.mp3quran.net/s_bud/" },
  { id: "juhany", name: "Abdullah Al-Juhany", arabicName: "عبدالله الجهني", style: "Murattal", server: "https://server13.mp3quran.net/jhn/" },
  { id: "tunaiji", name: "Khalifa At-Tunaiji", arabicName: "خليفة الطنيجي", style: "Murattal", server: "https://server12.mp3quran.net/tnjy/" },
  { id: "matrood", name: "Abdullah Al-Matrood", arabicName: "عبدالله المطرود", style: "Murattal", server: "https://server8.mp3quran.net/mtrod/" },
  { id: "fares", name: "Fares Abbad", arabicName: "فارس عباد", style: "Murattal", server: "https://server8.mp3quran.net/frs_a/" },
  { id: "idrees", name: "Idrees Abkar", arabicName: "إدريس أبكر", style: "Murattal", server: "https://server6.mp3quran.net/abkr/" },
  { id: "tawfeeq", name: "Tawfeeq As-Sayegh", arabicName: "توفيق الصائغ", style: "Murattal", server: "https://server6.mp3quran.net/twfeeq/" },
  { id: "qahtani", name: "Khaled Al-Qahtani", arabicName: "خالد القحطاني", style: "Murattal", server: "https://server10.mp3quran.net/qht/" },
  { id: "jaleel", name: "Khalid Al-Jaleel", arabicName: "خالد الجليل", style: "Murattal", server: "https://server10.mp3quran.net/jleel/" },
  { id: "sahl", name: "Sahl Yassin", arabicName: "سهل ياسين", style: "Murattal", server: "https://server6.mp3quran.net/shl/" },
  { id: "yamani", name: "Wadee Al-Yamani", arabicName: "وديع اليمني", style: "Murattal", server: "https://server6.mp3quran.net/wdee3/" },
  { id: "jamal", name: "Jamal Shaker Abdullah", arabicName: "جمال شاكر عبدالله", style: "Murattal", server: "https://server6.mp3quran.net/jamal/" },
  { id: "khalbany", name: "Adel Al-Khalbany", arabicName: "عادل الكلباني", style: "Murattal", server: "https://server8.mp3quran.net/a_klb/" },
  { id: "zamil", name: "Majed Al-Zamil", arabicName: "ماجد الزامل", style: "Murattal", server: "https://server9.mp3quran.net/zaml/" },
  { id: "lohidan", name: "Mohammed Al-Lohaidan", arabicName: "محمد اللحيدان", style: "Murattal", server: "https://server8.mp3quran.net/lhdan/" },
];
