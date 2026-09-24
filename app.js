const business={name:'PAPPU LAUNDRY',phone:'7390900814',whatsapp:'7390900814',address:'Gaikwad Building, Namdev, Manpada Rd, Near Shiv Mandir, Patilwadi, Dombivli East, Maharashtra 421201'};
const maps=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;
document.querySelectorAll('.map-link').forEach(a=>a.href=maps);
document.querySelectorAll('.call-link').forEach(a=>a.href=`tel:${business.phone}`);
function whatsappUrl(message='Hello PAPPU LAUNDRY, I would like to enquire about your laundry service.') {return `https://wa.me/${business.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`}
document.querySelectorAll('.wa-link').forEach(a=>a.href=whatsappUrl());
document.querySelector('.menu-btn').addEventListener('click',e=>{const nav=document.querySelector('nav');nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));
document.querySelector('#bookingForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const msg=`Hello PAPPU LAUNDRY,\n\nI would like to enquire about your laundry service.\n\nName: ${d.get('name')}\nMobile: ${d.get('mobile')}\nService: ${d.get('service')}\nApprox. Clothes: ${d.get('clothes')||'-'}\nPickup/Drop-off: ${d.get('pickup')}\nPreferred Date: ${d.get('date')||'-'}\nMessage: ${d.get('message')||'-'}`;if(business.whatsapp.includes('YOUR_')){alert('Please update the WhatsApp number in app.js before sending enquiries.');return}window.open(whatsappUrl(msg),'_blank','noopener')});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
