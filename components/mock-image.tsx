type Props={label:string;size:string;ratio:string;variant?:string};
export function MockImage({label,size,ratio,variant=''}:Props){return <div className={`mock-image ${variant}`} role="img" aria-label={`${label} MOCK 이미지, 권장 해상도 ${size}, 비율 ${ratio}`}><div className="mock-caption">{label}<span>{size} / {ratio}</span></div></div>}
