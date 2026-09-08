'use client';

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import {sitePath} from '@/lib/site-path';

const stages=[
  {id:'cell-line',number:'01',title:'Cell Line Development',type:'DEVELOPMENT',text:'목표 분자와 프로젝트의 특성을 바탕으로 세포주 개발 전략을 세웁니다.'},
  {id:'process',number:'02',title:'Process Development',type:'DEVELOPMENT',text:'재현성과 확장성을 고려해 공정 조건과 다음 단계의 기준을 검토합니다.'},
  {id:'analytical',number:'03',title:'Analytical Development',type:'DEVELOPMENT',text:'품질 특성 이해를 돕는 분석 접근법을 설계해 개발 의사결정을 지원합니다.'},
  {id:'substance',number:'04',title:'Drug Substance',type:'MANUFACTURING',text:'원료의약품 제조를 위한 생산 흐름과 공정 이행 가능성을 준비합니다.'},
  {id:'product',number:'05',title:'Drug Product',type:'MANUFACTURING',text:'제형과 충전 공정의 요구사항을 반영해 완제의약품 제조를 계획합니다.'},
  {id:'quality',number:'06',title:'Quality',type:'QUALITY',text:'문서화와 시험 데이터에 기반한 일관된 품질 기준을 각 단계에 연결합니다.'},
];

export function ProcessExperience(){return <section className="process-section process-experience" aria-labelledby="process-title"><div className="wrap"><p className="eyebrow light">INTEGRATED CDMO PROCESS</p><h2 id="process-title">A connected path<br/>to your molecule.</h2><Tabs defaultValue={stages[0].id} className="cdmo-tabs"><TabsList variant="line" className="cdmo-tabs-list">{stages.map(stage=><TabsTrigger value={stage.id} className="cdmo-tab" key={stage.id}><span>{stage.number}</span>{stage.title}</TabsTrigger>)}</TabsList>{stages.map(stage=><TabsContent value={stage.id} className="cdmo-panel" key={stage.id}><p className="cdmo-panel-number">{stage.number}</p><div><p className="eyebrow light">{stage.type}</p><h3>{stage.title}</h3><p>{stage.text}</p></div><a className="button button-light" href={sitePath(stage.type==='QUALITY'?'/services/quality':stage.type==='MANUFACTURING'?'/services/manufacturing':'/services/development')}>서비스 자세히 보기 <span>→</span></a></TabsContent>)}</Tabs></div></section>}
