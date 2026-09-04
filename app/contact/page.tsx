import {ContactForm} from '@/components/contact-form';import {PageHero} from '@/components/page-hero';
export const metadata={title:'문의하기',description:'아르노젠 사업 및 견적 문의'};
export default function ContactPage(){return <><PageHero eyebrow="CONTACT US" title="Let’s build the next step." description="사업 및 견적 문의를 남겨 주세요. 현재는 문의 접수 UI와 입력 검증을 제공하는 MOCK 버전입니다."/><section className="section wrap contact-layout"><div><p className="eyebrow">PROJECT INQUIRY</p><h2>프로젝트에 대해<br/>알려주세요.</h2><p className="lead">필수 항목을 입력하고 개인정보 수집 및 이용에 동의하면 안내 메시지를 확인할 수 있습니다.</p></div><ContactForm/></section></>}
