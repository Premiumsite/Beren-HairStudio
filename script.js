document.addEventListener("DOMContentLoaded", () => {
    // Çiçek Yaprakları Konteyneri Seçimi (Global Olarak Dinlendi)
    const container = document.getElementById('flowerContainer');
    const isMobile = window.innerWidth < 768;

    // GERÇEKÇİ ÇİÇEK YAPRAĞI ÜRETİCİSİ
    function createPetal() {
        if (!container) return;

        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Premium boyut çeşitliliği
        const size = Math.random() * 18 + 12; // 12px - 30px arası zarif boyutlar
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.4}px`; // Gerçekçi gül yaprağı en-boy oranı
        
        // Ekrana rastgele yatay dağıtım
        petal.style.left = `${Math.random() * 100}vw`;
        
        // Rastgele düşüş hızları (Sinematik akış)
        const duration = isMobile ? (Math.random() * 3 + 5) : (Math.random() * 5 + 8); 
        petal.style.animationDuration = `${duration}s`; 
        
        // Yaprakların başlangıçtaki farklı rotasyon açıları
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(petal);
        
        // Performans dostu silme mekanizması
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // YOĞUNLUK AYARI (İstediğin gibi: PC'de yoğun, Mobilde kasmayacak akış)
    const petalInterval = isMobile ? 1200 : 350; 

    // Animasyonu Döngüye Al
    if (container) {
        setInterval(createPetal, petalInterval);
    }

    // MARQUEE (YORUMLAR) KUSURSUZ DÖNGÜ LOOPI
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        const contentHtml = marqueeContent.innerHTML;
        marqueeContent.innerHTML = contentHtml + contentHtml; // İçeriği klonlayarak boşluğu yok ettik
    }
});