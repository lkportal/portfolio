import Menus from "./Menus"
import Image from "next/image"
import illustrator from '../../public/pe2.png'
import style from '../styles/home.module.css'
export default function Home() {
  return (
   
    
  <main className={style.conteiner}>
    <section  className={style['conteiner-section']}>
      <div>
          <p className={style.textAboutMe}>Olá, sou <span>Lucas</span>,  um entusiasta da tecnologia
 apaixonado por explorar o mundo da programação e 
 inovação. Como estudante dedicado, minha jornada
  no universo da tecnologia tem sido 
uma emocionante busca pelo conhecimento e pela excelência</p>
      </div>
      <div>
        <Image src={illustrator} className={style.illustrator}  />
      </div>
    </section>
  </main>
   
  )
}
