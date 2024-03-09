const lyricText = document.getElementById('lyrics-text'); 
const audio = document.getElementById('audio');

const lyrics = [
    { time: "15:52", text: 'Karena kamu aku rela menunggu semua',}, 
    { time: "21:10", text: 'Sungguh berat yang ku rasa' }, 
    { time: "23:20", text: 'Karena kamu aku tetap bertahan' }, 
    { time: "27:04", text: 'Meskipun kini engkau di peluknya' }, 
    { time: "31:27", text: 'Masih mungkinkah semua abadi seperti dahulu' }, 
    { time: "38:81", text: 'KARENAMU' }, 
    { time: "39:80", text: 'SELALU' }, 
    { time: "40:85", text: 'KARENAMU' }, 
    { time: "42:04", text: 'KU CEMBURU...' },
    { time: "46:79", text: 'Teruslah melangkah melupakan dirinya' }, 
    { time: "50:18", text: 'Tinggalkan dia untukku sekarang' },
    { time: "54:53", text: 'Saatnya tunjukkan semua tentang hatimu' },
    { time: "58:10", text: 'Bahwa akulah yang pantas untukmu' },
    { time: "61:49", text: 'Hanya kamu di setiap helahan nafasku' },
    { time: "69:50", text: 'Hanya kamu, hanya kamu' },
    { time: "75:00", text: '--------SELESAI--------' },
];

function milisecondsChanger(time) {
    let splitTime = time.split(':');
    let seconds = parseInt(splitTime[0]);
    let milliseconds = parseInt(splitTime[1]);
    return (seconds * 1000) + milliseconds;
}

function setTiming(lyrics) {
    lyricText.innerText = 'Enjoy the music!';
    for (const lyric of lyrics) {
        setTimeout(function() {
            new Typed(lyricText, {
                strings: [`${lyric.text}`],
                showCursor: false,
            });
        }, milisecondsChanger(lyric.time));
    }
}

audio.addEventListener('play', function() {
    setTiming(lyrics);
    document.querySelector('#play-pause-icon').className = 'ph-bold ph-pause';
});