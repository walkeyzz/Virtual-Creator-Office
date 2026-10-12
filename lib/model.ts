import { z } from 'zod';
export const stages = ['Dealing','Production','Review Brand','Posted'] as const;
const postUrl=z.string().max(2048).refine(v=>!v||/^https:\/\//i.test(v),'Gunakan link HTTPS');
const sow=z.object({id:z.string().min(1).max(100),label:z.string().min(1).max(200),platform:z.enum(['TikTok','Instagram Reels','Instagram Story','YouTube','Other']),deadline:z.string().max(10),stage:z.enum(stages),url:postUrl,postedDate:z.string().max(10)}).superRefine((s,c)=>{
 if(s.stage==='Posted'&&!s.url)c.addIssue({code:'custom',message:'SOW Posted membutuhkan bukti link post',path:['url']});
 if(s.url){const h=new URL(s.url).hostname.toLowerCase();const allowed=s.platform==='TikTok'?['tiktok.com']:s.platform.startsWith('Instagram')?['instagram.com']:s.platform==='YouTube'?['youtube.com','youtu.be']:[];if(allowed.length&&!allowed.some(a=>h===a||h.endsWith('.'+a)))c.addIssue({code:'custom',message:'Link tidak sesuai platform',path:['url']});}
});
const optionalDate=z.string().refine(v=>!v||/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v+'T12:00:00Z'))&&new Date(v+'T12:00:00Z').toISOString().slice(0,10)===v,'Tanggal tidak valid');
const receipt=z.object({id:z.string().uuid(),amount:z.number().positive().max(1e12),date:optionalDate.refine(v=>!!v,'Tanggal pembayaran wajib diisi'),note:z.string().max(500)});
const stageEvent=z.object({sowId:z.string(),stage:z.enum(stages),at:z.string(),source:z.string()});
export const brandSchema=z.object({confirmedDate:optionalDate.default(''),createdAt:z.string().default(''),payments:z.array(receipt).max(200).default([]),legacyPaidAmount:z.number().min(0).default(0),stageHistory:z.array(stageEvent).default([]),brand:z.string().trim().min(1).max(200),contact:z.string().max(300),fee:z.number().min(0).max(1e12),payment:z.enum(['Unpaid','Invoiced','Partial','Paid']),paymentDue:z.string().max(10),notes:z.string().max(20000),sows:z.array(sow).min(1).max(200)}).superRefine((b,c)=>{if(b.legacyPaidAmount+b.payments.reduce((n,p)=>n+p.amount,0)>b.fee)c.addIssue({code:'custom',message:'Total pembayaran tidak boleh melebihi fee deal',path:['payments']});});
export const scriptSchema=z.object({title:z.string().trim().min(1).max(200),brandId:z.string().max(100),brief:z.string().max(50000),platform:z.string().max(100),duration:z.string().max(100),goal:z.string().max(2000),sources:z.string().max(10000),content:z.string().max(60000)});
export const ideaSchema=z.object({title:z.string().trim().min(1).max(200),pillar:z.string().max(200),date:z.string().max(10),platform:z.string().max(100),status:z.enum(['Idea','Planned','Production','Posted']),notes:z.string().max(20000),source:z.string().max(2048)});
export const bodySchema=z.object({id:z.string().uuid(),kind:z.enum(['brand','script','idea']),revision:z.number().int().min(0),data:z.unknown()});
export const schemas={brand:brandSchema,script:scriptSchema,idea:ideaSchema};
export type Brand=z.infer<typeof brandSchema>;export type Sow=Brand['sows'][number];export type Script=z.infer<typeof scriptSchema>;export type Idea=z.infer<typeof ideaSchema>;
export type RecordItem={id:string;kind:'brand'|'script'|'idea';revision:number;data:any;updated:string};
export function stageOf(b:Brand){if(b.sows.every(s=>s.stage==='Posted'))return 'Posted'; if(b.sows.some(s=>s.stage==='Production'))return 'Production';if(b.sows.some(s=>s.stage==='Review Brand'||s.stage==='Posted'))return 'Review Brand';return 'Dealing';}
