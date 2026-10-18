// SPDX-License-Identifier: AGPL-3.0-or-later

import type {RuntimeConfigSnapshot} from '@app/features/app/state/InstanceSnapshotStore';
import {AuthMinimalRegisterFormCore} from '@app/features/auth/flow/AuthMinimalRegisterFormCore';
import {AuthRuntimeTargetGate} from '@app/features/auth/flow/AuthRuntimeTargetGate';
import {useAuthPresentation} from '@app/features/auth/flow/useAuthPresentation';
import {AuthCardVariant} from '@app/features/auth/state/AuthLayoutContext';
import {useAuthRuntimeTarget} from '@app/features/auth/state/AuthRuntimeTarget';
import styles from '@app/features/auth/components/pages/TpgNickPage.module.css';
import mushroomMeme from '@app/media/images/tpg/5040c0a2-c2c6-448e-b731-ad43bb586ac5.webp';
import priestMeme from '@app/media/images/tpg/f615681b-3fc5-4f8a-a5aa-45a43779399e.webp';
import {useFluxerDocumentTitle} from '@app/features/window/hooks/useFluxerDocumentTitle';
import {observer} from 'mobx-react-lite';
import {useEffect, type ReactElement} from 'react';

function NickForm({runtimeSnapshot}: {runtimeSnapshot: RuntimeConfigSnapshot}): ReactElement {
	const runtimeTarget = useAuthRuntimeTarget();
	return (
		<AuthMinimalRegisterFormCore
			nameLabel="Como a tropa te chama?"
			namePlaceholder="ex.: Mano Uva"
			submitLabel="Entrar no TPG"
			redirectPath="/channels/@me"
			runtimeSnapshot={runtimeSnapshot}
			onAuthenticated={runtimeTarget.reset}
		/>
	);
}

const TpgNickPage = observer(function TpgNickPage() {
	useFluxerDocumentTitle('entrada da tropa');
	useAuthPresentation({variant: AuthCardVariant.WIDE});

	useEffect(() => {
		document.documentElement.dataset.tpgNick = 'true';
		return () => {
			delete document.documentElement.dataset.tpgNick;
		};
	}, []);

	return (
		<AuthRuntimeTargetGate>
			{(runtimeSnapshot) => (
				<div className={styles.page} data-tpg-nick-page="true">
					<section className={styles.poster} aria-label="Identidade visual da TPG">
						<div className={styles.posterTopline}>
							<span>TPG / 001</span>
							<span className={styles.liveMark}>
								<i /> ao vivo
							</span>
						</div>
						<div className={styles.logo}>
							<strong>TPG</strong>
							<span>central de<br />resenha</span>
						</div>
						<p className={styles.posterTitle}>
							a sala onde a call começa séria e termina em <em>lore.</em>
						</p>
						<div className={styles.posterArtboard}>
							<figure className={`${styles.posterArtCard} ${styles.posterArtCardMain}`}>
								<img src={mushroomMeme} alt="O conselho da TPG chegou" />
								<figcaption>o conselho chegou</figcaption>
							</figure>
							<figure className={`${styles.posterArtCard} ${styles.posterArtCardSide}`}>
								<img src={priestMeme} alt="Meme sem contexto da TPG" />
								<figcaption>sem contexto</figcaption>
							</figure>
							<span className={styles.sticker}>
								SEM
								<br />
								BUROCRACIA
							</span>
							<span className={styles.scribble}>
								ENTRA
								<br />NA TROPA →
							</span>
						</div>
						<div className={styles.posterFooter}>
							<span>
								<i /> servidor local
							</span>
							<span>voz / tela / caos</span>
						</div>
					</section>

					<section className={styles.formPanel} aria-label="Entrada na TPG">
						<div className={styles.formTopline}>
							<span className={styles.eyebrow}>acesso TPG-01</span>
							<span>sem e-mail · sem senha</span>
						</div>
						<h1 className={styles.title}>
							Entra na
							<br />
							<em>bagunça.</em>
						</h1>
						<p className={styles.lede}>
							Escolhe um nick e já cai nas salas. A tropa precisa saber quem acabou de chegar.
						</p>
						<NickForm runtimeSnapshot={runtimeSnapshot} />
						<div className={styles.formNotes}>
							<span>✓ sem cadastro</span>
							<span>♧ nick visível só na sala</span>
						</div>
						<span className={styles.formFooter}>Ao entrar, você aceita o caos organizado do clã.</span>
					</section>
				</div>
			)}
		</AuthRuntimeTargetGate>
	);
});

export default TpgNickPage;
