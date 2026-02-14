const paragraphs = [
`happy valentine’s day yaa 🤍`,

`aku sempet mikir lama mau ngomong apa hari ini, tapi aku nggak mau kedengeran terlalu sempurna. soalnya yang kita punya juga nggak sempurna, dan justru itu yang bikin semuanya berarti banget buat aku.`,

`jujur, jalanin semuanya sama kamu nggak selalu gampang. kadang capek, kadang bingung, kadang overthinking. tapi satu hal yang selalu aku rasain: semuanya nyata ayy. nggak pernah palsu, nggak pernah cuma setengah-setengah.`,

`aku sayang kamu bukan karena semuanya selalu baik-baik aja, tapi karena kamu tetap tinggal. kamu tetap usaha. kamu tetap dengerin. kamu tetap milih kita, bahkan pas lagi berat. itu hal kecil tapi buat aku besar banget.`,

`sama kamu aku nggak ngerasa harus jadi versi paling keliatan sempurna dari diri aku. aku bisa lagi berantakan, lagi diem, lagi nggak tau harus gimana, dan tetap ngerasa diterima. itu jarang banget aku rasain.`,

`aku juga paling suka justru momen-momen kecil kita. ngobrol, facetime tiap malem, ketawa random, atau cuma diem doang dimotor. rasanya tenang aja gitu. sederhana, tapi cukup.`,

`hari ini bukan cuma soal valentine sih. ini soal kita. soal gimana kita masih di sini, masih milih satu sama lain, walaupun nggak selalu mudah. dan kalau cinta itu pilihan, ya aku mau kamu tau… aku milih kamu.`,

`hari ini, besok, dan seterusnya.`,

`i love you, so deeply. 🤍`
];

let currentParagraph = 0;
let index = 0;
let started = false;

const typingEl = document.getElementById("typingText");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startLove);

function typeParagraph() {
    if (currentParagraph >= paragraphs.length) {
        document.getElementById("ourPhoto").style.opacity = "1";

        setTimeout(() => {
            document.getElementById("popup").style.display = "flex";
        }, 2000);
        return;
    }

    const text = paragraphs[currentParagraph];

    if (index < text.length) {
        typingEl.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeParagraph, 22); // typing speed (lebih smooth)
    } else {
        typingEl.innerHTML += "\n\n";
        currentParagraph++;
        index = 0;
        setTimeout(typeParagraph, 700);
    }
}

function startLove() {
    if (started) return;

    typingEl.style.opacity = "1";
    startBtn.style.display = "none";

    typeParagraph();
    started = true;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

/* Heart effect (tidak trigger saat klik button) */
document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") return;

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        heart.style.fontSize = (Math.random() * 18 + 14) + "px";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
});

/* Stars background */
for (let i = 0; i < 70; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(star);
}