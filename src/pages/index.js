
import Image from "next/image"
import illustrator from '../../public/pe2.png'
import style from '../styles/home.module.css'
import iconLinkedin from '../../public/linkedin.png'
import iconGithub from '../../public/github.png'
import iconGmail from '../../public/gmail.png'
  

import Link from "next/link"


export default function Home() {
  return (
   
      <div className={style['conteiner-card']}>

            
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
  <div className={style['conteiner-icons']}>
   <Link href="https://www.linkedin.com/in/lkportal/" target="_blank"><Image src={iconLinkedin}  className={style['icons-imgs']}/></Link> 
  <Link href="https://github.com/lkportal" target="_blank"> <Image src={iconGithub} className={style['icons-imgs']} /></Link>
  <Link href="mailto:lksxim@gmail.com" target="_blank"> <Image src={iconGmail} className={style['icons-imgs']} /></Link>
</div>
      </div>
  
  
  )
}
