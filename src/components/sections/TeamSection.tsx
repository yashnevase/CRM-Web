import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { team } from '../../data/team';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function TeamSection() {
  return <section className="section-space overflow-hidden bg-canvas" id="team" aria-labelledby="team-title"><div className="page-shell"><motion.div {...inViewProps} variants={fadeUp}><SectionHeading eyebrow={siteContent.team.eyebrow} title={siteContent.team.title} description={siteContent.team.description} /></motion.div><motion.div {...inViewProps} variants={staggerFast} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{team.map((member) => <motion.article variants={fadeUp} whileHover="hover" key={member.name} className="group rounded-3xl border border-line/70 bg-surface p-3 shadow-card"><div className="relative overflow-hidden rounded-2xl bg-primary-soft"><MediaPlaceholder label={`${member.name}, ${member.role}`} kind="person" className="aspect-[.9] w-full transition duration-700 group-hover:scale-105" /><motion.div initial={{ opacity: 0, y: 12 }} variants={{ hover: { opacity: 1, y: 0 } }} className="absolute bottom-3 right-3 flex gap-2"><a href="#linkedin" className="focus-ring rounded-full bg-white/90 p-2.5 text-primary shadow-card" aria-label={`${member.name} on LinkedIn`}><Linkedin className="h-4 w-4" /></a><a href="#email" className="focus-ring rounded-full bg-white/90 p-2.5 text-primary shadow-card" aria-label={`Email ${member.name}`}><Mail className="h-4 w-4" /></a></motion.div></div><div className="px-3 pb-3 pt-5"><h3 className="font-bold">{member.name}</h3><p className="mt-1 text-sm text-muted">{member.role}</p></div></motion.article>)}</motion.div></div></section>;
}
