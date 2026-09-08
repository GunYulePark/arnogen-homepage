import {sitePath} from '@/lib/site-path';
type Props={label:string;size:string;ratio:string;variant?:string;src?:string;alt?:string};
export function MockImage({label,size,ratio,variant='',src,alt}:Props){if(src)return <figure className={`mock-image real-image ${variant}`}>{/* oxlint-disable-next-line next/no-img-element */}<img src={sitePath(src)} alt={alt??label}/></figure>;return <figure className={`mock-image ${variant}`} aria-label={`${label} MOCK 이미지, 권장 해상도 ${size}, 비율 ${ratio}`}><figcaption className="mock-caption">{label}<span>{size} / {ratio}</span></figcaption></figure>}
