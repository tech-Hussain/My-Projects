import yt from 'yt-converter'
yt.getInfo("https://www.youtube.com/watch?v=JJ5r5Z6G2Zo&list=RDGMEM2j3yRsqu_nuzRLnHd2bMVAVMJJ5r5Z6G2Zo&start_radio=1&ab_channel=SonyMusicIndiaVEVO").then(info => {
    console.log(info.title);
});