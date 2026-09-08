import { company } from '@/content/company';
import { facility } from '@/content/facility';
import { latestNews } from '@/content/news';
import { services } from '@/content/services';
import { MockImage } from '@/components/mock-image';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProcessExperience } from '@/components/process-experience';
import { sitePath } from '@/lib/site-path';

export default function Home() {
  return <div className="home-page">
    <HeroCarousel/>
    <section id="about-arnozen" className="section wrap intro-grid reveal"><div><p className="eyebrow">ABOUT ARNOZEN</p><h2>개발의 가능성을<br />생산의 신뢰로 연결합니다.</h2></div><div className="intro-copy"><p>{company.overview}</p><a href={sitePath('/about/company')} className="text-link">회사소개 보기 <span>→</span></a></div></section>
    <section className="section services-section"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">OUR SERVICES</p><h2>Integrated expertise.<br />One focused partner.</h2></div><p>개발 초기부터 상업 생산까지, 프로젝트의 다음 단계를 함께 설계합니다.</p></div><div className="service-grid">{services.map((service,index)=><a href={sitePath(service.href)} className="service-card" key={service.name}><MockImage label={service.mockLabel} size="1200 × 800" ratio="3:2" variant={`service-${index}`} src={service.image} alt={service.alt}/><div className="service-card-body"><p className="card-number">0{index+1}</p><h3>{service.name}</h3><p>{service.shortDescription}</p><span className="card-arrow">→</span></div></a>)}</div></div></section>
    <ProcessExperience/>
    <section className="section wrap facility-summary reveal"><MockImage label="FACILITY RENDERING" size="1600 × 1000" ratio="8:5" variant="facility" src="/images/현대 산업 오피스 캠퍼스와 조경 도로.png" alt="조경과 도로를 갖춘 현대적 바이오 캠퍼스"/><div className="facility-copy"><p className="eyebrow">FACILITY</p><h2>준비된 기반 위에<br />확장 가능한 생산을.</h2><p>{facility.summary}</p><dl><div><dt>Location</dt><dd>{facility.location}</dd></div><div><dt>Expected CAPA</dt><dd>{facility.capa}</dd></div></dl><a href={sitePath('/about/facility')} className="text-link">사업장 살펴보기 <span>→</span></a></div></section>
    <section className="section news-section"><div className="wrap"><div className="section-heading compact"><div><p className="eyebrow">PR</p><h2>Newsroom</h2></div><a href={sitePath('/pr/news')} className="text-link">전체 보도자료 <span>→</span></a></div><div className="news-list">{latestNews.map(item=><a href={sitePath(`/pr/news/${item.slug}`)} className="news-row" key={item.slug}><div><span>{item.category}</span><time>{item.date}</time></div><h3>{item.title}</h3><span className="card-arrow">→</span></a>)}</div></div></section>
    <section className="contact-cta"><div className="wrap"><p className="eyebrow light">LET&apos;S START A CONVERSATION</p><h2>프로젝트의 다음 단계를<br />함께 준비하겠습니다.</h2><a className="button button-light" href={sitePath('/contact')}>문의하기 <span>→</span></a></div></section>
  </div>;
}
