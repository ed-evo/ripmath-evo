# [Teorema di Tolomeo]{.text-red}

**Teorema:**
Per ogni quadrilatero inscritto in una circonferenza la somma dei prodotti delle misure dei lati opposti è uguale al prodotto della misura delle due diagonali.

Più difficile da dire che da applicare: vale a dire che per le misure dei segmenti vale:

$\textcolor{blue}{AB \cdot CD + BC \cdot AD = AC \cdot BD}$

**Dimostrazione:**

Dal lato $AD$ del quadrilatero riporto il segmento $AE$ in modo che l'angolo $\widehat{EAD}$ sia congruente all'angolo $\widehat{BAC}$.
Considero i due triangoli $BAC$ e $AED$, essi hanno:

$\textcolor{red}{\widehat{BCA} = \widehat{EDA}}$
perché angoli alla circonferenza che insistono sullo stesso arco $BC$ (se prolungo $ED$ ....)

$\textcolor{red}{\widehat{BAC} = \widehat{EAD}}$
per costruzione.

Quindi i due triangoli $BAC$ ed $AED$ sono simili per il primo criterio di similitudine e posso scrivere:

> **Nota:** Ordino i vertici secondo gli angoli per scrivere meglio la proporzione:
> $A \to A$
> $C \to D$
> $B \to E$

$\textcolor{red}{AC : AD = BC : DE}$
ed applicando la proprietà fondamentale:
$\textcolor{red}{BC \cdot AD = AC \cdot DE}$

Considero ora i triangoli $ACD$ ed $AEB$, essi hanno:

$\textcolor{red}{\widehat{DAC} = \widehat{EAB}}$
perché somma di angoli congruenti ($\widehat{DAE} = \widehat{PAB}$) con lo stesso angolo $\widehat{EAP}$.

$\textcolor{red}{\widehat{ABD} = \widehat{ACD}}$
perché angoli alla circonferenza che insistono sullo stesso arco $AD$.

Quindi i due triangoli $ACD$ ed $ABE$ sono simili per il primo criterio di similitudine e posso scrivere:

> **Nota:** Ordino i vertici secondo gli angoli per scrivere meglio la proporzione:
> $A \to A$
> $C \to B$
> $D \to E$

$\textcolor{red}{AC : AB = CD : BE}$
ed applicando la proprietà fondamentale:
$\textcolor{red}{AB \cdot CD = AC \cdot BE}$

Ora riprendo entrambi i prodotti finali:

$\textcolor{red}{AB \cdot CD = AC \cdot BE}$
$\textcolor{red}{BC \cdot AD = AC \cdot DE}$

Sommo termine a termine:

$$
\textcolor{red}{AB \cdot CD + BC \cdot AD = AC \cdot BE + AC \cdot DE}
$$

Raccogliendo a fattor comune $AC$:

$$
\textcolor{red}{AB \cdot CD + BC \cdot AD = AC \cdot (BE + DE)}
$$

Ed essendo $BE + DE = BD$, avrò:

$\textcolor{blue}{AB \cdot CD + BC \cdot AD = AC \cdot BD}$

come volevamo dimostrare.