import React from 'react'
import Gutter from '@/components/Gutter/Gutter'
import './page.scss'
import Title from '@/components/Title/title'
import { AboutUsInformation } from '@/constants/AboutUsInformation'
const AboutUs = () => {
  return (
    <div className='md:container mx-auto container mb-20'>
        <Gutter />
        <Title title='About Us' color='green'/>
        <div className='grid md:grid-cols-2'>
          <div className='flex flex-col gap-2 p-4 startAnimationUp'>
            <h2 className='text-3xl revue flex justify-center entryAnimateUp'>Our Company</h2>
            {AboutUsInformation.about.map((about, idx)=>{
              let temp = about.split('Asian Elevators')
              return(
                <span key={idx}>
                  {temp.map((t, idx2)=>(
                    <span className='entryAnimateRight' key={idx2}>
                      {t.length>0&&t.startsWith(' ')&&<span className='revue text-xl'>Asian Elevators</span>} 
                      {t.length>0?t:''}
                    </span>
                  ))}
                </span>
              )
            })}

            <h2 className='text-3xl revue flex justify-center entryAnimateUp'>Our Mission</h2>
            {AboutUsInformation.mission.map((mission, idx)=>{
              let temp = mission.split('Asian Elevators')
              return(
                <span key={idx}>
                  {temp.map((t, idx2)=>(
                    <span className='entryAnimateRight' key={idx2}>
                      {t.length>0&&t.startsWith(' ')&&<span className='revue text-xl'>Asian Elevators</span>} 
                      {t.length>0?t:''}
                    </span>
                  ))}
                </span>
              )
            })}

            <h2 className='text-3xl revue flex justify-center entryAnimateUp'>Our Vision</h2>
            {AboutUsInformation.vision.map((vision, idx)=>{
              let temp = vision.split('Asian Elevators')
              return(
                <span key={idx}>
                  {temp.map((t, idx2)=>(
                    <span className='entryAnimateRight' key={idx2}>
                      {t.length>0&&t.startsWith(' ')&&<span className='revue text-xl'>Asian Elevators</span>} 
                      {t.length>0?t:''}
                    </span>
                  ))}
                </span>
              )
            })}
          </div>
          <img src="/about-us.webp" alt="About Asian Elevators Image" className={`aboutus-img rounded-3xl entryAnimateLeft`} />
        </div>
        <div className='grid grid-cols-1 Body'>
          <div className='eventContainer'>
              <div className='eventHeading revue entryAnimateUp'>
                  <h2>
                    {AboutUsInformation.awards.title} & {AboutUsInformation.certificates.title}
                  </h2>
              </div>
              <div className={`grid xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-20 eventImageContainer`}>
                  {AboutUsInformation.awards.images.map((image, idx2)=>(
                      <figure key={idx2} className="blue frame flex justify-center entryAnimateDown">
                          <img src={`/aboutUs/${AboutUsInformation.awards.folderName}/${image.img}`} alt={image.alt} className='h-72 w-auto self-center entryAnimateUp'/>
                          <figcaption>
                              <h2>{image.alt}</h2>
                               <span className="fn">Award</span>
                          </figcaption>
                      </figure>
                  ))}
              </div>
          </div>
        </div> 
        <div className='grid grid-cols-1 Body'>
          <div className='eventContainer'>
              <div className='eventHeading'>
                  {/* {AboutUsInformation.certificates.title} */}
              </div>
              <div className={`grid xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-20 eventImageContainer`}>
                  {AboutUsInformation.certificates.images.map((image, idx2)=>(
                      <figure key={idx2} className="blue frame flex justify-center entryAnimateDown">
                          <img src={`/aboutUs/${AboutUsInformation.certificates.folderName}/${image.img}`} alt={image.alt} className='h-72 w-auto entryAnimateUp'/>
                          <figcaption>
                          <h2>{image.alt.replace('Certificate', '')}</h2>
                               <span className="fn">Certificate</span>
                          </figcaption>
                      </figure>
                  ))}
              </div>
          </div>
        </div> 
    </div>
  )
}

export default AboutUs