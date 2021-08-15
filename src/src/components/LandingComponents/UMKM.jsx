import React from 'react'
import styled from 'styled-components'
import logo1 from '../../shared/umkm1.png'
import logo2 from '../../shared/umkm2.png'
import logo3 from '../../shared/tes.png'

console.log(logo1)
console.log(logo2)

const Wrapper = styled.section`
    margin: auto;
    display: block;
    top: 2640px;
    left: 0px;
    height: 1150px;
    width: 1050px;
    overflow: hidden;
    padding: 1.5rem;
    backgroundImage: img src${logo1}
`
const Judul = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 4rem;
`;

const Judul1 = styled(Judul)`
    text-align: center;
`
const Judul3 = styled(Judul)`
    text-align: right;
`
const Isi = styled.p`
    padding-top: 1rem;
    overflow: hidden;
    font-family: Poppins;
    font-size: 1.5rem;
`
const Isi1 = styled(Isi)`
    text-align: center;
    float: center;
    height: 2rem;
`
const Isi12 = styled(Isi)`
    text-align: center;
    float: center;
    height: 3.5rem;
    padding-bottom: 7rem;
`
const Isi2 = styled(Isi)`
    width: 40rem;
    height: 5.5rem;
    padding-bottom: 7rem;
`
const Isi3 = styled(Isi)`
    text-align: right;
    float: right;
    width: 45rem;
    height: 5.5rem;
    padding-bottom: 7rem;
`

const UMKM = () => {
    return (
        <Wrapper style={{ backgroundImage: `url(${logo3})`, backgroundRepeat: 'no-repeat' }}>
            <div class='paragraf 1'>
                <Judul1 class='1'>UMKM?</Judul1>
                <Isi1 class='1'>Arti UMKM sendiri telah ditetapkan oleh pemerintah dalam UU No. 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah (UMKM). </Isi1>    
                <Isi12 class='1'>UMKM artinya sebagai bisnis yang dijalankan individu, rumah tangga, atau badan usaha ukuran kecil. Penggolongan UMKM lazimnya dilakukan dengan batasan omzet per tahun, jumlah kekayaan atau aset, serta jumlah karyawan.</Isi12>
            </div>
            <div class='paragraf 2'>       
                <img src={logo1} alt="Logo1" width="300px" height="200px" float="right" align="right" />
                <Judul class='2'>Mengapa UMKM?</Judul>    
                <Isi2 class='2'>Dalam masa pandemi Covid-19 ini, dengan banyaknya pembatasan mobilitas oleh pemerintah, UMKM di Indonesia mengalami penurunan pendapatan.</Isi2>
            </div>
            <div class='paragraf 3'>
                <img src={logo2} alt="Logo2" width="300px" height="200px" float="left" align="left" />
                <Judul3 class='3'>Tawaran Kami?</Judul3>
                <Isi3 class='3'>Kecenderungan masyarakat Indonesia yang menggunakan internet mendorong kami untuk membentuk sebuah platform katalog UMKM. Katalog ini akan dapat dinilai oleh pelanggan UMKM itu sendiri.</Isi3>
            </div>
        </Wrapper>
    )
}

export default UMKM