import "./StatCard.css";
import type { ReactNode } from "react";
interface StatCardProps { label:string; value:string; detail:string; icon:ReactNode; tone:"pink"|"orange"|"purple"|"blue"; }
export default function StatCard({label,value,detail,icon,tone}:StatCardProps) { return <article className="stat-card"><span className={`stat-card__icon stat-card__icon--${tone}`} aria-hidden="true">{icon}</span><div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div></article>; }
