// SPDX-License-Identifier: AGPL-3.0-or-later

import cowboyMeme from '@app/media/images/tpg/43621d36-2786-425b-81a2-69b7fc4c7818.webp';
import mushroomMeme from '@app/media/images/tpg/5040c0a2-c2c6-448e-b731-ad43bb586ac5.webp';
import grapeMeme from '@app/media/images/tpg/6ae44e8f-a9be-47a1-81bd-0f3ecaf6874c.webp';
import newsMeme from '@app/media/images/tpg/ac3487fe-de8d-4f00-89ea-19522b210c1a.webp';
import owlMeme from '@app/media/images/tpg/b849b6a4-09a8-4b90-b9a8-48d307af1e8c.webp';
import sunglassesMeme from '@app/media/images/tpg/e94e0076-a6ad-4927-b1f3-c9bce26d7110.webp';
import bedMeme from '@app/media/images/tpg/e9971a1c-bf86-484c-935a-5d807c08438f.webp';
import priestMeme from '@app/media/images/tpg/f615681b-3fc5-4f8a-a5aa-45a43779399e.webp';
import sacredMeme from '@app/media/images/tpg/f690e323-ea02-417d-85de-289402fc0707.webp';
import meFesoSound from '@app/media/sounds/tpg/me-fesô.mp3';
import mimNaoSound from '@app/media/sounds/tpg/mimnao.mp3';
import whatsappOneSound from '@app/media/sounds/tpg/WhatsApp Audio 2026-10-07 at 12.39.51 (1).ogg';
import whatsappTwoSound from '@app/media/sounds/tpg/WhatsApp Audio 2026-10-07 at 12.39.51 (2).ogg';
import whatsappThreeSound from '@app/media/sounds/tpg/WhatsApp Audio 2026-10-07 at 12.39.51.ogg';
import whatsappFourSound from '@app/media/sounds/tpg/WhatsApp Audio 2026-10-07 at 12.40.34.ogg';
import styles from './TpgTheme.module.css';
import {useEffect, useRef, type ReactElement} from 'react';

const constructorSound = '/assets/tpg/KHOLDENN_MEU_CONSTRUTOR_-_MAKALINK.m4a';
const naoIceSound = '/assets/tpg/nao_ice.wma';
const vinagrarSound = '/assets/tpg/VINAGRAR_VINAGRAR_-_MAKALINK.m4a';

const MEME_ART = [
	{src: mushroomMeme, alt: 'Homem com chapéu de cogumelo'},
	{src: sacredMeme, alt: 'Orem por leite sagrado'},
	{src: sunglassesMeme, alt: 'Homem de óculos'},
	{src: priestMeme, alt: 'Padre do TPG'},
	{src: grapeMeme, alt: 'Mano uva'},
	{src: owlMeme, alt: 'Homem e coruja'},
	{src: cowboyMeme, alt: 'Cowboy do TPG'},
	{src: newsMeme, alt: 'Notícia sem contexto'},
	{src: bedMeme, alt: 'Meme da cama'},
] as const;

const ACTION_SOUNDS = [
	mimNaoSound,
	meFesoSound,
	constructorSound,
	vinagrarSound,
	naoIceSound,
	whatsappOneSound,
	whatsappTwoSound,
	whatsappThreeSound,
	whatsappFourSound,
] as const;

const MEME_CLASS_NAMES = [
	styles.meme1,
	styles.meme2,
	styles.meme3,
	styles.meme4,
	styles.meme5,
	styles.meme6,
	styles.meme7,
	styles.meme8,
	styles.meme9,
] as const;

export function TpgAudioBus(): null {
	const currentAudio = useRef<HTMLAudioElement | null>(null);
	const hasPlayedIntro = useRef(false);

	useEffect(() => {
		const soundByAction = new WeakMap<Element, string>();
		let nextActionSoundIndex = 0;

		const playSound = (source: string, volume: number): void => {
			currentAudio.current?.pause();
			const audio = new Audio(source);
			audio.volume = volume;
			currentAudio.current = audio;
			void audio.play().catch(() => undefined);
		};

		const playIntroOnFirstInteraction = (): void => {
			if (hasPlayedIntro.current) return;
			hasPlayedIntro.current = true;
			playSound(mimNaoSound, 0.22);
			document.removeEventListener('pointerdown', playIntroOnFirstInteraction, true);
		};

		const handleAction = (event: MouseEvent): void => {
			const target = event.target instanceof Element ? event.target.closest('button, [role="button"]') : null;
			if (!target || target.closest('[data-tpg-audio="off"]')) return;
			let source = soundByAction.get(target);
			if (!source) {
				const assignedSource = ACTION_SOUNDS[nextActionSoundIndex % ACTION_SOUNDS.length] ?? mimNaoSound;
				source = assignedSource;
				nextActionSoundIndex += 1;
				soundByAction.set(target, assignedSource);
			}
			playSound(source, 0.28);
		};

		document.addEventListener('pointerdown', playIntroOnFirstInteraction, true);
		document.addEventListener('click', handleAction, true);
		return () => {
			document.removeEventListener('pointerdown', playIntroOnFirstInteraction, true);
			document.removeEventListener('click', handleAction, true);
			currentAudio.current?.pause();
		};
	}, []);

	return null;
}

export function TpgMemeBackdrop(): ReactElement {
	return (
		<aside className={styles.backdrop} aria-label="Memes oficiais da tropa" data-tpg-audio="off">
			<div className={styles.noise} />
			<div className={styles.tape} aria-hidden="true">
				<span>TPG / SEM CONTEXTO</span>
				<span>ENTRE POR SUA CONTA E RISCO</span>
			</div>
			<div className={styles.stamp} aria-hidden="true">
				<strong>TPG</strong>
				<span>LORE</span>
			</div>
			{MEME_ART.map((meme, index) => (
				<figure className={`${styles.meme} ${MEME_CLASS_NAMES[index]}`} key={meme.src}>
					<img src={meme.src} alt="" aria-hidden="true" />
					<figcaption>{meme.alt}</figcaption>
				</figure>
			))}
		</aside>
	);
}
