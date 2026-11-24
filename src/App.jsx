import {useState,useEffect,useRef} from 'react';
import './styles.css';
import FOTO from './assets/foto-dede.jpg';
import LOGO from './assets/logo-dede.png';
import MARGAJAYA from './assets/Web Sdn Margajaya 4.jpeg';
import MPKCIOMAS from './assets/web-mpk (1).jpg';
import LOSTFOUND from './assets/Web lost-found.jpg';
import MYSTUDY from './assets/web MyStudy.jpg';
import DICODINGCERT from './assets/sertifikat dicoding.jpg';
import SPEAKUPCERT from './assets/sertifikat speak up.jpg';
import UJI_LEVEL_2026 from './assets/Laporan Ketuntasan Uji level 2026.jpg';
import PRAMUKA_GARUDA from './assets/Piagam Tanda Penghargaan Pramuka Garuda Penggalang Kabupaten Bogor.jpg';
import MPLS_BEST from './assets/sertifikat mpls terbaik.jpg';
import SMPN2_GARUDA from './assets/sertifikat penghargaan diberikan oleh SMPN 2 Ciomas atas prestasinya meraih Pramuka Penggalang Garuda.jpg';
import JOTA_JOTI_2025 from './assets/sertifikat jota joti 2025 internasional.jpg';
import JOTA_JOTI_2026 from './assets/Sertifikat Jota Joti 2026 internasional.jpg';
import JOTA_SSTV from './assets/JOTA SSTV AWARD.jpg';
import KOMPETISI_PRAMUKA_2022 from './assets/sertifikat Kompetisi Pramuka se-Nasional 2022.jpg';
import JOTA_NASIONAL_2025 from './assets/sertifikat jota joti kwarnas indonesia 2025.jpg';
import KOMPETISI_PRAMUKA_2025 from './assets/Piagam Sebagai Peserta Kompetisi Pramuka 2025 Tingkat Nasional.jpg';
import PLASTIC_SMART_CITIES from './assets/Sertifikat penghargaan dalam kegiatan Plastic Smart Cities, Direktur Eksekutif Rekam Nusantara Foundation.jpg';
import BINTANG_TAHUNAN from './assets/Sertifikat Bintang tahunan.jpg';
import MENYALA from './assets/sertifikat menyala.jpg';
import GEMPITA_BAKTRA_2025 from './assets/Piagam Sebagai Peserta Lomba Gempita Baktra Pramuka ke-XX 2025.jpg';
import SAFE_FROM_HARM from './assets/sertifikat safe from harm.jpg';
const NAV=[["home","Beranda"],["about","Tentang Saya"],["skills","Keahlian"],["projects","Proyek"],["certs","Sertifikat"],["journey","Perjalanan"],["contact","Kontak"]];
const SOCIALS=[["WhatsApp","083892592726","https://wa.me/6283892592726","whatsapp"],["Instagram","@_demzx01","https://instagram.com/_demzx01","instagram"],["TikTok","@dema.zmx","https://tiktok.com/@dema.zmx","tiktok"],["GitHub","dema791ok","https://github.com/dema791ok","github"]];
const SKILLS=[["💻","Frontend","Antarmuka web modern dan responsif",[["HTML & CSS",90],["JavaScript",78],["React",70]]],["🧩","Pemrograman","Logika dan struktur kode",[["Algoritma",80],["Python",72],["PHP & MySQL",65]]],["🛠️","Alat & Tools","Workflow pengembangan harian",[["Git & GitHub",75],["VS Code",92],["Figma",80]]],["🎨","UI/UX Design","Desain yang berpusat pada pengguna",[["Wireframing",82],["Prototyping",78],["Design System",70]]]];
const PROJ=[
["web","Web Profil SDN Margajaya 4","Website profil sekolah dengan informasi guru dan staf, agenda, kegiatan, berita, fasilitas, galeri, dan kontak.","SDN Margajaya 4",["HTML","CSS","JavaScript","API"],"#0f172a,#38bdf8",MARGAJAYA,"cover","https://sdnmargajaya4.my.id"],
["web","MPK SMK Negeri 1 Ciomas","Website MPK untuk mengenalkan program kerja, jajaran pengurus, serta memudahkan siswa menyampaikan aspirasi dan melihat status laporannya.","MPK SMK Negeri 1 Ciomas",["React","JavaScript","CSS"],"#2563eb,#312e81",MPKCIOMAS,"contain"],
["web","Web Lost and Found SKANIC","Platform berbasis React untuk membantu siswa melaporkan barang hilang, melihat barang yang ditemukan, dan menghubungkan barang dengan pemiliknya.","SKANIC · Lost and Found",["React","JavaScript","CSS"],"#0f766e,#2563eb",LOSTFOUND,"contain"],
["web","MyStudy","Aplikasi web untuk mendukung kegiatan belajar, dibangun menggunakan Laravel.","MyStudy",["Laravel","PHP"],"#312e81,#818cf8",MYSTUDY,"contain","https://mystudy-app-tdda.onrender.com"]
];
const PPLG_CERTS=[{
title:"Laporan Ketuntasan Uji Level 2026",
issuer:"Program PPLG · ditandatangani Kepala Program PPLG Wanda Kurniawan, S.Kom",
date:"Bogor, 18 Mei 2026",
description:"Diberikan kepada Kelompok SDN Margajaya 4, menyatakan telah mengikuti dan dinyatakan TUNTAS dalam pelaksanaan Uji Level Tahun 2026 berdasarkan hasil penilaian Tim Penguji.",
image:UJI_LEVEL_2026
},{
title:"Introduction to Financial Literacy",
issuer:"Dicoding Indonesia",
date:"",
description:"Sertifikat pembelajaran Introduction to Financial Literacy dari Dicoding Indonesia.",
image:DICODINGCERT
}];
const ORG_CERTS=[
{title:"Piagam Tanda Penghargaan Pramuka Garuda Penggalang Kabupaten Bogor",issuer:"Gerakan Pramuka Kwartir Cabang Kab. Bogor · Nomor: 157/LIX/0901-B/TPG.2023",date:"Cibinong, 19 November 2023",description:"Diberikan kepada Dede Maulana (Golongan Penggalang, Utusan Ciomas) atas prestasinya dalam keteladanan dan prestasi terbaik tingkat Kabupaten Bogor sehingga berhak menyandang predikat Pramuka Garuda Kabupaten Bogor.",image:PRAMUKA_GARUDA},
{title:"Sertifikat Penghargaan Peserta MPLS Terbaik",issuer:"SMKN 1 Ciomas",date:"Bogor, 18 Juli 2025",description:"Diberikan kepada Dede Maulana sebagai Peserta MPLS Terbaik pada Masa Pengenalan Lingkungan Sekolah yang diselenggarakan pada Senin - Jumat, 14 - 18 Juli 2025 di SMKN 1 Ciomas.",image:MPLS_BEST},
{title:"Piagam Penghargaan Pramuka Penggalang Garuda (SMPN 2 Ciomas)",issuer:"SMPN 2 Ciomas · Kepala SMPN 2 Ciomas Dr. R. Body Supriyana, S.Pd.",date:"Bogor, 27 November 2023",description:"Diberikan kepada Dede Maulana atas prestasinya meraih Pramuka Penggalang Garuda yang diselenggarakan oleh Kwartir Cabang Kabupaten Bogor pada 18 - 19 November 2023 di Bumi Perkemahan Cimandala.",image:SMPN2_GARUDA},
{title:"JOTA-JOTI 2025 Certificate of Participation",issuer:"World Scouting",date:"2025 · JID: 3ID98W",description:"Recognises that Dede Maulana (JID: 3ID98W) took part in Jamboree On The Air - Jamboree On The Internet (JOTA-JOTI) 2025.",image:JOTA_JOTI_2025},
{title:"JOTA-JOTI 2026 Certificate of Participation",issuer:"World Scouting",date:"2026 · JID: 3ID182PMA",description:"Recognises that Dede Maulana (JID: 3ID182PMA) took part in Jamboree On The Air - Jamboree On The Internet (JOTA-JOTI) 2026 and earned challenge badges including Environment and Sustainability, Bridge Builders, Peace and Community, International Friendship, Scouts for SDGs, Adult Allies, Life Skills, Peace Circles, Health and Well-being, Super Challenge: Peace & Inclusion Champion, Digital Adventurer, and Hike the Planet Challenge.",image:JOTA_JOTI_2026},
{title:"JOTA SSTV Award",issuer:"JOTA Satellite Event Committee · No: SSTV/JOTA/2026:04024",date:"Jakarta, 18 Oktober 2026",description:"Given to Dede Maulana for successfully receiving SSTV images from the LAPAN-A2 / IO-86 satellite during the Jamboree on the Air (JOTA) event on October 16 - 18, 2026.",image:JOTA_SSTV},
{title:"Piagam Penghargaan Kompetisi Pramuka se-Nasional 2022",issuer:"Gerakan Pramuka MAN 2 Kota Bogor · Ambalan Kiansantang & Diah Pitaloka, Gudep 02.031 - 02.032 · No: /010/Kompra/Gdp/31-32/XII/2022",date:"Bogor, 25 Desember 2022",description:"Diberikan kepada Dede Maulana sebagai Peserta pada kegiatan \"Kompetisi Pramuka 2022\" antar Pramuka Siaga, Penggalang, dan Penegak se-Nasional yang diselenggarakan pada 24 - 25 Desember 2022 di MAN 2 Kota Bogor.",image:KOMPETISI_PRAMUKA_2022},
{title:"Piagam Penghargaan JOTA JOTI Nasional 2025",issuer:"Kwartir Nasional Gerakan Pramuka",date:"17 - 19 Oktober 2025",description:"Diberikan kepada Dede Maulana atas partisipasinya sebagai Peserta dalam Pelaksanaan Jamboree on the Air Nasional ke-88 dan Jamboree on the Internet Nasional ke-46 pada tanggal 17 - 19 Oktober 2025.",image:JOTA_NASIONAL_2025},
{title:"Piagam Penghargaan Kompetisi Pramuka 2025 Tingkat Nasional",issuer:"Gerakan Pramuka MAN 2 Kota Bogor · Ambalan Kiansantang & Diah Pitaloka, Gudep 02.031 - 02.032 · No: /011/Kompra/Gdp/31-32/XII/2025",date:"Bogor, 21 Desember 2025",description:"Diberikan kepada Dede Maulana sebagai Peserta pada kegiatan Kompetisi Pramuka 2025 Tingkat Nasional yang diselenggarakan pada 20 - 21 Desember 2025 di MAN 2 Kota Bogor.",image:KOMPETISI_PRAMUKA_2025},
{title:"Sertifikat Penghargaan Plastic Smart Cities Ke Sekolah",issuer:"Rekam Nusantara Foundation · Direktur Eksekutif Een Irawan Putra",date:"26 Oktober 2022",description:"Terima kasih kepada Dede Maulana atas partisipasinya sebagai Peserta dalam kegiatan Plastic Smart Cities Ke Sekolah yang diselenggarakan pada tanggal 26 Oktober 2022 di SMP YAPIS Kota Bogor.",image:PLASTIC_SMART_CITIES},
{title:"Surat Keterangan Bintang Tahunan",issuer:"Gerakan Pramuka Gudep 25.113 - 25.114 Kabupaten Bogor · No: 015/25.113-25.114/VIII/2023",date:"2023",description:"Menyatakan Dede Maulana (Bogor, 29 Nopember 2008, Tingkat Penggalang) setia mengikuti kegiatan kepramukaan, mengamalkan Trisatya dan Dasa Darma, serta berhak menerima Tanda Penghargaan dan menggunakan lencana Bintang Tahunan.",image:BINTANG_TAHUNAN},
{title:"Sertifikat Penghargaan Literasi Keuangan (MENYALA)",issuer:"CSR FIFGROUP PINTAR / ABB Learning Centre · No: 12971/MNYL/FIF/2025",date:"12 September 2025",description:"Diberikan kepada Dede Maulana yang telah menyelesaikan pelatihan \"Literasi Keuangan: Edukasi Pembiayaan\" Program CSR FIFGROUP PINTAR yang diselenggarakan oleh CSR FIFGROUP pada tanggal 12 September 2025.",image:MENYALA},
{title:"Piagam Penghargaan Lomba Gempita Baktra Pramuka ke-XX 2025",issuer:"Gerakan Pramuka Gudep 06-001 & 06-002 / SMAN 1 Leuwiliang",date:"Bogor, 11 Oktober 2025",description:"Diberikan kepada Dede Maulana sebagai Peserta Lomba Gempita Baktra Pramuka ke-XX Tahun 2025 yang diselenggarakan pada 11 Oktober 2025 di SMAN 1 Leuwiliang.",image:GEMPITA_BAKTRA_2025},
{title:"Sertifikat Kursus SfH 1: Pembelajaran Penting \"Safe from Harm\"",issuer:"Kwartir Nasional Gerakan Pramuka (AyoPramuka Kwarnas)",date:"19 Oktober 2025",description:"Diberikan kepada Dede Maulana karena telah menyelesaikan kursus SfH 1: Pembelajaran Penting \"Safe from Harm\" pada tanggal 19 Oktober 2025 (Sertifikat ID: #2f37c2cf-34ac-4080-aedb-e637e7b2cd15, masa berlaku 1 tahun).",image:SAFE_FROM_HARM},
{title:"SPEAK UP",issuer:"Speak-Up Academy Hub",date:"",description:"Sertifikat dari Speak-Up Academy Hub untuk kegiatan SPEAK UP.",image:SPEAKUPCERT}
];
const TL=[["2024","Langkah Awal di SMK Negeri 1 Ciomas","Memulai jurusan PPLG dan mengenal dasar pemrograman serta logika."],["Awal 2025","Eksplorasi Mendalam Frontend & UI/UX","Belajar web modern, desain antarmuka, dan membangun proyek pertama."],["Pertengahan 2025","Aktif di OSIS & Proyek Kelompok","Berkolaborasi dalam tim, mengelola proyek sekolah, dan presentasi."],["Sekarang","Praktik Kerja Lapangan (PKL) di Industri","Bersiap menerapkan ilmu di dunia kerja nyata."]];

const TECH=["HTML5","CSS3","JavaScript","React","Vite","Node.js","Python","PHP","MySQL","Git","GitHub","Figma","UI/UX"];
function useReveal(){useEffect(()=>{const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("vis")),{threshold:.15});document.querySelectorAll(".rv").forEach(n=>io.observe(n));return()=>io.disconnect()},[])}
function Tilt({children,className="",...p}){const r=useRef();const mv=e=>{const b=r.current.getBoundingClientRect();const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;r.current.style.transform=`perspective(800px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`};
return <div ref={r} className={className} onMouseMove={mv} onMouseLeave={()=>r.current.style.transform=""} {...p}>{children}</div>}
function Count({to,suffix=""}){const [n,setN]=useState(0);const r=useRef();useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();let t0;const f=t=>{t0=t0||t;const p=Math.min((t-t0)/1500,1);setN(Math.round(to*(1-Math.pow(1-p,3))));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[]);return <b ref={r}>{n}{suffix}</b>}
function Head({e,t,s}){return <div className="rv"><div className="eyebrow">{e}</div><h2>{t}</h2>{s&&<p className="sub">{s}</p>}</div>}
function ProjectPlaceholder({title}){return <div className="project-placeholder" aria-hidden="true"><span className="project-placeholder-brand">SKANIC <i/> LOST &amp; FOUND</span><strong>{title}</strong><span>Temukan kembali barang yang tertinggal di sekolah.</span><div className="project-placeholder-items"><span>Barang hilang</span><span>Barang ditemukan</span></div></div>}

function TopBtn(){const [p,setP]=useState(0);useEffect(()=>{const s=()=>{const h=document.documentElement;setP(h.scrollTop/((h.scrollHeight-h.clientHeight)||1))};s();addEventListener("scroll",s,{passive:true});return()=>removeEventListener("scroll",s)},[]);
return <button aria-label="Kembali ke atas" className={"top"+(p>.08?" show":"")} onClick={()=>scrollTo({top:0,behavior:"smooth"})}><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" className="tr"/><circle cx="24" cy="24" r="21" className="tp" style={{strokeDashoffset:132*(1-p)}}/></svg><span>↑</span></button>}
function SocialIcon({name}){return <span className={"social-icon "+name} aria-hidden="true"><svg viewBox="0 0 24 24">
{name==="whatsapp"?<><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.3l1.2-5A8.4 8.4 0 1 1 20.5 11.7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1.1-.3-2.4-.9-3.7-2.1-1.5-1.4-2.4-3-2.6-4.1-.2-.7.1-1.3.5-1.6Z" fill="currentColor"/></>:name==="instagram"?<><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.8" r="1.2" fill="currentColor"/></>:name==="tiktok"?<path d="M19.6 8.1a6.7 6.7 0 0 1-4-1.3v8.1a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.5 2.5 0 1 0 1.3 2.2V2.5h3.1c.2 2 1.8 3.6 4 3.8v1.8Z" fill="currentColor"/>:name==="github"?<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/>:<><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></>}
</svg></span>}
function Modal({p,close}){useEffect(()=>{const k=e=>e.key==="Escape"&&close();addEventListener("keydown",k);document.body.style.overflow="hidden";return()=>{removeEventListener("keydown",k);document.body.style.overflow=""}},[]);
return <div className="md-b" onClick={close}><div className="card md" role="dialog" aria-modal="true" aria-label={p[1]} onClick={e=>e.stopPropagation()}>
<div className="th" style={{background:`linear-gradient(135deg,${p[5]})`}}>{p[6]?<img className="project-preview" src={p[6]} alt={`Tangkapan layar ${p[1]}`} style={p[7]?{objectFit:p[7]}:undefined}/>:<ProjectPlaceholder title={p[1]}/>}</div>
<div className="md-c"><small>{p[3]}</small><h3>{p[1]}</h3><p>{p[2]}</p>
<div className="tag" style={{marginTop:16}}>Teknologi</div><div>{p[4].map(c=><span className="chip" key={c}>{c}</span>)}</div>
<div className="tag" style={{marginTop:16}}>Alur Pengerjaan</div><div>{["Riset","Desain","Pengembangan","Uji Coba"].map((s,i)=><span className="chip" key={s}>{i+1}. {s}</span>)}</div>
<div className="md-a">{p[8]&&<a className="btn p sm" href={p[8]} target="_blank" rel="noopener noreferrer">Kunjungi Website ↗</a>}<a className="btn o sm" href="#contact" onClick={close}>Diskusikan Proyek Serupa</a><button className="btn o sm" onClick={close}>Tutup</button></div></div></div></div>}
function Typed({words=["Dede Maulana","Dema","Web Developer","UI/UX Enthusiast"]}){
const [t,setT]=useState(""),[i,setI]=useState(0),[del,setDel]=useState(false);
useEffect(()=>{
if(matchMedia("(prefers-reduced-motion: reduce)").matches){setT(words[0]);return}
const w=words[i];let ms=del?40:90;
if(!del&&t===w)ms=1700;else if(del&&t==="")ms=350;
const id=setTimeout(()=>{
if(!del&&t===w)setDel(true);
else if(del&&t===""){setDel(false);setI((i+1)%words.length)}
else setT(del?w.slice(0,t.length-1):w.slice(0,t.length+1))},ms);
return()=>clearTimeout(id)},[t,i,del]);
return <><span className="tw">{t}</span><span className="caret"/></>}
function HeroCard(){
const r=useRef();
const mv=e=>{const c=r.current,b=c.getBoundingClientRect();const x=(e.clientX-b.left)/b.width,y=(e.clientY-b.top)/b.height;
c.style.setProperty("--ry",(x-.5)*24+"deg");c.style.setProperty("--rx",(.5-y)*24+"deg");c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");c.classList.add("act")};
const lv=()=>{const c=r.current;c.classList.remove("act");c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")};
return <div className="hc rv" onPointerMove={mv} onPointerLeave={lv}><div className="hc-ring"/>
<div className="hc-float"><div className="hc-card" ref={r}>
<div className="hc-bg"/><div className="hc-grid"/>
<div className="hc-top"><span>● DEV ID</span><span>2026</span></div>
<img className="hc-ph" src={FOTO} alt="Foto Dede Maulana" draggable="false"/><div className="hc-sh"/>
<div className="hc-chip c1">⚛ React</div><div className="hc-chip c2">🎨 UI/UX</div><div className="hc-chip c3">✨ 10+ Proyek</div>
<div className="hc-name"><div><b>Dede Maulana</b><small>aka Dema · Web Developer</small></div><span className="hc-on"><i/>Open</span><div className="hc-bar"/></div>
<div className="hc-glare"/></div></div></div>}
function App(){
const [dark,setDark]=useState(true);
const [open,setOpen]=useState(false),[act,setAct]=useState("home"),[f,setF]=useState("all"),[toast,setToast]=useState(false),[sel,setSel]=useState(null),[send,setSend]=useState(false);
useReveal();
useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light"},[dark]);
useEffect(()=>{let lb=null;
const mv=e=>{const t=e.target;if(!t.closest)return;const c=t.closest(".card");if(c){const b=c.getBoundingClientRect();c.style.setProperty("--cx",e.clientX-b.left+"px");c.style.setProperty("--cy",e.clientY-b.top+"px")}
const bt=t.closest(".btn");if(lb&&lb!==bt)lb.style.translate="";
if(bt&&matchMedia("(hover:hover)").matches){const b=bt.getBoundingClientRect();bt.style.translate=`${(e.clientX-b.left-b.width/2)*.2}px ${(e.clientY-b.top-b.height/2)*.3}px`}lb=bt};
const ck=e=>{const b=e.target.closest&&e.target.closest(".btn");if(!b)return;const r=b.getBoundingClientRect(),s=document.createElement("span"),d=Math.max(r.width,r.height)*2;s.className="rip";s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;b.appendChild(s);setTimeout(()=>s.remove(),650)};
document.addEventListener("pointermove",mv);document.addEventListener("click",ck);return()=>{document.removeEventListener("pointermove",mv);document.removeEventListener("click",ck)}},[]);

useEffect(()=>{const g=document.getElementById("glow"),p=document.getElementById("prog"),tl=document.querySelector(".tl");
const m=e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"};
const s=()=>{const h=document.documentElement;p.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+"%";
NAV.forEach(([id])=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<140)setAct(id)});
if(tl){const b=tl.getBoundingClientRect();tl.style.setProperty("--tp",Math.max(0,Math.min(100,(innerHeight*.6-b.top)/b.height*100))+"%")}};
addEventListener("mousemove",m);addEventListener("scroll",s,{passive:true});return()=>{removeEventListener("mousemove",m);removeEventListener("scroll",s)}},[]);
const flip=e=>{const next=!dark,go=()=>{document.documentElement.dataset.theme=next?"dark":"light"};
if(!document.startViewTransition||matchMedia("(prefers-reduced-motion: reduce)").matches){setDark(next);return}
const x=e.clientX,y=e.clientY,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
const t=document.startViewTransition(go);setDark(next);
t.ready.then(()=>document.documentElement.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${r}px at ${x}px ${y}px)`]},{duration:650,easing:"ease-in-out",pseudoElement:"::view-transition-new(root)"})).catch(()=>{})};
const list=PROJ.filter(p=>f==="all"||p[0]===f);
return <>
<a className="skip" href="#about">Lewati ke konten</a><div id="prog"/><div id="glow"/><TopBtn/>
<nav><div className="wrap">
<a className="logo" href="#home"><img src={LOGO} alt="Logo Dede Maulana"/>DEDE MAULANA</a>
<div className={"links"+(open?" open":"")}>{NAV.map(([id,l])=><a key={id} href={"#"+id} className={act===id?"on":""} onClick={()=>setOpen(false)}>{l}</a>)}</div>
<div className="nr"><button className="tg" aria-label={dark?"Ubah ke mode terang":"Ubah ke mode gelap"} onClick={flip}>{dark?<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>:<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/></svg>}</button>
<a className="btn p sm hide-sm" href="#contact">Hubungi Saya</a><button className="tg burger" aria-label="Menu" onClick={()=>setOpen(!open)}>☰</button></div>
</div></nav>

<header id="home" className="hero">
<div className="blob" style={{width:300,height:300,background:"#a78bfa",top:-60,right:-40}}/><div className="blob" style={{width:240,height:240,background:"#c084fc",bottom:0,left:-60,animationDelay:"-4s"}}/>
<div className="wrap">
<div className="rv"><span className="badge"><b/>PELAJAR PPLG BERPRESTASI</span>
<h1>Membangun Pengalaman Digital Melalui <span className="gt">Kreativitas</span> dan Kode.</h1>
<div className="hi"><span className="hi-greeting"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12V5.5a1.5 1.5 0 0 1 3 0V11 4.5a1.5 1.5 0 0 1 3 0V11 6.5a1.5 1.5 0 0 1 3 0v7l1-2a1.5 1.5 0 0 1 2.8 1.1l-2.4 5.1A4 4 0 0 1 14.8 20h-3a4 4 0 0 1-3.2-1.6l-3-4a1.5 1.5 0 0 1 2.3-1.9L8 14v-2Z"/><path d="m5 5-1-1m1 5H3" strokeWidth="1.6"/></svg>Halo, saya</span><span><Typed/></span></div><p className="l">Pelajar pengembangan perangkat lunak yang berfokus membangun website modern, interaktif, dan mengutamakan nilai-nilai yang bermakna nyata.</p>
<div className="ctas"><a className="btn p" href="#projects">Lihat Proyek →</a><a className="btn o" href="#contact">⬇ Unduh CV</a></div>
<div className="loc">📍 Jawa Barat, ID</div></div>
<HeroCard/>
</div>
<div className="wrap"><div className="stats rv">
<div className="st"><Count to={10} suffix="+"/><span>Proyek<br/>Selesai</span></div>
<div className="st"><Count to={100} suffix="%"/><span>Semangat<br/>Belajar &amp; Kolaborasi</span></div>
<div className="st"><b style={{fontSize:22}}>XI PPLG 2</b><span>SMK Negeri 1 Ciomas</span></div></div></div>
</header>

<div className="mq" aria-hidden="true"><div className="mq-t">{[...TECH,...TECH].map((t,i)=><span key={i}><i/>{t}</span>)}</div></div>
<section id="about" className="alt"><div className="wrap">
<Head e="TENTANG SAYA" t="Lebih dari Sekadar Kode." s="Memahami pengembangan web dengan pendekatan kreatif, rasa ingin tahu, dan tanggung jawab dalam setiap karya."/>
<div className="g2">
<Tilt className="card rv"><span className="tag">Profil Singkat</span><h3>Pengembang Masa Depan dengan Semangat Inovasi</h3>
<p>Saya adalah siswa kelas XI PPLG di SMK Negeri 1 Ciomas yang tertarik pada web development dan desain UI/UX. Saya suka menciptakan solusi digital yang rapi, fungsional, dan nyaman digunakan oleh banyak orang.</p>
<div className="q">“Setiap baris kode adalah kesempatan untuk belajar sesuatu yang baru.” — Dede Maulana</div></Tilt>
<Tilt className="card rv"><span className="tag">Pendidikan</span><h3>SMK Negeri 1 Ciomas</h3><p><b style={{color:"var(--tx)"}}>Jurusan:</b> Pengembangan Perangkat Lunak dan Gim (PPLG)</p><p style={{marginTop:8}}>Fokus pada pemrograman dasar, basis data, pengembangan web, serta praktik proyek berbasis tim.</p><div style={{marginTop:14}}><span className="chip">Kelas XI</span><span className="chip">PPLG 2</span></div></Tilt></div>
<div className="g2b">
<Tilt className="card rv"><span className="tag">Nilai &amp; Kekuatan</span>{[["Web Development","Membuat website responsif"],["UI/UX Design","Antarmuka yang intuitif"],["Problem Solving","Logika terstruktur"],["Kerja Tim","Kolaborasi efektif"]].map(x=><p key={x[0]} style={{marginTop:8}}>✦ <b style={{color:"var(--tx)"}}>{x[0]}</b> — {x[1]}</p>)}</Tilt>
<Tilt className="card rv"><span className="tag">Organisasi &amp; Ekstrakurikuler</span><h3>Kepemimpinan &amp; Organisasi Kesiswaan</h3><p>Aktif dalam kegiatan OSIS dan komunitas teknologi sekolah untuk melatih kepemimpinan dan komunikasi.</p><div style={{marginTop:12}}><span className="chip">OSIS</span><span className="chip">Pramuka</span><span className="chip">Komunitas Coding</span></div></Tilt></div>
</div></section>

<section id="skills"><div className="wrap">
<Head e="KEAHLIAN" t="Keahlian dan Teknologi" s="Teknologi yang saya pelajari dan gunakan untuk membangun karya digital."/>
<div className="g4">{SKILLS.map(([i,t,d,l])=><Tilt key={t} className="card rv"><div className="ico">{i}</div><h3 style={{fontSize:16}}>{t}</h3><p style={{fontSize:12}}>{d}</p>{l.map(([n,v])=><div className="sk" key={n}><div className="r"><span>{n}</span><span style={{color:"var(--pr)"}}>{v}%</span></div><div className="bar"><i style={{"--w":v+"%"}}/></div></div>)}</Tilt>)}</div>
</div></section>

<section id="projects" className="alt"><div className="wrap">
<Head e="KATALOG KARYA" t="Setiap Ide Memiliki Cerita, Setiap Karya Memiliki Proses." s="Beberapa karya terbaik yang saya kerjakan selama belajar di SMK Negeri 1 Ciomas."/>
<div className="tabs rv">{[["all","Semua Karya"],["web","Web Development"],["ui","UI/UX Design"]].map(([k,l])=><button key={k} className={f===k?"on":""} onClick={()=>setF(k)}>{l}</button>)}</div>
<div className="g2e">{list.length?list.map(p=><Tilt key={p[1]} className="card pj"><div className="th" style={{background:`linear-gradient(135deg,${p[5]})`}}>{p[6]?<img className="project-preview" src={p[6]} alt={`Pratinjau ${p[1]}`} style={p[7]?{objectFit:p[7]}:undefined}/>:<ProjectPlaceholder title={p[1]}/>}</div>
<div className="bd2"><small>{p[3]}</small><h3>{p[1]}</h3><p style={{margin:"6px 0 10px"}}>{p[2]}</p>{p[4].map(c=><span className="chip" key={c}>{c}</span>)}<div style={{marginTop:14,display:"flex",gap:8,flexWrap:"wrap"}}><button className="btn o sm" onClick={()=>setSel(p)}>Lihat Detail →</button>{p[8]&&<a className="btn p sm" href={p[8]} target="_blank" rel="noopener noreferrer">Kunjungi Website ↗</a>}</div></div></Tilt>):<p className="empty-projects" role="status">Belum ada proyek untuk kategori ini.</p>}</div>
</div></section>

<section id="certs"><div className="wrap">
<Head e="SERTIFIKAT & LENCANA" t="Terus Belajar, Terus Berkembang." s="Bukti dedikasi dalam mengembangkan kompetensi melalui pelatihan dan kompetisi."/>
<div className="certificate-group rv">
<div className="certificate-bar"><span className="certificate-icon">💻</span><div><small>KATEGORI 1</small><h3>Sertifikat PPLG</h3></div></div>
<div className="cg">{PPLG_CERTS.map(c=><Tilt key={c.title} className="card rv certificate-card" style={{padding:16}}><div className="ct certificate-image"><img src={c.image} alt={`Sertifikat ${c.title}`}/></div><div className="certificate-copy"><h3>{c.title}</h3><p className="certificate-issuer">{c.issuer}</p>{c.date&&<p className="certificate-date">{c.date}</p>}<p className="certificate-description">{c.description}</p></div></Tilt>)}</div>
</div>
<div className="certificate-group rv">
<div className="certificate-bar"><span className="certificate-icon">🏕️</span><div><small>KATEGORI 2</small><h3>Sertifikat Lainnya</h3></div></div>
<div className="cg">{ORG_CERTS.map(c=><Tilt key={c.title} className="card rv certificate-card" style={{padding:16}}><div className="ct certificate-image"><img src={c.image} alt={`Sertifikat ${c.title}`}/></div><div className="certificate-copy"><h3>{c.title}</h3><p className="certificate-issuer">{c.issuer}</p>{c.date&&<p className="certificate-date">{c.date}</p>}<p className="certificate-description">{c.description}</p></div></Tilt>)}</div>
</div>
</div></section>

<section id="journey" className="alt"><div className="wrap">
<Head e="TIMELINE" t="Perjalanan Saya" s="Langkah pembelajaran, kolaborasi, dan karya yang terus berkembang."/>
<div className="tl">{TL.map(([d,t,p])=><div className="ti rv" key={t}><span className="chip">{d}</span><h4>{t}</h4><p>{p}</p></div>)}</div>
</div></section>

<section id="contact"><div className="wrap ct2">
<div className="rv"><div className="eyebrow" style={{textAlign:"left"}}>HUBUNGI SAYA</div><h2>Punya Ide? Mari Wujudkan Bersama.</h2><p className="sub" style={{textAlign:"left",margin:"0 0 20px"}}>Saya terbuka untuk kolaborasi, proyek, dan diskusi tentang teknologi.</p>
<a className="ci" href="mailto:dedemaulana123ok@gmail.com"><SocialIcon name="email"/><span><small>Email</small><b>dedemaulana123ok@gmail.com</b></span></a>
{SOCIALS.map(([name,value,url,icon])=><a className="ci" href={url} key={name} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${value}`}><SocialIcon name={icon}/><span><small>{name}</small><b>{value}</b></span></a>)}
<div className="ci">📍 Jawa Barat, Indonesia</div></div>
<form className="card rv" onSubmit={e=>{e.preventDefault();const fm=e.target;setSend(true);setTimeout(()=>{setSend(false);setToast(true);fm.reset();setTimeout(()=>setToast(false),3000)},1200)}}><div className="fm">
<div><label>Nama</label><input required placeholder="Nama Anda"/></div><div><label>Email</label><input required type="email" placeholder="email@contoh.com"/></div>
<div className="f"><label>Subjek</label><input placeholder="Topik pesan"/></div><div className="f"><label>Pesan</label><textarea rows="4" required placeholder="Tulis pesan Anda di sini..."/></div>
<div className="f"><button className="btn p" disabled={send} style={{width:"100%",justifyContent:"center"}}>{send?<><span className="spin"/>Mengirim...</>:"Kirim Pesan ➤"}</button></div></div></form>
</div></section>

<footer><div className="wrap"><div className="fg">
<div><a className="logo" href="#home"><img src={LOGO} alt="Logo Dede Maulana"/>DEDE MAULANA</a><p style={{fontSize:13,color:"var(--mu)",marginTop:10,maxWidth:300}}>Creative Technologist & Front-End Dev yang membangun pengalaman digital bermakna.</p></div>
<div><h5>Navigasi</h5>{NAV.slice(1,5).map(([id,l])=><a key={id} href={"#"+id}>{l}</a>)}</div>
<div><h5>Sosial</h5>{SOCIALS.map(([name,value,url])=><a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${value}`}>{name}</a>)}<a href="mailto:dedemaulana123ok@gmail.com">Email</a></div></div>
<div className="copy">© 2026 Dede Maulana. All rights reserved.</div></div></footer>
{sel&&<Modal p={sel} close={()=>setSel(null)}/>}
{toast&&<div className="toast">Pesan terkirim, terima kasih! ✓</div>}
</>}
export default App;
