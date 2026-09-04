type Props={label:string;size:string;ratio:string;variant?:string};
export function MockImage({label,size,ratio,variant=''}:Props){return <figure className={`mock-image ${variant}`} aria-label={`${label} MOCK 이미지, 권장 해상도 ${size}, 비율 ${ratio}`}><figcaption className="mock-caption">{label}<span>{size} / {ratio}</span></figcaption></figure>}
